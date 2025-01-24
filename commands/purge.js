const { EmbedBuilder, PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
    const logChannelId = '1279370847647170654'; // Replace with your log channel ID
    const amount = parseInt(args[0]);
    const target = message.mentions.users.first();
    const type = args[1] && args[1].toLowerCase() === 'bots' ? 'bots' : 'user';

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130>  **aww. You're not Management. hehe.**")
            ]
        });
    }

    if (!amount || isNaN(amount) || amount < 1 || amount > 1000) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FFFF00")
                    .setDescription("> <:tutuAlert:1267939776728924233> **Please provide a number of messages to delete between 1 and 1000.**")
            ]
        });
    }

    let deletedMessages = 0;
    const logMessages = [];
    let messagesToDelete;

    while (deletedMessages < amount) {
        const deleteAmount = Math.min(amount - deletedMessages, 100);

        if (type === 'bots') {
            messagesToDelete = await message.channel.messages.fetch({ limit: deleteAmount });
            messagesToDelete = messagesToDelete.filter(msg => msg.author.bot);
        } else if (target) {
            messagesToDelete = await message.channel.messages.fetch({ limit: deleteAmount });
            messagesToDelete = messagesToDelete.filter(msg => msg.author.id === target.id);
        } else {
            messagesToDelete = await message.channel.bulkDelete(deleteAmount, true);
        }

        const deleted = await message.channel.bulkDelete(messagesToDelete, true);
        deletedMessages += deleted.size;
        logMessages.push(...deleted.map(msg => msg.content || '[No Text Content]'));
    }

    const purgeEmbed = new EmbedBuilder()
        .setColor("#00FF00")
        .setDescription(`> <a:Check:1267939435790598267> **Successfully deleted ${deletedMessages} messages.**`);

    await message.channel.send({ embeds: [purgeEmbed] });

    const logEmbed = new EmbedBuilder()
        .setColor("#007FFF")
        .setDescription(`
            <:tutuMod:1267939618322518059> **Messages Purged**
            > <:dot:1279124693412216853> **Channel : ${message.channel.name} (${message.channel.id})**
            > <:dot:1279124693412216853> **Moderator : ${message.author.tag} (${message.author.id})**
            > <:dot:1279124693412216853> **Messages Deleted : ${deletedMessages}**`)
        .addFields({ name: 'Deleted Messages:', value: logMessages.slice(0, 10).join('\n') || '[No messages could be logged]' }) // Only log the first 10 messages to avoid long embeds
        .setTimestamp()
        .setFooter({
            text: `Moderator ID: ${message.author.id}`,
            iconURL: message.author.displayAvatarURL({ dynamic: true })
        });

    const logChannel = await client.channels.fetch(logChannelId);
    if (logChannel) {
        logChannel.send({ embeds: [logEmbed] });
    }
};

exports.conf = {
    aliases: ["clear", "clean"]
};

exports.help = {
    name: "purge"
};
