const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionsBitField } = require("discord.js");

exports.run = async (client, message, args) => {
    const logChannelId = '1279370847647170654'; // Replace with your log channel ID
    const channel = message.channel;

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
        return message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("#FF0000")
                    .setDescription("> <a:Cross:1267939449820549130>  **aww. You're not Management. hehe.**")
            ]
        });
    }

    const confirmEmbed = new EmbedBuilder()
        .setColor("#FFFF00")
        .setDescription("> <:tutuAlert:1267939776728924233> **Are you sure you want to nuke this channel?**\nThis action cannot be undone.")
        .setFooter({ text: "This will delete the current channel and recreate it." });

    const yesButton = new ButtonBuilder()
        .setCustomId("nuke_yes")
        .setEmoji("<a:Check:1267939435790598267>")
        .setStyle(ButtonStyle.Primary);

    const noButton = new ButtonBuilder()
        .setCustomId("nuke_no")
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
        if (interaction.customId === "nuke_yes") {
            try {
                const newChannel = await channel.clone({
                    name: channel.name,
                    permissions: channel.permissionOverwrites.cache,
                    position: channel.position,
                    topic: channel.topic,
                    nsfw: channel.nsfw,
                    parent: channel.parent,
                    rateLimitPerUser: channel.rateLimitPerUser
                });

                await channel.delete();

                const nukeEmbed = new EmbedBuilder()
                    .setColor("#00FF00")
                    .setDescription(`<a:Check:1267939435790598267> **Channel <#${newChannel.id}> has been nuked by <@${message.author.id}>**`);

                newChannel.send({ embeds: [nukeEmbed] });

                const logEmbed = new EmbedBuilder()
                    .setColor("#007FFF")
                    .setDescription(`
                        <:tutuMod:1267939618322518059> **Channel Nuked**
                        > <:dot:1279124693412216853> **Channel: ${channel.name} (${channel.id})**
                        > <:dot:1279124693412216853> **Moderator: ${message.author.tag} (${message.author.id})**
                    `)
                    .setTimestamp();

                const logChannel = await client.channels.fetch(logChannelId);
                if (logChannel) {
                    logChannel.send({ embeds: [logEmbed] });
                }
            } catch (error) {
                console.error(error);
                message.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor("#FF0000")
                            .setDescription("<a:Cross:1267939449820549130> An error occurred while trying to nuke the channel.")
                    ]
                });
            }
        } else if (interaction.customId === "nuke_no") {
            await confirmMessage.edit({
                embeds: [new EmbedBuilder().setColor("#FFFF00").setDescription("> <:tutuAlert:1267939776728924233> **Nuke canceled.**")],
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
    aliases: ["destroy", "annihilate"]
};

exports.help = {
    name: "nuke"
};
