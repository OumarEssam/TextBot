const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// listen from
const allowedChannelId = "1473082358478405846";

// send to
const targetChannelId = "1473082358478405846";

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
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

if (!process.env.TOKEN) {
  console.error("❌ TOKEN is missing. Add TOKEN in Railway Variables.");
  process.exit(1);
}

client.login(process.env.TOKEN);
