const { EmbedBuilder } = require('discord.js');

exports.run = async (client, message, args) => {

    // Create the embed
    const embed = new EmbedBuilder()
   .setDescription(pay);

    message.channel.send({ embeds: [embed] });
}

exports.conf = {
    aliases: []
};

exports.help = {
    name: "pay"
};
