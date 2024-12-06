import Telegraf from 'telegraf';
import express from "express"
import morgan from "morgan"
import cors from "cors"
import fs from "fs"
import dotenv from 'dotenv';
dotenv.config();
const { session } = Telegraf;
const bot = new Telegraf('6519385897:AAHrxd20APsuE2hlJ1jo5cu0O0qnNIVAmBk')
bot.use(session());
import urlsML from '../urls/mercadolibre.js';
const app = express();
app.use(cors());
app.options("*", cors());
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("tiny"));
app.listen(3000, () => {
    console.log('Servidor funcionando en Vercel');
  });
  
import { connectDB } from "../basededatos/mongodb.js";
import userModel from '../modelos/user.model.js';
import pagosModel from '../modelos/pagos.model.js';
import publicationModel from '../modelos/publication.model.js';
connectDB();
const filePath = './data/userT.json';

bot.start(async (ctx) => {
    // console.log("asdasdasd")
    // ctx.session.email="test_user_328648892@testuser.com"
    // console.log("asdasdasd",ctx.session.email)
    ctx.reply(`¡ Hola ! bienvenido a XXXXXXXXX Yo sere el bot que te facilitara tu vida, puedes registrarte o iniciar session:`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Registrarme", callback_data: "registrarme" }],
                [{ text: "Iniciar session", callback_data: "iniciarsession" }]
            ]
        }
    })
})

