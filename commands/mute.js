const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const ms = require('ms');


exports.run = async (client, message, args) => {
    const logChannelId = '1279370847647170654'; // Replace with your channel ID
    const member = message.mentions.members.first();
    const duration = args[1];
    const reason = args.slice(2).join(' | ') || "idk";

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
                    .setDescription("> <a:Cross:1267939449820549130> **I don't have permission to timeout members.**")
            ]
        });
    }

    if (!member) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FFFF00")
                    .setDescription("> <:tutuAlert:1267939776728924233> **Please mention a user to timeout.**")
            ]
        });
    }

    if (!duration || isNaN(ms(duration))) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FFFF00")
                    .setDescription("> <:tutuAlert:1267939776728924233> **Please provide a valid duration (e.g., `10m`, `1h`).**")
            ]
        });
    }

    try {
        await member.timeout(ms(duration), reason);

        const timeoutEmbed = new EmbedBuilder()
            .setColor("#00FF00")
            .setDescription(`<a:Check:1267939435790598267> **${member.user.tag} has been timed out for ${duration}. | ${reason}**`)
             ;

        message.reply({ embeds: [timeoutEmbed] });

        const logEmbed = new EmbedBuilder()
            .setColor("#007FFF")
            .setDescription(`
                <:tutuMod:1267939618322518059> **Member timed out**
                > <:dot:1279124693412216853> **User Timed Out : ${member.user.tag} (${member.id})**
                > <:dot:1279124693412216853> **Moderator : ${message.author.tag} (${message.author.id})**
                > <:dot:1279124693412216853> **Duration : ${duration}**
                > <:dot:1279124693412216853> **Reason : ${reason}**
            `)
            
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
                    .setDescription("<a:Cross:1267939449820549130> An error occurred while trying to timeout the user.")
            ]
        });
        console.error(error);
    }
};

exports.conf = {
    aliases: ["timeout", "chup", "soja"]
};

exports.help = {
    name: "mute"
};
