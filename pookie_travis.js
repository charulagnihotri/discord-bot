const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = "69!";

bot.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.slice(prefix.length);
  if (command == "hello") {
    message.reply("world fein fein fein 69696966969");
  }
});

bot.login(
  "MTI5NDAwNDgzMDcyMTAxNTg4OQ.GZvkeb.hoopf1CvUn9e9g0XV3vRC5xTV7KobDpXkwb_K0"
);
