		const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// الروم اللي البوت يسمع منه
const allowedChannelId = "1473082358478405846";

// الروم اللي الرسالة هتتنقل فيه
const targetChannelId = "1473082358478405846";

client.once("clientReady", () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return; // يمنع رسائل البوتات
    if (message.channel.id !== allowedChannelId) return;
    if (!message.content.trim()) return;

    try {
        await message.delete();

const channel = message.guild.channels.cache.get(targetChannelId);
if (!channel) return;

await channel.send({
    content: `━━━━━━━━━━━━━━━━━━━━━━━━

# **${message.content}**

⚬──────────✧──────────⚬

**By:** <@${message.author.id}> | <@&1445835336931344505> | <@&1474962096432218288>`

});
} catch (err) {
    console.log(err);	
}
});

client.login("MTQ3NDY1MTIzMzk5MzEwMTM3Mw.GSj2fj.gBFVhru3YHZ4YXoX33i7bztZLxCuQz6Mz7yGAc");