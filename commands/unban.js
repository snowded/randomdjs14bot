const { EmbedBuilder, PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
    const logChannelId = '1279370847647170654'; // Replace with your channel ID
    const userId = args[0];

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
                    .setDescription("> <a:Cross:1267939449820549130> **I don't have permission to unban members.**")
            ]
        });
    }

    if (!userId) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FFFF00")
                    .setDescription("> <:tutuAlert:1267939776728924233> **Please provide a valid user ID to unban.**")
            ]
        });
    }

    try {
        const user = await client.users.fetch(userId);
        await message.guild.members.unban(userId);

        const unbanEmbed = new EmbedBuilder()
            .setColor("#00FF00")
            .setDescription(`<a:Check:1267939435790598267> **${user.tag} has been unbanned.**`)
            .setTimestamp();

        message.reply({ embeds: [unbanEmbed] });

        const logEmbed = new EmbedBuilder()
            .setColor("#007FFF")
            .setDescription(`
                <:tutuMod:1267939618322518059> **Member unbanned**
                > <:dot:1279124693412216853> **User Unbanned : ${user.tag} (${userId})**
                > <:dot:1279124693412216853> **Moderator : ${message.author.tag} (${message.author.id})**
            `)
            .setTimestamp()
            .setFooter({
                text: `ID: ${userId}`,
                iconURL: user.displayAvatarURL({ dynamic: true })
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
                    .setDescription("<a:Cross:1267939449820549130> An error occurred while trying to unban the user.")
            ]
        });
        console.error(error);
    }
};

exports.conf = {
    aliases: ["pardon", "forgive"]
};

exports.help = {
    name: "unban"
};
