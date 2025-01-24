const { EmbedBuilder } = require('discord.js');

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.author;

    // Get a larger avatar URL
    const avatarURL = member.displayAvatarURL({ format: 'png', size: 2048 });

    // Create the embed
    const embed = new EmbedBuilder()
    .setAuthor({
        name: member.displayName,
        iconURL: client.user.displayAvatarURL({ dynamic: true })
    })
        .setDescription('### <:update:1279187661692862572> **[\`Download\`](https://discord.gg/hunainstore)**')
        .setImage(avatarURL) 
        .setFooter({
            text: `Requested By ${message.author.displayName}`,
            iconURL: message.author.displayAvatarURL({ format: 'png', size: 2048 })
        });

    message.channel.send({ embeds: [embed] });
}

exports.conf = {
    aliases: ["av", "pfp"]
};

exports.help = {
    name: "avatar"
};
