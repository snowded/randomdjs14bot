const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

exports.run = async (client, message, args) => {
 
  // Category Embeds
const categoryEmbeds = {
  music: new EmbedBuilder()
    .setDescription(`<:tutuSearch:1267939169934508042> **Terms Of Service Command**

**__-termsofservice__**
With the help of this command you can view our terms of service.
> <:dot:1279124693412216853> **Alias :** \`-tos\` | \`-terms\``)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter({ text: `Requested by ${message.author.displayName}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),

  config: new EmbedBuilder()
    .setDescription('<:tutuMod:1267939618322518059> **Moderation**\n\n> <:dot:1279124693412216853> `ban`, `unban`, `kick`, `mute`, `unmute`, `nuke`, `purge`, `steal`, `rolemenu`')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter({ text: `Requested by ${message.author.displayName}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),

  filter: new EmbedBuilder()
    .setDescription('<:tutuAlert:1267939776728924233> **Information**\n\n> <:dot:1279124693412216853> `avatar`, `about`, `help`, `pay`, `ticket`')
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter({ text: `Requested by ${message.author.displayName}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),

  information: new EmbedBuilder()
    .setDescription(`<:tutuSearch:1267939169934508042> **Achivements Command**

**__-profile__**
With the help of this command you can view your achievements of the server.
> <:dot:1279124693412216853> **Alias :** \`-pr\` | \`-Badges\``)
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setFooter({ text: `Requested by ${message.author.displayName}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),
  
  all: new EmbedBuilder()
    .setDescription(`🎵 **Music Commands**\n> \`autoplay\`, \`clear\`, \`grab\`, \`join\`, \`leave\`, \`loop\`, \`nowplaying\`, \`pause\`, \`play\`, \`previous\`, \`queue\`, \`radio\`, \`rejoin\`, \`remove\`, \`resume\`, \`search\`, \`seek\`, \`shuffle\`, \`similar\`, \`skip\`, \`stop\`, \`volume\`\n\n🔧 **Config Commands**\n> \`247\`, \`buy\`, \`config\`, \`ignore\`, \`prefix\`, \`premium\`, \`preset\`, \`profile\`, \`redeem\`\n\n🔍 **Filter Commands**\n> \`enhance\`, \`equalizer\`, \`filter\`, \`optimize\`\n\nℹ️ **Information Commands**\n> \`balance\`, \`help\`, \`invite\`, \`ping\`, \`report\`, \`stats\`, \`support\`, \`vote\``)
    .setFooter({ text: `Requested by ${message.author.tag}.`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),
};

  const embed = new EmbedBuilder()
    .setAuthor({
      name: `Help Menu`,
      iconURL: client.user.displayAvatarURL({ dynamic: true }),
    })
    .setDescription("<:lnl_purpleflowers:1279113703706591406> Official Bot of [Hunain Store](https://discord.gg/hunainstore) For Management.\n <:tutuPrefix:1267939215375601705> Prefix For This Server : \`-\`\n <a:reddot_:1279114784112902174> Total Commands (Prefix) : \`52\`\n\n<:cs_lists:1279116455572668461> **__Categories__**\n<:tutuSearch:1267939169934508042> Tos\n<:tutuMod:1267939618322518059> Moderation\n<:tutuAlert:1267939776728924233> Information\n<:tutuLeaderboard:1267940107122376806> Achievements")   
    .setColor("#007fff")
    .setImage("https://cdn.discordapp.com/banners/1279054089119862794/a_25ce2952a9ce1e646719f696c1ee57aa.gif?size=4096")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setFooter({
      text: `Requested By ${message.member.displayName}`,
      iconURL: message.author.displayAvatarURL({ dynamic: true }),
    });

  // Select Menu for Command Categories
  let menu = new StringSelectMenuBuilder()
    .setCustomId("menu")
    .setMinValues(1)
    .setMaxValues(1)
    .setPlaceholder("⭕ ・ Browse Hunain Store's Manager")
    .addOptions([
      {
        label: "Tos",
        value: "music",
        emoji: `<:tutuSearch:1267939169934508042>`,
      },
      {
        label: "Moderation",
        value: "config",
        emoji: `<:tutuMod:1267939618322518059>`,
      },
      {
        label: "Information",
        value: "filter",
        emoji: `<:tutuAlert:1267939776728924233>`,
      },
      {
        label: "Achivements",
        value: "information",
        emoji: `<:tutuLeaderboard:1267940107122376806>`,
      },
      /*{
        label: "Show all commands",
        value: "all",
        emoji: `🤖`,
      },*/
    ]);

  const selectMenu = new ActionRowBuilder().addComponents(menu);

  // Back Button
  const backButton = new ButtonBuilder()
    .setCustomId("back")
    .setEmoji("<:gettobackarrow:1277402385400205362>")
    .setStyle(ButtonStyle.Success);

  // Send Initial Message
  const m = await message.reply({
    embeds: [embed],
    components: [selectMenu],
  });

  // Filter for Interactions
  const filter = async (interaction) => {
    if (interaction.user.id === message.author.id) {
      return true;
    }
    await interaction.reply({
      embeds: [
        new EmbedBuilder().setDescription(
          `⛔ Only **${message.author.tag}** can use this.`
        ),
      ],
      ephemeral: true,
    });
    return false;
  };

  const collector = m.createMessageComponentCollector({
    filter: filter,
    time: 300000, // 5 minutes timeout
  });

  collector.on("collect", async (interaction) => {
    if (!interaction.deferred) await interaction.deferUpdate();

    const category = interaction.values?.[0] || interaction.customId;
    let newEmbed;
    let components = [];

    switch (category) {
      case "home":
        newEmbed = embed;
        components = [selectMenu];
        break;

      case "all":
        newEmbed = categoryEmbeds.all;
        components = [new ActionRowBuilder().addComponents(backButton)];
        break;

      case "back":
        newEmbed = embed;
        components = [selectMenu];
        break;

      default:
        newEmbed = categoryEmbeds[category] || embed;
        components = [new ActionRowBuilder().addComponents(backButton)];
        break;
    }

    await m.edit({
      embeds: [newEmbed],
      components: components,
    }).catch(() => {});
  });

  collector.on("end", async () => {
    await m.edit({ components: [] }).catch(() => {});
  });
};

exports.conf = {
  aliases: ["h"]
};

exports.help = {
  name: "help"
};


