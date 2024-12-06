import puppeteer from "puppeteer"
import { connectDB } from "../basededatos/mongodb.js";
import userModel from "../modelos/user.model.js";
import publicationModel from "../modelos/publication.model.js";
import pagosModel from "../modelos/pagos.model.js";
import urlsML from "../urls/mercadolibre.js";
import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';
import Telegraf from "telegraf";
import urlsZP from "../urls/zonaprop.js";
import urlsARGP from "../urls/argenprop.js"
import zonaModel from "../modelos/zona.model.js";

const bot = new Telegraf('6519385897:AAHrxd20APsuE2hlJ1jo5cu0O0qnNIVAmBk')
// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB()
// console.log(urlsML)


async function guardarInformacion(informacion, zonamodelo, ciudad, url) {
    // console.log({ informacion, zonamodelo, ciudad })
    try {
        // Validación básica de entrada
        if (!informacion || !informacion.propiedadesfijas || !ciudad || !zonamodelo) {
            throw new Error('Datos insuficientes para crear la publicación o actualizar la zona');
        }
        const nuevaPublicacion = new publicationModel({
            props: { ...informacion.propiedades },
            titulo: informacion.propiedadesfijas.Titulo,
            precio: informacion.propiedadesfijas.Precio,
            imagen: informacion.propiedadesfijas.Imagen,
            tipo: informacion.propiedadesfijas.Tipo,
            provincia: ciudad.provincia,
            ciudad: ciudad.ciudad,
            ciudadjson: ciudad.ciudadjson,
            url: url
        })
        const publicacionGuardada = await nuevaPublicacion.save()
        zonamodelo.Publicaciones.unshift(publicacionGuardada._id);
        
        // Guardar cambios en zonamodelo
        try{

            const zonaActualizada = await zonamodelo.save();
        }catch{
            try{
                const zonalista = ciudad.ciudadjson.replace(/[.,\s]+/g, '')
                const zonamodelo2 = await zonaModel.findOne({ ciudadjson: zonalista })
                zonamodelo2.Publicaciones.unshift(publicacionGuardada._id);
                const zonaActualizada2 = await zonamodelo2.save();
            }catch(error2){
                console.error('Error al guardar la información2:', error2);
                throw error2; // Propaga el error si necesitas manejarlo en un nivel superior
            }
        }
        // console.log("se agrego uno")
        // console.log('Zona actualizada con la nueva publicación:', zonaActualizada);

    } catch (error) {
        console.error('Error al guardar la información:', error);
        throw error; // Propaga el error si necesitas manejarlo en un nivel superior
    }
}







async function eliminarviejos(fichero) {
    try {
        const filepathML = path.join(__dirname, `../urlsLocales/urlsML.${fichero}.json`)
        // Leer el archivo existente
        const dataML = fs.readFileSync(filepathML, 'utf-8');
        const urlsML = JSON.parse(dataML); // Parsear el contenido a un array

        const filepathZP = path.join(__dirname, `../urlsLocalesZP/urlsZP.${fichero}.json`)
        // Leer el archivo existente
        const dataZP = fs.readFileSync(filepathZP, 'utf-8');
        const urlsZP = JSON.parse(dataZP); // Parsear el contenido a un array

        const filepathAP = path.join(__dirname, `../urlsLocalesAP/urlsAP.${fichero}.json`)
        // Leer el archivo existente
        const dataAP = fs.readFileSync(filepathAP, 'utf-8');
        const urlsAP = JSON.parse(dataAP); // Parsear el contenido a un array

        // Obtener el timestamp actual y calcular el límite de 2 días
        const ahora = Date.now();
        const dosDiasEnMs = 2 * 24 * 60 * 60 * 1000;

        // Filtrar los objetos que tienen una fecha dentro del rango permitido
        const urlsFiltradasML = urlsML.filter(obj => (ahora - obj.fecha) <= dosDiasEnMs);
        const urlsFiltradasAP = urlsAP.filter(obj => (ahora - obj.fecha) <= dosDiasEnMs);
        const urlsFiltradasZP = urlsZP.filter(obj => (ahora - obj.fecha) <= dosDiasEnMs);

        // Escribir el array filtrado de nuevo en el archivo
        fs.writeFileSync(filepathML, JSON.stringify(urlsFiltradasML, null, 2)); // Formato bonito con 2 espacios
        fs.writeFileSync(filepathZP, JSON.stringify(urlsFiltradasZP, null, 2)); // Formato bonito con 2 espacios
        fs.writeFileSync(filepathAP, JSON.stringify(urlsFiltradasAP, null, 2)); // Formato bonito con 2 espacios

        console.log('Se eliminaron las URLs con más de 2 días de antigüedad.');
    } catch (error) {
        console.error('Error al eliminar URLs antiguas:', error);
    }
}
async function eliminarTodoLoViejo() {
    for (let i = 0; i < urlsML.length; i++) {
        // console.log("ML", urlsML[i].provincia + " | " + urlsML[i].ciudad)
        try {
            await eliminarviejos(urlsML[i].ciudadjson.replace(/[.,\s]+/g, ''))
            await eliminarviejos(urlsZP[i].ciudadjson.replace(/[.,\s]+/g, ''))
            await eliminarviejos(urlsARGP[i].ciudadjson.replace(/[.,\s]+/g, ''))
        }
        catch {
            console.log("errordddml")
        }
    }
}
// eliminarTodoLoViejo()

