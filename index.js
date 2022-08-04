const Discord =require('discord.js');
const { Client, Intents, MessageEmbed, MessageActionRow, MessageReaction, CommandInteractionOptionResolver, GuildMember, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],restRequestTimeout: 60000 });
const fs = require('fs');
require('dotenv').config();
const fetch = require('node-fetch');
const { SlashCommandBuilder } = require('@discordjs/builders');
const akaneko = require('akaneko');

client.on('ready', () => {
    console.log(`${client.user.tag}`);

    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'ping',
        description: 'check bot latency'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'hentai',
        description: 'random hentai image'
    });
});

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand());

    if (interaction.commandName === "ping") {
        interaction.reply('pong...');
    }
});

client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "hentai") {
        const url = await akaneko.nsfw.hentai();
        interaction.reply(url);
    }
})

client.login(process.env.TOKEN);