import Telegraf from 'telegraf';
import express from "express"
import morgan from "morgan"
import cors from "cors"
import fs from "fs"
import dotenv from 'dotenv';
dotenv.config();
// const lugares = await import("./lugares.json", { assert: { type: "json" } })
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

import { connectDB } from "../basededatos/mongodb.js";
import userModel from '../modelos/user.model.js';
import pagosModel from '../modelos/pagos.model.js';
connectDB();
const filePath = './data/userT.json';
bot.start(async (ctx) => {

  // console.log(ctx.updateSubTypes[0])
  // console.log("ctx.chat", ctx.chat)
  ctx.reply(`Hola ! ${ctx.chat.id}`)
  // console.log("ctx.chat", ctx.chat)
})









bot.on('message', async (ctx) => {
  if (ctx.update.message.text.includes("@")) {
    if (ctx.session.registro) {
      const usuario = await userModel.findOne({ email: ctx.session.email })
      if (usuario) {
        ctx.session.email = ""
        ctx.session.registro = false
        return await ctx.reply("Ese correo ya esta registrado", {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Ver inmueble", callback_data: "inmueble" }],
              [{ text: "Ver cuenta", callback_data: "cuenta" }]
            ]
          }
        })
      } else {

        const usuarioregistro = await userModel.create({
          telegramid: ctx.update.message.from.id,
          whatsappid: "",
          email: ctx.update.message.text,
          nick: "",
          filtros: { ambientes: "", inmueble: "", tipo: "alquiler temporal" },
          plan: "",
          pagos: [],
          provincia: "",
          ciudad: "",
          otp: ""
        })
        ctx.session.email = ""
        ctx.session.registro = false
        return ctx.reply("creado con exito")
      }
    }
    if (ctx.session.iniciosession) {
      if (!ctx.session.email) {
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

    }
  }
  else if (ctx.session.email) {
    const usuario = await userModel.findOne({ email: ctx.session.email })
    if (usuario.otp.toLocaleUpperCase() === ctx.update.message.text.toLocaleUpperCase()) {
      await userModel.findOneAndUpdate({ email: ctx.session.email }, { $set: { telegramid: ctx.update.message.from.id } })
      return await ctx.reply("Inicio con exito", {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Ver inmueble", callback_data: "inmueble" }],
            [{ text: "Ver cuenta", callback_data: "cuenta" }]
          ]
        }
      })
    }
    return await ctx.reply("Te equivocaste, intenta de nuevo o puedes cancelar", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Ver inmueble", callback_data: "inmueble" }],
          // [{ text: "Ver automotor", callback_data: "automotor" }],
          [{ text: "Ver cuenta", callback_data: "cuenta" }]
        ]
      }
    })
  }
  else {

    await ctx.reply("¡Hola! aqui tienes los botones para navegar:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Ver inmueble", callback_data: "inmueble" }],
          // [{ text: "Ver automotor", callback_data: "automotor" }],
          [{ text: "Ver cuenta", callback_data: "cuenta" }]
        ]
      }
    })
  };

}
);