async function agregarUrl(url, fichero) {
    try {
        const filepath = path.join(__dirname, `../urlsLocales/urlsML.${fichero}.json`)
        // Leer el archivo existente
        const data = fs.readFileSync(filepath, 'utf-8');
        const urlsML2 = JSON.parse(data); // Parsear el contenido a un array

        // Crear el nuevo objeto con la URL y la fecha
        const nuevoObjeto = {
            url: url,
            fecha: Date.now()
        };

        // Agregar el nuevo objeto al array
        urlsML2.unshift(nuevoObjeto);

        // Escribir el array actualizado de nuevo en el archivo
        fs.writeFileSync(filepath, JSON.stringify(urlsML2, null, 2)); // Formato bonito con 2 espacios

        // console.log('URL agregada exitosamente:', nuevoObjeto);
    } catch (error) {
        console.error('Error al agregar la URL:', error);
    }
}
async function VerificarNovedad(array1, ficheroarray2) {
    if (array1.length < 1) { return [] }
    const filepath = path.join(__dirname, `../urlsLocales/urlsML.${ficheroarray2}.json`)
    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(filepath, '[]'); // Crear el archivo si no existe
    }
    const data = fs.readFileSync(filepath, 'utf-8');
    const array2 = JSON.parse(data); // Parsear el contenido a un array

    // Leer el archivo existente

    // Crear un conjunto de URLs de array2
    const urlsSet = new Set(array2.map(item => item.url));

    // Crear un conjunto para las URLs únicas de array1
    const uniqueUrlsSet = new Set();

    // Filtrar y agregar URLs únicas que no están en array2
    array1.forEach(url => {
        if (!urlsSet.has(url)) {
            uniqueUrlsSet.add(url);
        }
    });

    // Convertir el conjunto de URLs únicas a un array y filtrar las que aparecen solo una vez
    const result = [...uniqueUrlsSet].filter(url => array1.indexOf(url) === array1.lastIndexOf(url));
    // console.log("array2",array2)
    // console.log("array1",array1)
    // console.log("result",result)
    return result
}
async function agregarUrlZP(url, fichero) {
    try {
        const filepath = path.join(__dirname, `../urlsLocalesZP/urlsZP.${fichero}.json`)
        // Leer el archivo existente
        const data = fs.readFileSync(filepath, 'utf-8');
        const urlsML2 = JSON.parse(data); // Parsear el contenido a un array

        // Crear el nuevo objeto con la URL y la fecha
        const nuevoObjeto = {
            url: url,
            fecha: Date.now()
        };

        // Agregar el nuevo objeto al array
        urlsML2.unshift(nuevoObjeto);

        // Escribir el array actualizado de nuevo en el archivo
        fs.writeFileSync(filepath, JSON.stringify(urlsML2, null, 2)); // Formato bonito con 2 espacios

        // console.log('URLZP agregada exitosamente:', nuevoObjeto);
    } catch (error) {
        console.error('Error al agregar la URL:', error);
    }
}
async function VerificarNovedadZP(array1, ficheroarray2) {
    if (array1.length < 1) { return [] }
    const filepath = path.join(__dirname, `../urlsLocalesZP/urlsZP.${ficheroarray2}.json`)
    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(filepath, '[]'); // Crear el archivo si no existe
    }
    const data = fs.readFileSync(filepath, 'utf-8');
    const array2 = JSON.parse(data); // Parsear el contenido a un array

    // Leer el archivo existente

    // Crear un conjunto de URLs de array2
    const urlsSet = new Set(array2.map(item => item.url));

    // Crear un conjunto para las URLs únicas de array1
    const uniqueUrlsSet = new Set();

    // Filtrar y agregar URLs únicas que no están en array2
    array1.forEach(url => {
        if (!urlsSet.has(url)) {
            uniqueUrlsSet.add(url);
        }
    });

    // Convertir el conjunto de URLs únicas a un array y filtrar las que aparecen solo una vez
    const result = [...uniqueUrlsSet].filter(url => array1.indexOf(url) === array1.lastIndexOf(url));
    // console.log("array2",array2)
    // console.log("array1",array1)
    // console.log("result",result)
    return result
}
async function agregarUrlAP(url, fichero) {
    try {
        const filepath = path.join(__dirname, `../urlsLocalesAP/urlsAP.${fichero}.json`)
        // Leer el archivo existente
        const data = fs.readFileSync(filepath, 'utf-8');
        const urlsML2 = JSON.parse(data); // Parsear el contenido a un array

        // Crear el nuevo objeto con la URL y la fecha
        const nuevoObjeto = {
            url: url,
            fecha: Date.now()
        };

        // Agregar el nuevo objeto al array
        urlsML2.unshift(nuevoObjeto);

        // Escribir el array actualizado de nuevo en el archivo
        fs.writeFileSync(filepath, JSON.stringify(urlsML2, null, 2)); // Formato bonito con 2 espacios

        // console.log('URLAP agregada exitosamente:', nuevoObjeto);
    } catch (error) {
        console.error('Error al agregar la URL:', error);
    }
}
async function VerificarNovedadAP(array1, ficheroarray2) {
    if (array1.length < 1) { return []; }

    const filepath = path.join(__dirname, `../urlsLocalesAP/urlsAP.${ficheroarray2}.json`);
    if (!fs.existsSync(filepath)) {
        fs.writeFileSync(filepath, '[]'); // Crear el archivo si no existe
    }

    const data = fs.readFileSync(filepath, 'utf-8');
    const array2 = JSON.parse(data); // Parsear el contenido a un array

    // Crear un conjunto de URLs de array2 para una búsqueda rápida
    const urlsSet = new Set(array2.map(item => item.url));

    // Array donde se almacenarán las URLs nuevas
    const result = [];

    // Recorrer array1 y agregar URLs hasta encontrar una que ya exista en array2
    for (let url of array1) {
        if (urlsSet.has(url)) {
            break; // Detener el recorrido si la URL ya existe en array2
        }
        result.push(url); // Agregar URL al nuevo array si no existe en array2
    }

    return result;
}










async function ejecutarML2() {
    // Crear un nuevo objeto Date con la fecha y hora actuales
    const now = new Date();

    // Obtener la hora actual en formato de 24 horas (de 0 a 23)
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let provinciaa = "nada"
    try {
        for (let i = 0; i < urlsML.length; i++) {
            if(provinciaa !== urlsML[i].provincia){
                provinciaa = urlsML[i].provincia
                console.log("ML2", urlsML[i].provincia)
            }
            // console.log("ML2", urlsML[i].provincia + " | " + urlsML[i].ciudad)
            try {
                await recorrerCiudades2(urlsML[i])
            }
            catch {
                console.log("errordddml")
            }
        }
        // Crear un nuevo objeto Date con la fecha y hora actuales
        const nowfinish = new Date();
        const hoursfinish = nowfinish.getHours();
        const minutesfinish = nowfinish.getMinutes();
        const secondsfinish = nowfinish.getSeconds();
        // Mostrar la hora en la consola     
        return {
            HorainicioML: `${hours}:${minutes}:${seconds}`,
            HorafinalML: `${hoursfinish}:${minutesfinish}:${secondsfinish}`
        }
    } catch (error) {
        console.error('Error al ejecutar ML:', error);
    }
}

