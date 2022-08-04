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
        name: 'ass',
        description: 'random ass image'
    });client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'hentai',
        description: 'random hentai image'
    });client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'cum',
        description: 'random cum image'
    });client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'feet',
        description: 'random feet image'
    });client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'gifs',
        description: 'random gifs'
    });client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'masturbation',
        description: 'random masturbation image'
    });client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'panties',
        description: 'random panties image'
    });client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'pussy',
        description: 'random pussy image'
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
});
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "ass") {
        const url = await akaneko.nsfw.ass();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "cum") {
        const url = await akaneko.nsfw.cum();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "feet") {
        const url = await akaneko.nsfw.feet();
        interaction.reply(url);
    }
})client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "gifs") {
        const url = await akaneko.nsfw.gifs();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "masturbation") {
        const url = await akaneko.nsfw.masturbation();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "panties") {
        const url = await akaneko.nsfw.panties();
        interaction.reply(url);
    }
})client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "pussy") {
        const url = await akaneko.nsfw.pussy();
        interaction.reply(url);
    }
})




client.login(process.env.TOKEN);
