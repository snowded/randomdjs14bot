const { EmbedBuilder } = require('discord.js');

exports.run = async (client, message, args) => {
    const embed = new EmbedBuilder()
    .setDescription("> <:tutuTicket:1267939279607435377> **to buy anything go [here](https://discord.com/channels/1178390363027816619/1220848831789273269) __or__ <#1220848831789273269>**");

    message.channel.send({ embeds: [embed] });
}

exports.conf = {
    aliases: []
};

exports.help = {
    name: "ticket"
};