async function recorrerCiudades2(ciudadML) {
    const navegador = await puppeteer.launch({ headless: "new" });
    // Se crea un contexto de navegador en incógnito
    const navegadorEnIncognito = await navegador.createIncognitoBrowserContext();
    // Se abre una nueva pestaña en el contexto de incógnito
    const page = await navegadorEnIncognito.newPage();
    // Se abre el navegador
    const resultsUsers = await userModel.aggregate([
        {
            $lookup: {
                from: "pagos",       // Nombre de la colección relacionada
                localField: "pagos",  // Campo en el modelo principal que contiene los ObjectIds de pagos
                foreignField: "_id",  // Campo en la colección relacionada que se une con los ObjectIds
                as: "pagosInfo"       // Nombre del nuevo campo que almacenará la info relacionada
            }
        },
        {
            $match: {
                $or: [
                    { planjson: ciudadML.provincia },
                    { planjson: ciudadML.ciudadjson },
                    { planjson: "Pais" }
                ],
                "pagosInfo.status": "authorized"  // Condición en la relación de pagos
            }
        }
    ]);
    try {


        // console.log("holaae", ciudadML)
        // const resultsUsers = await userModel.find({
        //     $or: [
        //       { planjson: ciudadML.provincia },
        //       { planjson: ciudadML.ciudadjson },
        //       { planjson: "Pais" }
        //     ]
        //   });

        //estos son los usuarios que tienen pagado planes
        //estos son los usuarios que tienen pagado planes
        //estos son los usuarios que tienen pagado planes
        // console.log("resultsUsers", resultsUsers)
        //estos son los usuarios que tienen pagado planes
        //estos son los usuarios que tienen pagado planes
        //estos son los usuarios que tienen pagado planes
        page.goto(ciudadML.url, { waitUntil: 'load' })
        await new Promise(r => setTimeout(r, 2000))
        let ejemplotetet = [];
        for (let siguientee = "inicio"; siguientee;) {
            await new Promise(r => setTimeout(r, 2000))
            const info3 = await page.evaluate(async () => {
                let hrefSiguiente
                let cartaslistas = []
                const v = document.querySelector(".ui-search-rescue.ui-search-rescue--zrp")
                if (v) { console.log("si"); return { cartaslistas, hrefSiguiente } } else { console.log("no") }
                const enlaceSiguiente = document.querySelector('.andes-pagination__button--next a');
                // Verificar si se encontró el enlace
                const cartas = [...document.querySelectorAll(".poly-component__title a")]
                // for(let ll=0;ll<cartas.length;ll++){
                for (let ll = 0; ll < cartas.length; ll++) {
                    cartaslistas.push(cartas[ll].getAttribute('href').split('-').slice(0, 2).join('-'))
                }
                if (enlaceSiguiente) {
                    // Obtener el valor del atributo href
                    hrefSiguiente = enlaceSiguiente.getAttribute('href');
                    // console.log("URL del enlace 'Siguiente':", hrefSiguiente);
                }
                return { cartaslistas, hrefSiguiente }
            })

            // let siguientee="inicio"
            // console.log("holaa", info3.cartaslistas)
            async function miFuncion(indice, navegadorEnIncognito, zonamodelo) {
                // console.log(`Iniciando tarea ${indice}`);
                //nueva pagina para ver detalle de la publicacion
                const page4 = await navegadorEnIncognito.newPage()
                await new Promise(r => setTimeout(r, 2000))
                try {
                    // await new Promise(r => setTimeout(r, 2000))
                    //se va al link correspondiente
                    await page4.goto(cartasFiltradas[indice], { waitUntil: 'load' })
                    await new Promise(r => setTimeout(r, 2000))

                    //se evalua la web para buscar datos
                    const informacion = await page4.evaluate(() => {
                        const contenedorEspecificaciones = document.querySelector('.ui-vpp-highlighted-specs__striped-specs');
                        const contenedorEspecificaciones2 = document.querySelector('.ui-pdp-specs__table');

                        // Objeto para almacenar las propiedades y sus valores
                        const propiedades = {};
                        const propiedadesfijas = {};
                        propiedadesfijas["Tipo"] = document.querySelector(".ui-pdp-subtitle").textContent
                        propiedadesfijas["Titulo"] = document.querySelector(".ui-pdp-title").textContent
                        // propiedadesfijas["Tiempo"] = document.querySelector(".ui-pdp-header__bottom-subtitle").textContent
                        propiedadesfijas["Precio"] = document.querySelector(".andes-money-amount").textContent
                        propiedadesfijas["Imagen"] = document.querySelector(".ui-pdp-gallery__figure__image").src
                        // Función para extraer las propiedades y sus valores
                        function extraerPropiedadesYValores(contenedor) {
                            // Obtener todas las filas de la tabla
                            const filas = contenedor.querySelectorAll('.andes-table__row');
                            let contador = 0;
                            // Iterar sobre las filas
                            for (const fila of filas) {
                                // Verificar si ya hemos extraído 5 propiedades
                                if (contador >= 5) break;

                                // Obtener el nombre de la propiedad y su valor
                                const propiedad = fila.querySelector('.andes-table__header__container').textContent.trim();
                                const valor = fila.querySelector('.andes-table__column--value').textContent.trim();

                                // Agregar la propiedad y su valor al objeto
                                propiedades[propiedad] = valor;

                                // Incrementar el contador
                                contador++;
                            }
                        }

                        // Extraer propiedades y valores del contenedor principal
                        if (contenedorEspecificaciones2) {
                            extraerPropiedadesYValores(contenedorEspecificaciones2);

                        }
                        else {

                            extraerPropiedadesYValores(contenedorEspecificaciones);
                        }

                        //                             // Mostrar el objeto con las propiedades y sus valores
                        //                             // console.log(propiedades);
                        return { propiedades, propiedadesfijas }
                    })
                    //se suma la url de la pagina
                    // let informacionex = { ...informacion, url: page4.url() }
                    // //se crea la publicacion en la base de datos
                    // // let newpublication = await publicationModel.create(
                    // //     { datos: informacionex }
                    // // )

                    // console.log("informacionexinformacionex", informacionex)

                    const informacionAEnviar = {
                        tipo: informacion.propiedadesfijas.Tipo || "...",
                        titulo: informacion.propiedadesfijas.Titulo || "...",
                        precio: informacion.propiedadesfijas.Precio || "...",
                        imagen: informacion.propiedadesfijas.Imagen || "https://img.freepik.com/foto-gratis/fondo-muro-hormigon-blanco-blanco_53876-145041.jpg",
                        url: page4.url() || "https://www.mercadolibre.com.ar",
                    }
                    const mensaje = Object.entries(informacion.propiedades)
                        .map(([prop, valor]) => `${prop}: ${valor}\n`)
                        .join('');
                    // console.log("mensaje",mensaje)
                    try {
                        await guardarInformacion(informacion, zonamodelo, ciudadML, cartasFiltradas[indice])
                        //  console.log('Resultado:', resultado);
                    } catch (error) {
                        console.error('Error al guardar la publicación:', error);
                    }
                    for (let jhh = 0; jhh < resultsUsers.length; jhh++) {
                        if (resultsUsers[jhh].planjson === "Pais" || resultsUsers[jhh].planjson === ciudadML.provincia || resultsUsers[jhh].planjson === ciudadML.ciudadjson) {
                            try {
                                //  caption: "🆕 " + informacionAEnviar.tipo + " 🆕\n" +
                                //      informacionAEnviar.titulo + "\n" +
                                //      "$" + informacionAEnviar.precio + "\n" + mensaje
                                //  ,
                                bot.telegram.sendPhoto(
                                    resultsUsers[jhh].telegramid,
                                    informacionAEnviar.imagen
                                    ,
                                    {
                                        caption: "🆕 " + informacionAEnviar.tipo + " 🆕\n" +
                                            informacionAEnviar.titulo + "\n" + informacionAEnviar.precio + "\n"
                                        ,
                                        reply_markup: {
                                            inline_keyboard: [
                                                [
                                                    { text: 'Ver más', url: informacionAEnviar.url }
                                                ]
                                            ]
                                        }
                                    }
                                ).catch((error) => {
                                    console.error('Error al enviar la imagen principal:', error.message);
                                    bot.telegram.sendPhoto(
                                        resultsUsers[jhh].telegramid,
                                        "https://img.freepik.com/foto-gratis/fondo-muro-hormigon-blanco-blanco_53876-145041.jpg"
                                        ,
                                        {
                                            caption: "🆕 " + informacionAEnviar.tipo + " 🆕\n" +
                                                informacionAEnviar.titulo + "\n" +
                                                "$" + informacionAEnviar.precio + "\n"
                                            ,
                                            reply_markup: {
                                                inline_keyboard: [
                                                    [
                                                        { text: 'Ver más', url: informacionAEnviar.url }
                                                    ]
                                                ]
                                            }
                                        }
                                    ).catch((fallbackError) => {
                                        console.error('Error al enviar la imagen por defecto:', fallbackError.message);
                                    });
                                });
                            } catch (error) {
                                console.log("error en el bot ML" + error)
                            }
                        }
                    }

                    await agregarUrl(cartasFiltradas[indice], ciudadML.ciudadjson.replace(/[.,\s]+/g, ''))
                    ejemplotetet.push({ ...informacion, url: page4.url() })
                    // console.log("avance 1;:ejemplotetet", ejemplotetet.slice(-1))
                    await new Promise(r => setTimeout(r, 2000))
                    await page4.close()
                    return indice
                }
                catch (erro) {
                    console.log("5° fase barrio:", erro)
                    await new Promise(r => setTimeout(r, 2000))
                    await page4.close()
                }
                console.log(`Tarea ${indice} completada`);
            }

            // Ejecutar la función 5 veces a la vez
            async function ejecutarFunciones(navegadorEnIncognito, ii) {
                const tareas = [];
                for (let i = 0; i < 5; i++) {
                    tareas.push(miFuncion(i, navegadorEnIncognito, ii));
                }
                await Promise.all(tareas);
                console.log('Todas las tareas completadas');
            }

            //   ejecutarFunciones(navegadorEnIncognito,ii);
            siguientee = info3.hrefSiguiente
            const cartasFiltradas = await VerificarNovedad(info3.cartaslistas, ciudadML.ciudadjson.replace(/[.,\s]+/g, ''))
            const tareas = [];
            // await new Promise(r => setTimeout(r, 2000))
            let zonamodelo
            if (cartasFiltradas.length > 0) {
                const zonalista = ciudadML.ciudadjson.replace(/[.,\s]+/g, '')
                zonamodelo = await zonaModel.findOne({ ciudadjson: zonalista })
            }
            for (let ii = 0; ii < cartasFiltradas.length; ii++) {
                await new Promise(r => setTimeout(r, 2000))

                tareas.push(miFuncion(ii, navegadorEnIncognito, zonamodelo));

            }
            await Promise.all(tareas);
            if (info3.hrefSiguiente) {
                // await page.goto(info3.hrefSiguiente, { waitUntil: 'networkidle2', timeout: 0 })
                await page.goto(info3.hrefSiguiente, { waitUntil: 'load' })
            }

        }
        await new Promise(r => setTimeout(r, 2000))
        await page.close()
        await navegador.close()
        // console.log("aqui")
        // console.log("aqui")
    }
    catch (error) {
        console.log("errrr", error)
        await page.close()
        await navegador.close()
    }
}
// ejecutarML2();

















