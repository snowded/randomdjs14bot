const { EmbedBuilder } = require("discord.js");
var config = require("../config.js");
const client = require("..");
const prefix = config.prefix;

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  if (message.content.trim() === "<@1210446391118397491>") {
    const embed = new EmbedBuilder()
      .setDescription(`> <:tutuWarn:1267939299983364227> **Prefix For Commands :** \`-\``);

    return message.channel.send({ embeds: [embed] });
  } else

  if (message.content.trim() === "<@1210446391118397491>") {
    return message.react('<:tutuMod:1267939618322518059>');
  }

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.toLocaleLowerCase().split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
});
