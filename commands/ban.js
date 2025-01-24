const { EmbedBuilder, PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
    const logChannelId = '1279370847647170654'; // Replace with your channel ID
    const member = message.mentions.members.first(); 
    const reason = args.slice(1).join(' | ') || "idk";

    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130> **aww. You're not Management. hehe.**")
            ]
        });
    }

    if (!message.guild.members.me.permissions.has(PermissionsBitField.Flags.BanMembers)) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130> **I don't have permission to ban members.**")
            ]
        });
    }

    if (!member) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FFFF00")
                    .setDescription("> <:tutuAlert:1267939776728924233> **Please mention a user to ban.**")
            ]
        });
    }

    if (member.id === message.author.id) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("<a:Cross:1267939449820549130> You cannot ban yourself.")
                
            ]
        });
    }

    try {
        await member.ban({ reason });

        const banEmbed = new EmbedBuilder()
            .setColor("#00FF00")
            .setDescription(`<a:Check:1267939435790598267> **${member.user.tag} has been banned. | ${reason}**`)
            .setTimestamp()

        message.reply({ embeds: [banEmbed] });

        const logEmbed = new EmbedBuilder()
            .setColor("#007FFF")
            //.setTitle("User Banned")
            .setDescription(`
                <:tutuMod:1267939618322518059> **Member banned**
                > <:dot:1279124693412216853> **User Banned : ${member.user.tag} (${member.id})**
                > <:dot:1279124693412216853> **Moderator : ${message.author.tag} (${message.author.id})**
                > <:dot:1279124693412216853> **Reason : ${reason}**
                `)
            /*.addFields(
                { name: "User", value: ``, inline: true },
                { name: "Banned By", value: `${message.author.tag} (${message.author.id})`, inline: true },
                { name: "Reason", value: reason, inline: true }
            )*/
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
                    .setDescription("<a:Cross:1267939449820549130> An error occurred while trying to ban the user.")
            ]
        });
        console.error(error);
    }
};

exports.conf = {
    aliases: ["fuckoff", "Allah Hafiz"]
};

exports.help = {
    name: "ban"
};