async function ejecutarML() {
    // Crear un nuevo objeto Date con la fecha y hora actuales
    const now = new Date();

    // Obtener la hora actual en formato de 24 horas (de 0 a 23)
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    try {
        for (let i = 0; i < urlsML.length; i++) {
            console.log("ML", urlsML[i].provincia + " | " + urlsML[i].ciudad)
            try {
                await recorrerCiudades(urlsML[i])
            }
            catch {
                console.log("errordddml")
            }
        }
        // Crear un nuevo objeto Date con la fecha y hora actuales
        const nowfinish = new Date();
        const hoursfinish = nowfinish.getHours();
        const minutesfinish = nowfinish.getMinutes();
        const secondsfinish = nowfinish.getSeconds();
        // Mostrar la hora en la consola
        console.log(`Hora inicio ML: ${hours}:${minutes}:${seconds}`);
        console.log(`Hora final ML: ${hoursfinish}:${minutesfinish}:${secondsfinish}`);
    } catch (error) {
        console.error('Error al ejecutar ML:', error);
    }
}




async function recorrerCiudades(ciudadML) {
    const navegador = await puppeteer.launch({ headless: "new" });
    // Se crea un contexto de navegador en incógnito
    const navegadorEnIncognito = await navegador.createIncognitoBrowserContext();
    // Se abre una nueva pestaña en el contexto de incógnito
    const page = await navegadorEnIncognito.newPage();
    // Se abre el navegador
    const resultsUsers = await userModel.aggregate([
        {
            $lookup: {
                from: "pagos",       // Nombre de la colección relacionada
                localField: "pagos",  // Campo en el modelo principal que contiene los ObjectIds de pagos
                foreignField: "_id",  // Campo en la colección relacionada que se une con los ObjectIds
                as: "pagosInfo"       // Nombre del nuevo campo que almacenará la info relacionada
            }
        },
        {
            $match: {
                $or: [
                    { planjson: ciudadML.provincia },
                    { planjson: ciudadML.ciudadjson },
                    { planjson: "Pais" }
                ],
                "pagosInfo.status": "authorized"  // Condición en la relación de pagos
            }
        }
    ]);
    try {


        // console.log("holaae", ciudadML)
        // const resultsUsers = await userModel.find({
        //     $or: [
        //       { planjson: ciudadML.provincia },
        //       { planjson: ciudadML.ciudadjson },
        //       { planjson: "Pais" }
        //     ]
        //   });

        //estos son los usuarios que tienen pagado planes
        //estos son los usuarios que tienen pagado planes
        //estos son los usuarios que tienen pagado planes
        // console.log("resultsUsers", resultsUsers)
        //estos son los usuarios que tienen pagado planes
        //estos son los usuarios que tienen pagado planes
        //estos son los usuarios que tienen pagado planes
        page.goto(ciudadML.url, { waitUntil: 'load' })
        await new Promise(r => setTimeout(r, 1000))
        let ejemplotetet = [];
        for (let siguientee = "inicio"; siguientee;) {
            await new Promise(r => setTimeout(r, 1000))
            const info3 = await page.evaluate(async () => {
                let hrefSiguiente
                let cartaslistas = []
                const v = document.querySelector(".ui-search-rescue.ui-search-rescue--zrp")
                if (v) { console.log("si"); return { cartaslistas, hrefSiguiente } } else { console.log("no") }
                const enlaceSiguiente = document.querySelector('.andes-pagination__button--next a');
                // Verificar si se encontró el enlace
                const cartas = [...document.querySelectorAll(".poly-component__title a")]
                // for(let ll=0;ll<cartas.length;ll++){
                for (let ll = 0; ll < cartas.length; ll++) {
                    cartaslistas.push(cartas[ll].getAttribute('href').split('-').slice(0, 2).join('-'))
                }
                if (enlaceSiguiente) {
                    // Obtener el valor del atributo href
                    hrefSiguiente = enlaceSiguiente.getAttribute('href');
                    // console.log("URL del enlace 'Siguiente':", hrefSiguiente);
                }
                return { cartaslistas, hrefSiguiente }
            })

            // let siguientee="inicio"
            // console.log("holaa", info3.cartaslistas)
            siguientee = info3.hrefSiguiente
            const cartasFiltradas = await VerificarNovedad(info3.cartaslistas, ciudadML.ciudadjson.replace(/[.,\s]+/g, ''))
            for (let ii = 0; ii < cartasFiltradas.length; ii++) {

                //nueva pagina para ver detalle de la publicacion
                const page4 = await navegadorEnIncognito.newPage()
                await new Promise(r => setTimeout(r, 1000))
                try {
                    // await new Promise(r => setTimeout(r, 1000))
                    //se va al link correspondiente
                    await page4.goto(cartasFiltradas[ii], { waitUntil: 'load' })
                    await new Promise(r => setTimeout(r, 1000))

                    //se evalua la web para buscar datos
                    const informacion = await page4.evaluate(() => {
                        const contenedorEspecificaciones = document.querySelector('.ui-vpp-highlighted-specs__striped-specs');
                        const contenedorEspecificaciones2 = document.querySelector('.ui-pdp-specs__table');

                        // Objeto para almacenar las propiedades y sus valores
                        const propiedades = {};
                        const propiedadesfijas = {};
                        propiedadesfijas["Tipo"] = document.querySelector(".ui-pdp-subtitle").textContent
                        propiedadesfijas["Titulo"] = document.querySelector(".ui-pdp-title").textContent
                        // propiedadesfijas["Tiempo"] = document.querySelector(".ui-pdp-header__bottom-subtitle").textContent
                        propiedadesfijas["Precio"] = document.querySelector(".andes-money-amount__fraction").textContent
                        propiedadesfijas["Imagen"] = document.querySelector(".ui-pdp-gallery__figure__image").src
                        // Función para extraer las propiedades y sus valores
                        function extraerPropiedadesYValores(contenedor) {
                            // Obtener todas las filas de la tabla
                            const filas = contenedor.querySelectorAll('.andes-table__row');
                            let contador = 0;
                            // Iterar sobre las filas
                            for (const fila of filas) {
                                // Verificar si ya hemos extraído 5 propiedades
                                if (contador >= 5) break;

                                // Obtener el nombre de la propiedad y su valor
                                const propiedad = fila.querySelector('.andes-table__header__container').textContent.trim();
                                const valor = fila.querySelector('.andes-table__column--value').textContent.trim();

                                // Agregar la propiedad y su valor al objeto
                                propiedades[propiedad] = valor;

                                // Incrementar el contador
                                contador++;
                            }
                        }

                        // Extraer propiedades y valores del contenedor principal
                        if (contenedorEspecificaciones2) {
                            extraerPropiedadesYValores(contenedorEspecificaciones2);

                        }
                        else {

                            extraerPropiedadesYValores(contenedorEspecificaciones);
                        }

                        //                             // Mostrar el objeto con las propiedades y sus valores
                        //                             // console.log(propiedades);
                        return { propiedades, propiedadesfijas }
                    })
                    //se suma la url de la pagina
                    // let informacionex = { ...informacion, url: page4.url() }
                    // //se crea la publicacion en la base de datos
                    // // let newpublication = await publicationModel.create(
                    // //     { datos: informacionex }
                    // // )

                    // console.log("informacionexinformacionex", informacionex)

                    const informacionAEnviar = {
                        tipo: informacion.propiedadesfijas.Tipo || "No se save",
                        titulo: informacion.propiedadesfijas.Titulo || "No se save",
                        precio: informacion.propiedadesfijas.Precio || "No se save",
                        imagen: informacion.propiedadesfijas.Imagen || "No se save",
                        url: page4.url() || "No se save",
                    }
                    const mensaje = Object.entries(informacion.propiedades)
                        .map(([prop, valor]) => `${prop}: ${valor}\n`)
                        .join('');
                    // console.log("mensaje",mensaje)
                    for (let jhh = 0; jhh < resultsUsers.length; jhh++) {
                        if (resultsUsers[jhh].planjson === "Pais" || resultsUsers[jhh].planjson === ciudadML.provincia || resultsUsers[jhh].planjson === ciudadML.ciudadjson) {
                            try {
                                bot.telegram.sendPhoto(
                                    resultsUsers[jhh].telegramid,
                                    informacionAEnviar.imagen
                                    ,
                                    {
                                        caption: "🆕 " + informacionAEnviar.tipo + " 🆕\n" +
                                            informacionAEnviar.titulo + "\n" +
                                            "$" + informacionAEnviar.precio + "\n" + mensaje
                                        ,
                                        reply_markup: {
                                            inline_keyboard: [
                                                [
                                                    { text: 'Ver más', url: informacionAEnviar.url }
                                                ]
                                            ]
                                        }
                                    }
                                );
                            } catch (error) {
                                console.log("error en el bot ML" + error)
                            }
                        }
                    }

                    await agregarUrl(cartasFiltradas[ii], ciudadML.ciudadjson.replace(/[.,\s]+/g, ''))
                    ejemplotetet.push({ ...informacion, url: page4.url() })
                    // console.log("avance 1;:ejemplotetet", ejemplotetet.slice(-1))
                    await new Promise(r => setTimeout(r, 1000))
                    await page4.close()

                }
                catch (erro) {
                    console.log("5° fase barrio:", erro)
                    await new Promise(r => setTimeout(r, 1000))
                    await page4.close()
                }

            }
            if (info3.hrefSiguiente) {
                // await page.goto(info3.hrefSiguiente, { waitUntil: 'networkidle2', timeout: 0 })
                await page.goto(info3.hrefSiguiente, { waitUntil: 'load' })
            }

        }
        await new Promise(r => setTimeout(r, 1000))
        await page.close()
        await navegador.close()
        // console.log("aqui")
        // console.log("aqui")
    }
    catch (error) {
        console.log("errrr", error)
        await page.close()
        await navegador.close()
    }
}
// Llamar a la función
// ejecutarML();

