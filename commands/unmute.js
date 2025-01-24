const { EmbedBuilder, PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
    const logChannelId = '1279370847647170654'; // Replace with your channel ID
    const member = message.mentions.members.first();

    if (!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130> **aww. You're not Management. hehe.**")
            ]
        });
    }

    if (!message.guild.members.me.permissions.has(PermissionsBitField.Flags.ModerateMembers)) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130> **I don't have permission to remove timeouts.**")
            ]
        });
    }

    if (!member) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FFFF00")
                    .setDescription("> <:tutuAlert:1267939776728924233> **Please mention a user to remove timeout.**")
            ]
        });
    }

    try {
        await member.timeout(null);

        const unmuteEmbed = new EmbedBuilder()
            .setColor("#00FF00")
            .setDescription(`<a:Check:1267939435790598267> **${member.user.tag} has been unmuted.**`)
            .setTimestamp();

        message.reply({ embeds: [unmuteEmbed] });

        const logEmbed = new EmbedBuilder()
            .setColor("#007FFF")
            .setDescription(`
                <:tutuMod:1267939618322518059> **Member unmuted**
                > <:dot:1279124693412216853> **User Unmuted : ${member.user.tag} (${member.id})**
                > <:dot:1279124693412216853> **Moderator : ${message.author.tag} (${message.author.id})**
            `)
            .setTimestamp()
            .setFooter({
                text: `ID: ${member.id}`,
                iconURL: member.user.displayAvatarURL({ dynamic: true })
            });

        const logChannel = await client.channels.fetch(logChannelId);
        if (logChannel) {
            logChannel.send({ embeds: [logEmbed] });
        }
    } catch (error) {
        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("<a:Cross:1267939449820549130> An error occurred while trying to unmute the user.")
            ]
        });
        console.error(error);
    }
};

exports.conf = {
    aliases: ["untimeout", "release"]
};

exports.help = {
    name: "unmute"
};
