// ========================================================== //

const { Client, Collection, Intents } = require('discord.js');
//let cpuStat = require("cpu-stat"); apenas se quiser utilizar em um comando como botinfo. porem não será necessario;
const mongoose = require("mongoose");
const config = require('./src/config/config.json')

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

const Discord = require('discord.js');


module.exports = client;

client.discord = Discord;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require('./src/config/config.json')

require("./src/handler")(client);

client.login(config.token);

