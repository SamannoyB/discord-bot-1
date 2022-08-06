const Discord =require('discord.js');
const { Client, Intents, MessageEmbed, MessageActionRow, MessageReaction, CommandInteractionOptionResolver, GuildMember, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],restRequestTimeout: 60000 });
const fs = require('fs');
require('dotenv').config();
const fetch = require('node-fetch');
const { SlashCommandBuilder } = require('@discordjs/builders');
const akaneko = require('akaneko');
const { EventEmitter } = require('stream');
require('events').EventEmitter.defaultMaxListeners = 30;
const API = require('anime-images-api')
const images_api = new API() 

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
    });client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'catgirl',
        description: 'random catgirl image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'foxgirl',
        description: 'random foxgirl image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'blowjob',
        description: 'random blowjob image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'femdom',
        description: 'random femdom image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'glasses',
        description: 'random glasses image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'maid',
        description: 'random maid image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'orgy',
        description: 'random orgy image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'school',
        description: 'random school image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'succubus',
        description: 'random succubus image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'tentacles',
        description: 'random tentacles image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'thighs',
        description: 'random thighs image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'uniform',
        description: 'random uniform image'
    });
    client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'yuri',
        description: 'random yuri image'
    });
     client.guilds.cache.get("1001692509296144445").commands.create({
        name: 'boobsgif',
        description: 'random boobs gif'
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
})
client.on('interactionCreate', async interaction => {
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
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "pussy") {
        const url = await akaneko.nsfw.pussy();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "catgirl") {
        const url = await akaneko.neko();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "foxgirl") {
        const url = await akaneko.foxgirl();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "blowjob") {
        const url = await akaneko.nsfw.blowjob();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "thighs") {
        const url = await akaneko.nsfw.thighs();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "femdom") {
        const url = await akaneko.nsfw.femdom();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "glasses") {
        const url = await akaneko.nsfw.glasses();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "maid") {
        const url = await akaneko.nsfw.maid();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "orgy") {
        const url = await akaneko.nsfw.orgy();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "school") {
        const url = await akaneko.nsfw.school();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "succubus") {
        const url = await akaneko.nsfw.succubus();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "tentacles") {
        const url = await akaneko.nsfw.tentacles();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "uglyBastard") {
        const url = await akaneko.nsfw.uglyBastard();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "uniform") {
        const url = await akaneko.nsfw.uniform();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "yuri") {
        const url = await akaneko.nsfw.yuri();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "zettaiRyouiki") {
        const url = await akaneko.nsfw.zettaiRyouiki();
        interaction.reply(url);
    }
})
client.on('interactionCreate', async interaction => {
    if (interaction.commandName === "boobsgif") {
       images_api.sfw.hug().then(response => {
            interaction.reply(response.image)
        }) 
    }
})



client.login(process.env.TOKEN);