bot.on('message', async (ctx) => {
    // ctx.session.email = "test_user_328648892@testuser.com"
    // console.log(ctx.session.email)
    if (ctx.session.email && !ctx.session.iniciosession && !ctx.session.iniciosession) {
        const usuario = await userModel.findOne({ email: ctx.session.email }).populate("pagos")
        const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized")
        if (pagosAuth.length < 1) {
            await ctx.reply("¡Hola! No se encontro ninguna suscripcion en tu cuenta,en el siguiente boton puedes ir a tu cuenta, configurarla y suscribirte a un plan.", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Mi cuenta", callback_data: "cuenta" }]
                    ]
                }
            });
        }
        else {
            await ctx.reply(`¡Hola! ${pagosAuth.length == 1 ? `Se encontro 1 suscripcion en tu cuenta. Para obtener más detalles, puedes ir a tu cuenta en "Mi cuenta" o ver las publicaciones activas en "Ver inmuebles"` : `Se encontraron ${pagosAuth.length} suscripciones en tu cuenta. Para obtener más detalles, puedes ir a tu cuenta en "Mi cuenta" o ver las publicaciones activas en "Ver inmuebles"`}`, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Ver inmuebles", callback_data: "inmueble" }],
                        [{ text: "Mi cuenta", callback_data: "cuenta" }]
                    ]
                }
            });
        }
    }
    if (!ctx.session.email && !ctx.session.registro && !ctx.session.iniciosession) {
        await ctx.reply("¡Hola! No se encontró ninguna cuenta.", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Registrarme", callback_data: "registrarme" }],
                    [{ text: "Iniciar session", callback_data: "iniciarsession" }]
                ]
            }
        });
    }
    if (ctx.session.registro) {
        if (ctx.update.message.text.includes("@")) {
            const usuario = await userModel.findOne({ email: ctx.update.message.text.includes("@") })
            if (usuario) {
                ctx.session.registro = false
                return await ctx.reply("Ese correo ya esta registrado", {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "Registrarme", callback_data: "registrarme" }],
                            [{ text: "Iniciar session", callback_data: "iniciarsession" }]
                        ]
                    }
                })
            } else {

                const usuarioregistro = await userModel.create({
                    telegramid: ctx.update.message.from.id,
                    whatsappid: "",
                    email: ctx.update.message.text,
                    nick: "",
                    // filtros: { ambientes: "", inmueble: "", tipo: "" },
                    plan: "",
                    pagos: [],
                    provincia: "",
                    ciudad: "",
                    otp: ""
                })
                ctx.session.registro = false
                return ctx.reply("creado con exito", {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "Registrarme", callback_data: "registrarme" }],
                            [{ text: "Iniciar session", callback_data: "iniciarsession" }]
                        ]
                    }
                })
            }
        }
        else {
            await ctx.reply("El correo no es valido, vuelve a inviarlo o elije alguna opcion:", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Registrarme", callback_data: "registrarme" }],
                        [{ text: "Iniciar session", callback_data: "iniciarsession" }]
                    ]
                }
            });
        }
    }
    if (ctx.session.iniciosession && !ctx.session.email) {
        if (ctx.update.message.text.includes("@")) {
            ctx.session.email = ctx.update.message.text
            function generarStringAleatorio() {
                const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let resultado = '';
                for (let i = 0; i < 6; i++) {
                    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
                    resultado += caracteres.charAt(indiceAleatorio);
                }
                return resultado;
            }
            const otp = await generarStringAleatorio()
            const usuario = await userModel.findOneAndUpdate({ email: ctx.session.email }, { $set: { otp: otp } })
            return ctx.reply("Revisa tu correo y escribe el codigo", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Me Equivoque", callback_data: "iniciarsession" }]
                    ]
                }
            })
        }
        else {
            await ctx.reply("El correo no es valido, vuelve a inviarlo o elije alguna opcion:", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Registrarme", callback_data: "registrarme" }],
                        [{ text: "Iniciar session", callback_data: "iniciarsession" }]
                    ]
                }
            });
        }
    }
    if (ctx.session.iniciosession && ctx.session.email) {
        const usuario = await userModel.findOne({ email: ctx.session.email }).populate("pagos")
        if (usuario.otp.toLocaleUpperCase() === ctx.update.message.text.toLocaleUpperCase()) {
            await userModel.findOneAndUpdate({ email: ctx.session.email }, { $set: { telegramid: ctx.update.message.from.id } })
            ctx.session.iniciosession = false
            const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized")
            if (pagosAuth.length < 1) {
                return await ctx.reply("¡ Inicio con exito ! No se encontro ninguna suscripcion en tu cuenta,en el siguiente boton puedes ir a tu cuenta, configurarla y suscribirte a un plan.", {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "Mi cuenta", callback_data: "cuenta" }]
                        ]
                    }
                });
            }
            else {
                return await ctx.reply(`¡ Inicio con exito ! ${pagosAuth.length == 1 ? `Se encontro 1 suscripcion en tu cuenta. Para obtener más detalles, puedes ir a tu cuenta en "Mi cuenta" o ver las publicaciones activas en "Ver inmuebles"` : `Se encontraron ${pagosAuth.length} suscripciones en tu cuenta. Para obtener más detalles, puedes ir a tu cuenta en "Mi cuenta" o ver las publicaciones activas en "Ver inmuebles"`}`, {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: "Ver inmuebles", callback_data: "inmueble" }],
                            [{ text: "Mi cuenta", callback_data: "cuenta" }]
                        ]
                    }
                });
            }
        }
        else {
            return await ctx.reply("Te equivocaste, intenta de nuevo o puedes elegir otra opcion.", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Registrarme", callback_data: "registrarme" }],
                        [{ text: "Iniciar session", callback_data: "iniciarsession" }]
                    ]
                }
            });
        }
    }
})
bot.on("callback_query", async (ctx) => {
    const usuario = ctx.session.email ? await userModel.findOne({ email: ctx.session.email }).populate("pagos") : null
    if (ctx.update.callback_query.data === "inmueble" && usuario) {
        const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized")
        console.log(pagosAuth)
        if (pagosAuth.length < 1) {
            await ctx.reply(`No tienes ninguna suscripcion, puedes ir a tu cuenta. Configurarla y suscribirte`, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Mi cuenta", callback_data: "cuenta" }]
                    ]
                }
            })
            return
        } else {
            const getPaginatedPublications = async (provincia, page = 1, pageSize = 10) => {
                try {
                    // Calcular cuántos documentos omitir según la página actual
                    const skip = (page - 1) * pageSize;

                    // Obtener las publicaciones para la página actual
                    const publications = await publicationModel
                        .find({ $or: provincia.map(prov => ({ provincia: prov })) })
                        .skip(skip)
                        .limit(pageSize)
                        .exec();

                    // Contar el total de documentos que coinciden con la query
                    const totalPublications = await publicationModel.countDocuments({ provincia });

                    // Determinar si hay una página siguiente
                    const hasNextPage = skip + pageSize < totalPublications;

                    return {
                        publications,
                        currentPage: page,
                        totalPages: Math.ceil(totalPublications / pageSize),
                        hasNextPage,
                    };
                } catch (error) {
                    console.error("Error fetching paginated publications:", error);
                    throw error;
                }
            };

            // Ejemplo de uso
            getPaginatedPublications(pagosAuth.map(e => e.planName), 1, 10).then(async (result) => {
                console.log(result);
                for (let publicacionNumero = 0; publicacionNumero < result.publications.length; publicacionNumero++) {
                    try {
                        await ctx.telegram.sendPhoto(
                            ctx.callbackQuery.from.id,
                            result.publications[publicacionNumero].imagen
                            ,
                            {
                                caption: result.publications[publicacionNumero].tipo + "\n" +
                                    result.publications[publicacionNumero].titulo + "\n" + result.publications[publicacionNumero].precio + "\n" + result.publications[publicacionNumero].provincia + "\n" + result.publications[publicacionNumero].ciudad
                                ,
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            { text: 'Ver más', url: result.publications[publicacionNumero].url }
                                        ]
                                    ]
                                }
                            }
                        )
                    }
                    catch (errorpublication) {
                        await ctx.reply("Ocurrio un error al enviar esta publicacion")
                    }
                }
                await ctx.reply(`Hay un total de ${result.totalPages} paginas`, {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: `Ver pagina 2`, callback_data: "inmueble&2" }], [{ text: "Volver a Mi cuenta", callback_data: "cuenta" }]
                        ]
                    }
                })
                return
            }).catch(async (error) => {
                console.error("Error:", error);
                await ctx.reply(`Ocurrio un error`)
            }
            );
            return
        }
    }
    if (ctx.update.callback_query.data.split('&')[0] === "inmueble" && usuario && ctx.update.callback_query.data.split('&')[1]) {
        const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized")
        if (pagosAuth.length < 1) {
            await ctx.reply(`No tienes ninguna suscripcion, puedes ir a tu cuenta. Configurarla y suscribirte`, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Mi cuenta", callback_data: "cuenta" }]
                    ]
                }
            })
            return
        } else {
            const getPaginatedPublications = async (provincia, page = 1, pageSize = 10) => {
                try {
                    // Calcular cuántos documentos omitir según la página actual
                    const skip = (page - 1) * pageSize;

                    // Obtener las publicaciones para la página actual
                    const publications = await publicationModel
                        .find({ $or: provincia.map(prov => ({ provincia: prov })) })
                        .skip(skip)
                        .limit(pageSize)
                        .exec();

                    // Contar el total de documentos que coinciden con la query
                    const totalPublications = await publicationModel.countDocuments({ provincia });

                    // Determinar si hay una página siguiente
                    const hasNextPage = skip + pageSize < totalPublications;

                    return {
                        publications,
                        currentPage: page,
                        totalPages: Math.ceil(totalPublications / pageSize),
                        hasNextPage,
                    };
                } catch (error) {
                    console.error("Error fetching paginated publications:", error);
                    throw error;
                }
            };

            // Ejemplo de uso
            getPaginatedPublications(pagosAuth.map(e => e.planName), ctx.update.callback_query.data.split('&')[1], 10).then(async (result) => {
                console.log(result);
                for (let publicacionNumero = 0; publicacionNumero < result.publications.length; publicacionNumero++) {
                    try {
                        await ctx.telegram.sendPhoto(
                            ctx.callbackQuery.from.id,
                            result.publications[publicacionNumero].imagen
                            ,
                            {
                                caption: result.publications[publicacionNumero].tipo + "\n" +
                                    result.publications[publicacionNumero].titulo + "\n" + result.publications[publicacionNumero].precio + "\n" + result.publications[publicacionNumero].provincia + "\n" + result.publications[publicacionNumero].ciudad
                                ,
                                reply_markup: {
                                    inline_keyboard: [
                                        [
                                            { text: 'Ver más', url: result.publications[publicacionNumero].url }
                                        ]
                                    ]
                                }
                            }
                        )
                    }
                    catch (errorpublication) {
                        await ctx.reply("Ocurrio un error al enviar esta publicacion")
                    }
                }
                if (result.hasNextPage) {
                    if (Number(result.currentPage) > 1) {
                        await ctx.reply(`Hay un total de ${result.totalPages} paginas`, {
                            reply_markup: {
                                inline_keyboard: [
                                    [{ text: `Ver pagina ${Number(result.currentPage) - 1}`, callback_data: `inmueble&${Number(result.currentPage) - 1}` }],
                                    [{ text: `Ver pagina ${Number(result.currentPage) + 1}`, callback_data: `inmueble&${Number(result.currentPage) + 1}` }], [{ text: "Volver a Mi cuenta", callback_data: "cuenta" }]
                                ]
                            }
                        })
                        return
                    } else {
                        await ctx.reply(`Hay un total de ${result.totalPages} paginas`, {
                            reply_markup: {
                                inline_keyboard: [
                                    [{ text: `Ver pagina ${Number(result.currentPage) + 1}`, callback_data: `inmueble&${Number(result.currentPage) + 1}` }], [{ text: "Volver a Mi cuenta", callback_data: "cuenta" }]
                                ]
                            }
                        })
                        return
                    }
                }
                if (!result.hasNextPage) {
                    if (Number(result.currentPage) > 1) {
                        await ctx.reply(`Hay un total de ${result.totalPages} paginas`, {
                            reply_markup: {
                                inline_keyboard: [
                                    [{ text: `Ver pagina ${Number(result.currentPage) - 1}`, callback_data: `inmueble&${Number(result.currentPage) - 1}` }], [{ text: "Volver a Mi cuenta", callback_data: "cuenta" }]
                                ]
                            }
                        })
                        return
                    }
                }
            }).catch(async (error) => {
                console.error("Error:", error);
                await ctx.reply(`Ocurrio un error`)
            }
            );
            return
        }
    }
    if (ctx.update.callback_query.data === "cuenta") {
        if (!usuario) {
            await ctx.reply("No tienes una cuenta", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Registrarme", callback_data: "registrarme" }],
                        [{ text: "Iniciar session", callback_data: "iniciarsession" }]
                    ]
                }
            });
            return
        }
        else {
            const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized")
            await ctx.reply(`¡Hola! tu email es: ${usuario.email}.`)
            if (pagosAuth.length > 0) {
                let pagosAutharray = pagosAuth.map(er => er.planName)
                await ctx.reply(`Estas suscripto a: ${pagosAutharray.toString()}`)
            }
            await ctx.reply("Opciones:", {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "Ver inmuebles", callback_data: "inmueble" }],
                        [{ text: "Ver alcance de mi suscripciones", callback_data: "alcancedemisuscripciones" }],
                        [{ text: "Suscribirme a un nuevo plan", callback_data: "alcancedelosplanes" }],
                        [{ text: "Cerrar session", callback_data: "cerrarsession" }]
                    ]
                }
            })
            return
        }
    }
    if (ctx.update.callback_query.data === "alcancedemisuscripciones") {
        const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized");

        const reul = urlsML.filter((valor, indice, self) => {
            // Verifica si provincia de urlsML no coincide con ningún planName en pagosAuth
            const isProvinciaValid = pagosAuth.some(pago => pago.planName === valor.provincia);

            // Mantén solo las provincias únicas
            return isProvinciaValid && indice === self.findIndex((obj) => obj.provincia === valor.provincia);
        }).map((obj) => ([{
            text: `${obj.provincia} ($ ${obj.provincia === "Capital Federal" ? 20000 :
                obj.provincia === "Bs.As. Costa Atlántica" ? 20000 :
                    obj.provincia === "Córdoba" ? 15000 :
                        10000
                })`,
            callback_data: `alcancedelPlanSuscripto#$#${obj.provincia}`
        }]));
        return await ctx.reply(`Estos son los planes donde estas suscripto, puedes hacer click en el que te interese y ver que zonas cubre.`, {
            reply_markup: {
                inline_keyboard: [[{ text: "Volver a Mi cuenta", callback_data: "cuenta" }], ...reul, [{ text: "Volver a Mi cuenta", callback_data: "cuenta" }]]
            }
        })
    }
    if (ctx.update.callback_query.data.split("#$#")[0] === "alcancedelPlanSuscripto") {
        return await ctx.reply(`El plan de ${ctx.update.callback_query.data.split("#$#")[1]} alcanza a:
            ${urlsML.filter(provincia => provincia.provincia === ctx.update.callback_query.data.split("#$#")[1]).map((obj) => ("\n" + obj.ciudad)).toString()}`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Volver a todos los planes suscripto", callback_data: "alcancedemisuscripciones" }], [{ text: "Volver a Mi cuenta", callback_data: "cuenta" }]]
            }
        })
    }
    if (ctx.update.callback_query.data === "alcancedelosplanes") {

        const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized");

        const reul = urlsML.filter((valor, indice, self) => {
            // Verifica si provincia de urlsML no coincide con ningún planName en pagosAuth
            const isProvinciaValid = !pagosAuth.some(pago => pago.planName === valor.provincia);

            // Mantén solo las provincias únicas
            return isProvinciaValid && indice === self.findIndex((obj) => obj.provincia === valor.provincia);
        }).map((obj) => ([{
            text: `${obj.provincia} ($ ${obj.provincia === "Capital Federal" ? 20000 :
                obj.provincia === "Bs.As. Costa Atlántica" ? 20000 :
                    obj.provincia === "Córdoba" ? 15000 :
                        10000
                })`,
            callback_data: `alcancedelPlan#$#${obj.provincia}`
        }]));
        console.log("reul", reul)
        return await ctx.reply(`Estos son los planes disponibles, puedes hacer click en el que te interese y ver que zonas cubre y decidir si suscribirte o no.`, {
            reply_markup: {
                inline_keyboard: [[{ text: "Volver a Mi cuenta", callback_data: "cuenta" }], ...reul, [{ text: "Volver a Mi cuenta", callback_data: "cuenta" }]]
            }
        })
    }
    if (ctx.update.callback_query.data.split("#$#")[0] === "alcancedelPlan") {
        return await ctx.reply(`El plan de ${ctx.update.callback_query.data.split("#$#")[1]} alcanza a:
            ${urlsML.filter(provincia => provincia.provincia === ctx.update.callback_query.data.split("#$#")[1]).map((obj) => ("\n" + obj.ciudad)).toString()}`, {
            reply_markup: {
                inline_keyboard: [[{
                    text: `Suscribirme a ${ctx.update.callback_query.data.split("#$#")[1]} ($ ${ctx.update.callback_query.data.split("#$#")[1] === "Capital Federal" ? 20000 :
                        ctx.update.callback_query.data.split("#$#")[1] === "Bs.As. Costa Atlántica" ? 20000 :
                            ctx.update.callback_query.data.split("#$#")[1] === "Córdoba" ? 15000 :
                                10000
                        })`, callback_data: `contratarplan#$#${ctx.update.callback_query.data.split("#$#")[1]}`
                }],
                [{ text: "Volver a todos los planes disponibles", callback_data: "alcancedelosplanes" }], [{ text: "Volver a Mi cuenta", callback_data: "cuenta" }]]
            }
        })
    }
    console.log("ctx.update.callback_query.data", ctx.update.callback_query.data)
    if (ctx.update.callback_query.data.split("#$#")[0] === "contratarplan") {
        try {

            await ctx.reply(`Por favor, espera`)
            let precio = ctx.update.callback_query.data.split("#$#")[1] === "Capital Federal" ? 20000 :
                ctx.update.callback_query.data.split("#$#")[1] === "Bs.As. Costa Atlántica" ? 20000 :
                    ctx.update.callback_query.data.split("#$#")[1] === "Córdoba" ? 15000 :
                        10000
            let planName = ctx.update.callback_query.data.split("#$#")[1]
            console.log({ precio })
            console.log({ planName })
            console.log({ "ctx.session.email": ctx.session.email })
            const peticion = await fetch("https://bottestnexts.onrender.com/api/mercadopago/suscription", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": ctx.session.email,
                    "planName": planName,
                    "planPrice": precio
                }),
            }).then(e => e.json()).then(t => { return t })
            console.log("peticion", peticion)
            usuario.plan = ctx.update.callback_query.data.split("#$#")[1]
            usuario.planjson = ctx.update.callback_query.data.split("#$#")[1]
            usuario.save()
            await ctx.reply(`Gracias por suscribirte a ${planName} por ( $ ${precio}  ARS)`, {
                reply_markup: {
                    inline_keyboard: [[{ text: "Pagar desde Mercado Pago", url: peticion }]]
                }
            })
            return await ctx.reply(`Despues de pagar, ve a tu cuenta`, {
                reply_markup: {
                    inline_keyboard: [[{ text: "Ir a mi cuenta", callback_data: "cuenta" }]]
                }
            })
        }
        catch {
            console.log("error")
        }
    }
    if (ctx.update.callback_query.data === "registrarme") {
        ctx.session.registro = true
        ctx.session.iniciosession = false
        return ctx.reply("Ingresa tu correo")

    }
    if (ctx.update.callback_query.data === "iniciarsession") {
        ctx.session.registro = false
        ctx.session.iniciosession = true
        return ctx.reply("Ingresa tu correo")
    }
    if (ctx.update.callback_query.data === "cerrarsession") {
        ctx.session.registro = false
        ctx.session.iniciosession = false
        ctx.session = {}
        return ctx.reply("Session cerrada")
    }
})

bot.launch({
  webhook: {
    domain: "https://nombre-del-proyecto.up.railway.app",
    port: process.env.PORT || 3000,
  }
})