async function ejecutarZonaProp() {
    //document.querySelectorAll(".thin-postings-container")[0].remove()
    //importante para obtener todas las cartas sin las recomendadas
    //####################
    //alquiler / venta / alquiler-temporal /
    //url base: https://www.zonaprop.com.ar
    //url disponible /propiedades/clasificado/alcllcin-gondola-en-alquiler-en-el-nuevo-paseo-comercial-de-54853989.html
    // Crear un nuevo objeto Date con la fecha y hora actuales
    const now = new Date();

    // Obtener la hora actual en formato de 24 horas (de 0 a 23)
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let provinciaa = "nada"
    try {
        for (let i = 0; i < urlsZP.length; i++) {
            if(provinciaa !== urlsZP[i].provincia){
                provinciaa = urlsZP[i].provincia
                console.log("ZP", urlsZP[i].provincia)
            }
            // console.log("ZP", urlsZP[i].provincia + " | " + urlsZP[i].ciudad)
            await recorrerCiudadesZP(urlsZP[i])
        }
        // Crear un nuevo objeto Date con la fecha y hora actuales
        const nowfinish = new Date();
        const hoursfinish = nowfinish.getHours();
        const minutesfinish = nowfinish.getMinutes();
        const secondsfinish = nowfinish.getSeconds();
        // Mostrar la hora en la consola        
        return {
            HorainicioZP: `${hours}:${minutes}:${seconds}`,
            HorafinalZP: `${hoursfinish}:${minutesfinish}:${secondsfinish}`
        }
    } catch (error) {
        console.error('Error al ejecutar ML:', error);
    }
}
async function recorrerCiudadesZP(ciudadZP) {
    const resultsUsers = await userModel.aggregate([
        {
            $lookup: {
                from: "pagos",       // Nombre de la colección relacionada
                localField: "pagos",  // Campo en el modelo principal que contiene los ObjectIds de pagos
                foreignField: "_id",  // Campo en la colección relacionada que se une con los ObjectIds
                as: "pagosInfo"       // Nombre del nuevo campo que almacenará la info relacionada
            }
        },
        {
            $match: {
                $or: [
                    { planjson: ciudadZP.provincia },
                    { planjson: ciudadZP.ciudadjson },
                    { planjson: "Pais" }
                ],
                "pagosInfo.status": "authorized"  // Condición en la relación de pagos
            }
        }
    ]);
    //estos son los usuarios que tienen pagado planes

    for (let h = 0; h < 3; h++) {
        const navegador = await puppeteer.launch({ headless: false,
            args: ['--window-position=-10000,0'], });
        // Se crea un contexto de navegador en incógnito
        const navegadorEnIncognito = await navegador.createIncognitoBrowserContext();
        const page = await navegadorEnIncognito.newPage();
        try {
            if (h === 0) {
                await page.goto(ciudadZP.url.replace("####################", "alquiler"), { waitUntil: 'load' })
            }
            if (h === 1) {
                await page.goto(ciudadZP.url.replace("####################", "alquiler-temporal"), { waitUntil: 'load' })
            }
            if (h === 2) {
                await page.goto(ciudadZP.url.replace("####################", "venta"), { waitUntil: 'load' })
            }
            // await new Promise(r => setTimeout(r, 1000))
            let ejemplotetet = [];
            const info332 = await page.evaluate(async () => {
                const titulo = document.querySelector(".Title-sc-6nvyhm-0.ljmHVn")?.textContent
                // console.log(titulo)
                // await new Promise(r => setTimeout(r, 100000))
                return titulo
            })
            // console.log("info332",info332)
            if (!info332) {
                for (let siguientee = 1; siguientee === 1;) {
                    // await new Promise(r => setTimeout(r, 1000))
                    const info3 = await page.evaluate(async () => {
                        let hrefSiguiente
                        let urlSiguiente
                        let cartaslistas = []
                        if (document.querySelector(".thin-postings-container")) {

                            document.querySelector(".thin-postings-container").remove()
                        }
                        const cartas = [...document.querySelectorAll(".CardContainer-sc-1tt2vbg-5.fvuHxG")]
                        // document.querySelectorAll(".CardContainer-sc-1tt2vbg-5.fvuHxG")[0].querySelector("[data-to-posting]").getAttribute("data-to-posting")
                        for (let ll = 0; ll < cartas.length; ll++) {
                            cartaslistas.push("https://www.zonaprop.com.ar" + cartas[ll].querySelector("[data-to-posting]").getAttribute("data-to-posting"))
                        }
                        if (!document.querySelector(".PageArrow-sc-n5babu-2.kTvCSV")) {
                            // Obtener el valor del atributo href
                            hrefSiguiente = 0
                            // console.log("URL del enlace 'Siguiente':", hrefSiguiente);
                        }
                        if (document.querySelector(".PageArrow-sc-n5babu-2.kTvCSV")) {
                            // Obtener el valor del atributo href
                            hrefSiguiente = 1
                            urlSiguiente = document.querySelector(".PageArrow-sc-n5babu-2.kTvCSV").href
                            // console.log("URL del enlace 'Siguiente':", hrefSiguiente);
                        }
                        return { cartaslistas, hrefSiguiente, urlSiguiente }
                    })

                    // let siguientee="inicio"
                    // console.log("holaa", info3.cartaslistas)
                    // console.log("info3.hrefSiguiente", info3.hrefSiguiente)
                    const cartasFiltradas = await VerificarNovedadZP(info3.cartaslistas, ciudadZP.ciudadjson.replace(/[.,\s]+/g, ''))
                   
                    let zonamodelo
                    if (cartasFiltradas.length > 0) {
                        const zonalista = ciudadZP.ciudadjson.replace(/[.,\s]+/g, '')
                        zonamodelo = await zonaModel.findOne({ ciudadjson: zonalista })
                    }
                    for (let ii = 0; ii < cartasFiltradas.length; ii++) {

                        //nueva pagina para ver detalle de la publicacion
                        const navegadorEnIncognito2 = await navegador.createIncognitoBrowserContext();
                        const page22 = await navegadorEnIncognito2.newPage();
                        // await new Promise(r => setTimeout(r, 1000))
                        try {
                            // await new Promise(r => setTimeout(r, 1000))
                            //se va al link correspondiente
                            // console.log("eror aqui?0",cartasFiltradas[ii]);
                            await page22.goto(cartasFiltradas[ii], { waitUntil: 'load' })
                            // await new Promise(r => setTimeout(r, 1000))

                            //se evalua la web para buscar datos
                            const informacion = await page22.evaluate(() => {
                                //  new Promise(r => setTimeout(r, 100000))
                                // const contenedorEspecificaciones = document.querySelector('.ui-vpp-highlighted-specs__striped-specs');
                                // const contenedorEspecificaciones2 = document.querySelector('.ui-pdp-specs__table');

                                // Objeto para almacenar las propiedades y sus valores
                                const propiedades = [];
                                const propiedadesfijas = {};
                                // console.log("eror aqui?");
                                propiedadesfijas["Tipo"] = document.querySelector(".price-value span").childNodes[0].textContent.replace(/[\n\t]/g, "").trim()
                                propiedadesfijas["Titulo"] = document.querySelector(".title-property").textContent.replace(/[\n\t]/g, "").trim()
                                // propiedadesfijas["Tiempo"] = document.querySelector(".ui-pdp-header__bottom-subtitle").textContent
                                propiedadesfijas["Precio"] = document.querySelector(".price-value span span").textContent.replace(/[\n\t]/g, "").trim()
                                propiedadesfijas["Imagen"] = document.querySelector('#multimedia-content').querySelector('img').src
                                if (document.querySelector(".price-expenses")) {
                                    propiedades.push(document.querySelector(".price-expenses").textContent.replace(/[\n\t]/g, "").trim())
                                }
                                [...document.querySelectorAll(".icon-feature")].map(ed => propiedades.push(ed.textContent.replace(/[\n\t]/g, "").trim()))
                                // console.log("eror aqui?2");

                                //                             // Mostrar el objeto con las propiedades y sus valores
                                //                             // console.log(propiedades);
                                return { propiedades, propiedadesfijas }
                            })
                            //se suma la url de la pagina
                            // let informacionex = { ...informacion, url: page4.url() }
                            // //se crea la publicacion en la base de datos
                            // // let newpublication = await publicationModel.create(
                            // //     { datos: informacionex }
                            // // )

                            // console.log("informacionexinformacionex", informacionex)

                            const informacionAEnviar = {
                                tipo: informacion.propiedadesfijas.Tipo || "No se save",
                                titulo: informacion.propiedadesfijas.Titulo || "No se save",
                                precio: informacion.propiedadesfijas.Precio || "No se save",
                                imagen: informacion.propiedadesfijas.Imagen || "No se save",
                                url: page22.url() || "No se save",
                            }
                            const mensaje = informacion.propiedades.slice(0, 5).join("\n")
                            // console.log("mensaje",mensaje)
                            try {
                                await guardarInformacion(informacion, zonamodelo, ciudadZP, informacionAEnviar.url)
                                //  console.log('Resultado:', resultado);
                            } catch (error) {
                                console.error('Error al guardar la publicación:', error);
                            }
                            for (let jhh = 0; jhh < resultsUsers.length; jhh++) {
                                if (resultsUsers[jhh].planjson === "Pais" || resultsUsers[jhh].planjson === ciudadZP.provincia || resultsUsers[jhh].planjson === ciudadZP.ciudadjson) {
                                    bot.telegram.sendPhoto(
                                        resultsUsers[jhh].telegramid,
                                        informacionAEnviar.imagen
                                        ,
                                        {
                                            caption: "🆕🆕🆕 " + informacionAEnviar.tipo + " 🆕🆕🆕\n" +
                                                informacionAEnviar.titulo + "\n" +
                                                "$" + informacionAEnviar.precio + "\n" + mensaje
                                            ,
                                            reply_markup: {
                                                inline_keyboard: [
                                                    [
                                                        { text: 'Ver más', url: informacionAEnviar.url }
                                                    ]
                                                ]
                                            }
                                        }
                                    );
                                }
                            }

                            await agregarUrlZP(cartasFiltradas[ii], ciudadZP.ciudadjson.replace(/[.,\s]+/g, ''))
                            ejemplotetet.push({ ...informacion, url: page22.url() })
                            // console.log("avance 1;:ejemplotetet", ejemplotetet.slice(-1))
                            // await new Promise(r => setTimeout(r, 2000))
                            await page22.close()

                        }
                        catch (erro) {
                            console.log("5° fase barrio:", erro)
                            await new Promise(r => setTimeout(r, 2000))
                            await page22.close()
                        }

                    }

                    siguientee = info3.hrefSiguiente
                    if (info3.urlSiguiente) {
                        await page.goto(info3.urlSiguiente, { waitUntil: 'load' })
                    }

                }



            }
            // await new Promise(r => setTimeout(r, 2000))
            await page.close()
            await navegadorEnIncognito.close();
            await navegador.close()
        }
        catch {
            await page.close()
            await navegadorEnIncognito.close();
            await navegador.close()
        }
    }
}
// Llamar a la función
// ejecutarZonaProp()