bot.on("callback_query", async (event) => {
  const usuario = await userModel.findOne({ telegramid: event.update.callback_query.from.id }).populate("pagos")
  if (event.update.callback_query.data === "inmueble") {
    const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized")
    if (pagosAuth.length < 1) {
      await event.reply(`No tienes ningun plan activado`, {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Ver alcance de los Planes", callback_data: "alcancedelosplanesPremium" }]
          ]
        }
      })
    } else {

    }
  }
  if (event.update.callback_query.data === "cuenta") {
    if (!usuario) {
      await event.reply("¡Hola! no tienes una cuenta", {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Registrate", callback_data: "registrate" }],
            [{ text: "Iniciar session", callback_data: "iniciarsession" }]
          ]
        }
      });
    }
    else {
      const pagosAuth = usuario.pagos.filter(pago => pago.status === "authorized")
      if (pagosAuth.length > 0) {
        console.log("pagosAuth", pagosAuth)
        console.log("pagosAuth", 'sdfsd')
        await event.reply(`¡Hola! tu email es: ${usuario.email}.`)
        await event.reply(`Tu plan es: ${pagosAuth[0].planName}.`)
        await event.reply(`Por un valor de: $${pagosAuth[0].planPrice}.`, {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Ver inmuebles", callback_data: "inmueble" }],
              [{ text: "Ver alcance de los Planes", callback_data: "alcancedelosplanesPremium" }]
            ]
          }
        })
      }
      else {
        await event.reply(`¡Hola! tu email es: ${usuario.email}`)
        await event.reply(`No tienes ningun plan activado`, {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Ver alcance de los Planes", callback_data: "alcancedelosplanesPremium" }]
            ]
          }
        })
      }
    }
  }
  if (event.update.callback_query.data === "registrate") {
    event.session.registro = true
    return event.reply("Ingresa tu correo")

  }
  if (event.update.callback_query.data === "iniciarsession") {
    event.session.iniciosession = true
    event.session.email = ""
    return event.reply("Ingresa tu correo")
  }
  if (event.update.callback_query.data === "alcancedelosplanesPremium") {
    event.session.planrequerido = "premium"
    const reul = urlsML.filter((valor, indice, self) =>
      indice === self.findIndex((obj) => obj.provincia === valor.provincia)
  ).map((obj) => ([{
    text: obj.provincia,
    callback_data: `alcancedelPlanRegional#$#${obj.provincia}`
  }]))
  console.log("reul", reul)
  return await event.reply(`El plan premium tiene el valor de $6200 ARS y alcanza a todo el pais, abajo veras zonas alcanzadas, si quieres ver el alcance del plan Regional, solamente aprieta el boton donde tenga la zona de tu interes`, {
    reply_markup: {
      inline_keyboard: [[{ text: "Contratar plan Premium", callback_data: "contratarplanPremium" }, { text: "Cuenta", callback_data: "cuenta" }], ...reul, [{ text: "Contratar plan Premium", callback_data: "contratarplanPremium" }, { text: "Cuenta", callback_data: "cuenta" }]]
    }
  })
}
if (event.update.callback_query.data === "contratarplanPremium") {
  console.log("event.update.callback_query.data", event.update.callback_query.data)
  return await event.reply(`¿Estas seguro de contratar el plan Premium por ($6200 ARS) para todo el pais?`, {
    reply_markup: {
      inline_keyboard: [[{ text: "Si", callback_data: `sicontratarPlanPremium` }, { text: "No", callback_data: "cuenta" }]]
    }
  })
}
if (event.update.callback_query.data === "sicontratarPlanPremium") {
  await event.reply(`Por favor, espera`)
  const peticion = await fetch("https://bottestnexts.onrender.com/api/mercadopago/suscription", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify({
      "email": "test_user_328648892@testuser.com",
      "planName": "Premium",
      "planPrice": 6200
    }), // Convertimos los datos a JSON
  }).then(e => e.json()).then(t => { return t })

  console.log("peticion", peticion)
  usuario.plan = "Premium"
  usuario.planjson = "Pais"
  usuario.save()
  await event.reply(`Gracias por contratar el plan Premium por ($6200 ARS) para todo el pais`, {
    reply_markup: {
      inline_keyboard: [[{ text: "Pagar desde Mercado Pago", url: peticion }]]
    }
  })
  return await event.reply(`Despues de pagar, ve a tu cuenta`, {
    reply_markup: {
      inline_keyboard: [[{ text: "Ir a mi cuenta", callback_data: "cuenta" }]]
    }
  })
  //volver aquiiiiiiiiiiiiiii
}
  if (event.update.callback_query.data.split("#$#")[0] === "alcancedelPlanRegional") {

    console.log("event.update.callback_query.data Regional", event.update.callback_query.data.split("#$#")[1])

    const resultadoregional = urlsML.filter(provincia => provincia.provincia === event.update.callback_query.data.split("#$#")[1]).map((obj) => ([{
      text: obj.ciudad,
      callback_data: `contratarPlanLocal#$#${obj.ciudadjson}`
    }]))
    return await event.reply(`El plan Regional tiene el valor de $3600 ARS y alcanza a toda la region previamente marcada, abajo veras zonas alcanzadas, el alcance del plan local solo sera la zona marcada a continuacion, no se podra cambiar, elige bien`, {
      reply_markup: {
        inline_keyboard: [[{ text: "Contratar plan Regional", callback_data: `contratarplanRegional#$#${event.update.callback_query.data.split("#$#")[1]}` }, { text: "Cuenta", callback_data: "cuenta" }], ...resultadoregional, [{ text: "Contratar plan Regional", callback_data: `contratarplanRegional#$#${event.update.callback_query.data.split("#$#")[1]}` }, { text: "Cuenta", callback_data: "cuenta" }]]
      }
    })
    //volver aquiiiiiiiiiiiiiii
  }
  if (event.update.callback_query.data.split("#$#")[0] === "contratarplanRegional") {
    console.log("event.update.callback_query.data", event.update.callback_query.data.split("#$#")[1])
    return await event.reply(`¿Estas seguro de contratar el plan Regional por ($3600 ARS) para la zona de ${event.update.callback_query.data.split("#$#")[1]}?`, {
      reply_markup: {
        inline_keyboard: [[{ text: "Si", callback_data: `sicontratarPlanRegional#$#${event.update.callback_query.data.split("#$#")[1]}` }, { text: "No", callback_data: "cuenta" }]]
      }
    })
  }
  if (event.update.callback_query.data.split("#$#")[0] === "sicontratarPlanRegional") {

    await event.reply(`Por favor, espera`)
    const peticion = await fetch("https://bottestnexts.onrender.com/api/mercadopago/suscription", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        "email": "test_user_328648892@testuser.com",
        "planName": "Regional",
        "planPrice": 3600
      }), 
    }).then(e => e.json()).then(t => { return t })
    console.log("peticion", peticion)
    usuario.plan = "Regional"
    usuario.planjson = event.update.callback_query.data.split("#$#")[1]
    usuario.save()
    await event.reply(`Gracias por contratar el plan Regional por ($3600 ARS) para la zona de ${event.update.callback_query.data.split("#$#")[1]}`, {
      reply_markup: {
        inline_keyboard: [[{ text: "Pagar desde Mercado Pago", url: peticion }]]
      }
    })
    return await event.reply(`Despues de pagar, ve a tu cuenta`, {
      reply_markup: {
        inline_keyboard: [[{ text: "Ir a mi cuenta", callback_data: "cuenta" }]]
      }
    })
  }
  if (event.update.callback_query.data.split("#$#")[0] === "contratarPlanLocal") {
    console.log("event.update.callback_query.data", event.update.callback_query.data.split("#$#")[1])
    const informacion = await urlsML.filter(e=>e.ciudadjson === event.update.callback_query.data.split("#$#")[1])
    return await event.reply(`¿Estas seguro de contratar el plan Local por ($1200 ARS) para la zona de ${informacion[0].provincia} - ${informacion[0].ciudad}?`, {
      reply_markup: {
        inline_keyboard: [[{ text: "Si", callback_data: `sicontratarPlanLocal#$#${event.update.callback_query.data.split("#$#")[1]}` }, { text: "No", callback_data: "cuenta" }]]
      }
    })
  }
  if (event.update.callback_query.data.split("#$#")[0] === "sicontratarPlanLocal") {
    await event.reply(`Por favor, espera`)
    const peticion = await fetch("https://bottestnexts.onrender.com/api/mercadopago/suscription", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify({
        "email": "test_user_328648892@testuser.com",
        "planName": "Local",
        "planPrice": 1200
      }), 
    }).then(e => e.json()).then(t => { return t })
    console.log("peticion", peticion)
    usuario.plan = "Local"
    usuario.planjson = event.update.callback_query.data.split("#$#")[1]
    usuario.save()
    const informacion = await urlsML.filter(e=>e.ciudadjson === event.update.callback_query.data.split("#$#")[1])
    console.log("informacion",informacion)
    console.log("event.update.callback_query.data.split",event.update.callback_query.data.split("#$#")[1])
    await event.reply(`Gracias por contratar el plan Local por ($1200 ARS) para la zona de ${informacion[0].provincia} - ${informacion[0].ciudad}`, {
      reply_markup: {
        inline_keyboard: [[{ text: "Pagar desde Mercado Pago", url: peticion }]]
      }
    })
    return await event.reply(`Despues de pagar, ve a tu cuenta`, {
      reply_markup: {
        inline_keyboard: [[{ text: "Ir a mi cuenta", callback_data: "cuenta" }]]
      }
    })
    //volver aquiiiiiiiiiiiiiii
  }
  if (event.update.callback_query.data === "inmueble") {

    // console.log("usuarioinmueble",usuario) 
  }
})
bot.launch()

// Local: te da acceso a todos los alquileres de la localidad seleccionada, y tiene un costo de 1 dollar ($1200 ARS)
// Regional: te da acceso a todos los alquileres de la provincia seleccionada, y tiene un costo de 3 dolares ($3600 ARS)
// Premium: te da acceso a todos los alquileres del pais seleccionado, y tiene un costo de 5 dolares ($6200 ARS)

///hacer
//1-event.update.callback_query.data === "inmueble" que muestre todos para su plan
//3-con cada nuevo alquiler, avisar a cada usuario por el bot
//4-hacer funcionar las demas webs zonaprop y argprop
//5-hacer web
//6- agregar ciudad y provincia para avisar en el mi cuenta