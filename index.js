const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "!";

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  switch (command) {
    case "ping":
      const timeTaken = Date.now() - message.createdTimestamp;
      message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
      break;
    case "sum":
      const numArgs = args.map((x) => parseFloat(x));
      const sum = numArgs.reduce((counter, x) => (counter += x));
      message.reply(`The sum of all the arguments you provided is ${sum}!`);
      break;
    default:
      break;
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