async function ejecutarArgenProp() {
    // Crear un nuevo objeto Date con la fecha y hora actuales
    const now = new Date();

    // Obtener la hora actual en formato de 24 horas (de 0 a 23)
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let provinciaa = "nada"
    try {
        for (let i = 0; i < urlsARGP.length; i++) {
            if(provinciaa !== urlsARGP[i].provincia){
                provinciaa = urlsARGP[i].provincia
                console.log("ARGP", urlsARGP[i].provincia)
            }
            await recorrerCiudadesAP(urlsARGP[i])
        }
        // Crear un nuevo objeto Date con la fecha y hora actuales
        const nowfinish = new Date();
        const hoursfinish = nowfinish.getHours();
        const minutesfinish = nowfinish.getMinutes();
        const secondsfinish = nowfinish.getSeconds();
        // Mostrar la hora en la consola
        return {
            HorainicioARGP: `${hours}:${minutes}:${seconds}`,
            HorafinalARGP: `${hoursfinish}:${minutesfinish}:${secondsfinish}`
        }
    } catch (error) {
        console.error('Error al ejecutar ML:', error);
    }
}
async function recorrerCiudadesAP(ciudadARGP) {
    const resultsUsers = await userModel.aggregate([
        {
            $lookup: {
                from: "pagos",       // Nombre de la colección relacionada
                localField: "pagos",  // Campo en el modelo principal que contiene los ObjectIds de pagos
                foreignField: "_id",  // Campo en la colección relacionada que se une con los ObjectIds
                as: "pagosInfo"       // Nombre del nuevo campo que almacenará la info relacionada
            }
        },
        {
            $match: {
                $or: [
                    { planjson: ciudadARGP.provincia },
                    { planjson: ciudadARGP.ciudadjson },
                    { planjson: "Pais" }
                ],
                "pagosInfo.status": "authorized"  // Condición en la relación de pagos
            }
        }
    ]);

    const navegador = await puppeteer.launch({ headless: "new" });
    // Se crea un contexto de navegador en incógnito
    const navegadorEnIncognito = await navegador.createIncognitoBrowserContext();
    const page = await navegadorEnIncognito.newPage();
    try {

        await page.goto(ciudadARGP.url, { waitUntil: 'load' })
        const info = await page.evaluate(async () => {
            let cartaslistas = []
            const cartas = [...document.querySelectorAll(".listing__item")]
            // document.querySelectorAll(".listing__item")[0].querySelector(".card").href)
            for (let y = 0; y < cartas.length; y++) {
                cartaslistas.push(cartas[y].querySelector(".card").href)
            }
            return { cartaslistas }
        })
        const cartasFiltradas = await VerificarNovedadAP(info.cartaslistas, ciudadARGP.ciudadjson.replace(/[.,\s]+/g, ''))
        const cartasFiltradasreverse = cartasFiltradas.reverse()
        let zonamodelo
            if (cartasFiltradasreverse.length > 0) {
                const zonalista = ciudadARGP.ciudadjson.replace(/[.,\s]+/g, '')
                zonamodelo = await zonaModel.findOne({ ciudadjson: zonalista })
            }
        for (let yu = 0; yu < cartasFiltradasreverse.length; yu++) {
            const page2 = await navegadorEnIncognito.newPage()
            await page2.goto(cartasFiltradasreverse[yu])
            const informacion3 = await page2.evaluate(async () => {
                let propiedades = []
                let propiedadesfijas = {
                    precio: document.querySelector(".titlebar__price").textContent.replace(/[\n\t]/g, "").trim(),
                    titulo: document.querySelector(".section-description--title").textContent.replace(/[\n\t]/g, "").trim(),
                    tipo: document.querySelectorAll('span[property="name"]')[2].textContent,
                    imagen: window.getComputedStyle(document.querySelector('div[data-open-gallery="0"]')).backgroundImage.match(/url\(([^)]+)\)/)[1].replace(/['"]/g, '')
                }
                const props = [...document.querySelectorAll(".desktop")]
                for (let hgg = 1; hgg < props.length; hgg++) {
                    propiedades.push(props[hgg].textContent.replace(/[\n\t]/g, "").trim())
                }
                return { propiedades, propiedadesfijas }
            })
            // console.log("informacion3",informacion3)
            // await new Promise(r => setTimeout(r, 200000))
            const mensaje = informacion3.propiedades.slice(0, 5).join("\n")
            // console.log("mensaje",mensaje)
            try {
                await guardarInformacion(informacion3, zonamodelo, ciudadARGP, cartasFiltradasreverse[yu])
                //  console.log('Resultado:', resultado);
            } catch (error) {
                console.error('Error al guardar la publicación:', error);
            }
            for (let jhh = 0; jhh < resultsUsers.length; jhh++) {
                if (resultsUsers[jhh].planjson === "Pais" || resultsUsers[jhh].planjson === ciudadARGP.provincia || resultsUsers[jhh].planjson === ciudadARGP.ciudadjson) {
                    bot.telegram.sendPhoto(
                        resultsUsers[jhh].telegramid,
                        informacion3.propiedadesfijas.imagen
                        ,
                        {
                            caption: "🆕🆕🆕 " + informacion3.propiedadesfijas.tipo + " 🆕🆕🆕\n" +
                                informacion3.propiedadesfijas.titulo + "\n" +
                                "$" + informacion3.propiedadesfijas.precio + "\n" + mensaje
                            ,
                            reply_markup: {
                                inline_keyboard: [
                                    [
                                        { text: 'Ver más', url: page2.url() }
                                    ]
                                ]
                            }
                        }
                    );
                }
            }
            if (cartasFiltradasreverse[yu]) {
                await agregarUrlAP(cartasFiltradasreverse[yu], ciudadARGP.ciudadjson.replace(/[.,\s]+/g, ''))
            }
            await page2.close()
        }
        // console.log(cartasFiltradas)
        // await new Promise(r => setTimeout(r, 2000))
        await page.close()
        await navegadorEnIncognito.close();
        await navegador.close()
    }
    catch (error) {
        console.log("er", error)
        await page.close()
        await navegadorEnIncognito.close();
        await navegador.close()
    }
}
// ejecutarArgenProp()
// Simulación de funciones asíncronas con tiempos diferentes


// Ejecutar todas las funciones y esperar a que terminen
let contador = 0
async function executeAllFunctions() {
    while (contador < 5) { // Bucle infinito, repite siempre
        console.log("Iniciando ejecución de funciones...");

        // Esperar a que todas las funciones terminen
        // await Promise.all([
        //     ejecutarML2(),
        //     ejecutarZonaProp(),
        //     ejecutarArgenProp()
        // ]);
        const resultados = await Promise.all([
            ejecutarML2(),
            ejecutarZonaProp(),
            ejecutarArgenProp()
        ]);

        // Accediendo a los resultados individuales
        const resultadoML2 = resultados[0];
        const resultadoZonaProp = resultados[1];
        const resultadoArgenProp = resultados[2];
        contador = contador + 1
        console.log("Estas son las horas:")
        console.log("ARGP")
        console.log("resultados",resultados)
        console.log("inicio:", resultadoArgenProp?.HorainicioARGP)
        console.log("final:", resultadoArgenProp?.HorafinalARGP)
        console.log("ARGP")
        console.log("ZP")
        console.log("inicio:", resultadoZonaProp?.HorainicioZP)
        console.log("final:", resultadoZonaProp?.HorafinalZP)
        console.log("ZP")
        console.log("ML")
        console.log("inicio:", resultadoML2?.HorainicioML)
        console.log("final:", resultadoML2?.HorafinalML)
        console.log("ML")
        console.log("Todas las funciones completadas. Reiniciando... vuelta:" + contador);
        // Aquí puedes agregar una pausa si es necesario
    }
}

executeAllFunctions();

async function crearZonas() {
    const ejemplo = urlsML.map(obj => ({
        ...obj, ciudadjson: obj.ciudadjson.replace(/[.,\s]+/g, '')
    }))
    // console.log(ejemplo)
    const resultado = await zonaModel.insertMany(ejemplo);
    console.log('Zonas creadas exitosamente:', resultado);
}
// crearZonas()