const
  bright = "\x1b[1m",
  blink = "\x1b[5m",
  preto = "\x1b[30m",
  vermelho = "\x1b[31m",
  verde = "\x1b[32m",
  amarelo = "\x1b[33m",
  azul = "\x1b[34m",
  roxo = "\x1b[35m",
  ciano = "\x1b[36m",
  branco = "\x1b[37m",

  colorful = (color, string, reset = '\x1b[0m') => color + string + reset;
const client = require("../../index");

const c = require("colors");

client.once("ready", () => {
  client.user.setActivity(`🔔 Utilize /help`, {
  });
  console.log(colorful(roxo, `━━━━━━━━━━━━━ Informações ━━━━━━━━━━━┓`))

  console.log(colorful(ciano, `</dev>: \x1b[0;37mMiller\n\x1b[36mProjeto: \x1b[0;37m${client.user.tag}\n\x1b[36mID: \x1b[0;37m${client.user.id}\n\x1b[36mStatus: \x1b[32m${client.user.presence.status}`))
  console.log(colorful(ciano, `Servidores: \x1b[37m${client.guilds.cache.size}`))
  console.log(colorful(ciano, `Membros \x1b[37m${client.users.cache.size}`))


  console.log(colorful(roxo, `┗━━━━━━━━━━━━━ SkyProject ━━━━━━━━━━┛`))


  

  

});

const { config } = require('../../index');
