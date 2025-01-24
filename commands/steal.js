const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
    const logChannelId = '1279370847647170654'; // Replace with your log channel ID

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageEmojisAndStickers)) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130>  **aww. You're not Management. hehe.**")
            ]
        });
    }

    if (args.length < 1) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130> **Please provide an emoji to steal.**")
            ]
        });
    }

    const emoji = args[0];
    if (!emoji.startsWith('<') || !emoji.endsWith('>')) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130> **Invalid emoji format. Please use a custom emoji.**")
            ]
        });
    }

    const match = emoji.match(/<(?:a)?:(?<name>[a-zA-Z0-9_]+):(?<id>\d+)>/);
    if (!match) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130> **Invalid emoji format. Please use a custom emoji.**")
            ]
        });
    }

    const { name, id } = match.groups;
    const extension = emoji.startsWith('<a:') ? 'gif' : 'png';
    const url = `https://cdn.discordapp.com/emojis/${id}.${extension}`;

    const confirmEmbed = new EmbedBuilder()
        .setColor("#FFFF00")
        .setDescription(`> <:tutuAlert:1267939776728924233> **Do you want to add this emoji to the server?**`)
        .setImage(url)
        .setFooter({ text: `Emoji Name: ${name}` });

    const yesButton = new ButtonBuilder()
        .setCustomId("emoji_yes")
        .setEmoji("<a:Check:1267939435790598267>")
        .setStyle(ButtonStyle.Primary);

    const noButton = new ButtonBuilder()
        .setCustomId("emoji_no")
        .setEmoji("<a:Cross:1267939449820549130>")
        .setStyle(ButtonStyle.Danger);

    const actionRow = new ActionRowBuilder().addComponents(yesButton, noButton);

    const confirmMessage = await message.reply({
        embeds: [confirmEmbed],
        components: [actionRow],
    });

    const filter = (interaction) => interaction.user.id === message.author.id;

    const collector = confirmMessage.createMessageComponentCollector({
        filter,
        time: 30000, // 30 seconds to respond
    });

    collector.on("collect", async (interaction) => {
        if (interaction.customId === "emoji_yes") {
            try {
                const addedEmoji = await message.guild.emojis.create({ attachment: url, name: name });

                const successEmbed = new EmbedBuilder()
                    .setColor("#00FF00")
                    .setDescription(`<a:Check:1267939435790598267> **Emoji ${addedEmoji} has been added to the server.**`);

                await interaction.update({ embeds: [successEmbed], components: [] });

                const logEmbed = new EmbedBuilder()
                    .setColor("#007FFF")
                    .setDescription(`
                        <:tutuMod:1267939618322518059> **Emoji Added**
                        > <:dot:1279124693412216853> **Emoji: ${addedEmoji} (${addedEmoji.id})**
                        > <:dot:1279124693412216853> **Added by: ${message.author.tag} (${message.author.id})**
                    `)
                    .setTimestamp();

                const logChannel = await client.channels.fetch(logChannelId);
                if (logChannel) {
                    logChannel.send({ embeds: [logEmbed] });
                }
            } catch (error) {
                console.error(error);
                await interaction.update({
                    embeds: [
                        new EmbedBuilder()
                            .setColor("#FF0000")
                            .setDescription("<a:Cross:1267939449820549130> An error occurred while trying to add the emoji.")
                    ],
                    components: []
                });
            }
        } else if (interaction.customId === "emoji_no") {
            await interaction.update({
                embeds: [new EmbedBuilder().setColor("#FFFF00").setDescription("> <:tutuAlert:1267939776728924233> **Emoji addition canceled.**")],
                components: [],
            });
        }
    });

    collector.on("end", async () => {
        if (!confirmMessage.deleted) {
            confirmMessage.edit({ components: [] }).catch(() => {});
        }
    });
};

exports.conf = {
    aliases: ["emoji", "addemoji"]
};

exports.help = {
    name: "steal"
};