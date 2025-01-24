const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

exports.run = async (client, message, args) => {
 
  // Category Embeds
const categoryEmbeds = {
  music: new EmbedBuilder()
    .setDescription(`<:lnl_purpleflowers:1279113703706591406> **[Server members](https://discord.gg/hunainstore)**
> <:dot:1279124693412216853>: Fully automatic delivery
> <:dot:1279124693412216853>: Online with realistic status / presence randomly distributed
> Realistic profile (username , avatar , Mix aged) | Only if you buy online members
> <:dot:1279124693412216853>: The amount you enter to buy is the amount of members you get in your server
> <:dot:1279124693412216853>: They join with a bot which needs create_invite permission
> <:dot:1279124693412216853>: Must disable or kick antiraid bots like Flantic , Security , Vortex , Beemo
> <:dot:1279124693412216853>: If you buy multiple times for the same server make sure you don't buy more than max stock, you can buy on next restock [No Refunds or Replace In this Case].
> <:dot:1279124693412216853>: If Bot Gets Kicked No Refunds/Replace
> <:dot:1279124693412216853>: Leaving Review Without Messaging no Members
> <:dot:1279124693412216853>: If bot or token gets ban No refund/Replace
> <:dot:1279124693412216853>: Using Vpn and You Dont get the product = No refunds or Replace
> <:dot:1279124693412216853>: No refunds/replace if discord terminates the tokens`)
    .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),

  config: new EmbedBuilder()
    .setDescription(`<:lnl_purpleflowers:1279113703706591406> **[3M NITRO ACCOUNTS](https://discord.gg/hunainstore)**
> <:dot:1279124693412216853> These Accounts have 90-80 days of nitro and full access to mail and discord.
> <:dot:1279124693412216853> Accounts Are Never Resold Or Reused By Us. All Accounts Are Checked Twice Before Uploading On Shop.
> <:dot:1279124693412216853> No Replacement Of Tokens getting limited by discord.
> <:dot:1279124693412216853> These accounts have 2x Unused Boosts.
> <:dot:1279124693412216853> 2hr replacement Warranty If you found any issue in account.
> <:dot:1279124693412216853> Change password of mail & account after purchasing.
> <:dot:1279124693412216853> No replacement/refund if accounts get disabled by discord or discord revokes promos.`)
    .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),

  filter: new EmbedBuilder()
    .setDescription(`<:lnl_purpleflowers:1279113703706591406> **[Discord Nitro Gift link](https://discord.gg/hunainstore)**

<:dot:1279124693412216853> __Revoke Warranty__
> full warranty is for 2 weeks or 30d if mentioned and its only for monthly gift links, yearly gift links got no warranty.

<:dot:1279124693412216853> __Claim warranty__
> no auto claim warranty as it’s impossible to find out who claimed the link, if you saying its auto claimed provide video proofs before delivery and opening email - checking all the links.

<:dot:1279124693412216853> __Report form__
> you have to fill our report form which includes video proof from the moment of claiming showing your credits and email

<:dot:1279124693412216853> __Voided Warranty__
> your warranty will be invalid if you report after 24h, stack more than 2 nitros in your account or fail to fill proper our form with video proof



 \`\`\`yaml
/// !! report form for discord nitro !! \\\ 
\`\`\`
> <a:Check:1267939435790598267> ▸ Gift link given :
> <a:Check:1267939435790598267> ▸ Purchase date of nitro :
> <a:Check:1267939435790598267> ▸ Remaining days of the nitro :
> <a:Check:1267939435790598267> ▸ Screenshot of discord handle (showing email address)
> <a:Check:1267939435790598267> ▸ Screenshot of revoked msg (email from discord) :
> <a:Check:1267939435790598267> ▸ Screenshot of account subscription:
> <a:Check:1267939435790598267> ▸ Screenshot of sent links with who claimed the gift :
> <a:Check:1267939435790598267> ▸ Video Recording of claiming the link showing your email and nitro subscription with username

<:dot:1279124693412216853> OPEN TICKET for report

<:dot:1279124693412216853> MAKE SURE YOU REPORT WITHIN 24 HOURS OF REVOKE OR ELSE NO REFUND WILL BE PROVIDED

<:dot:1279124693412216853> ONLY REFUNDS NO REPLACE

- refunds - price paid / used days - refund`)
    .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),

  information: new EmbedBuilder()
    .setDescription(`<:lnl_purpleflowers:1279113703706591406> **[Server Boosts](https://discord.gg/hunainstore)**
> <:dot:1279124693412216853>: 14 Server Boosts To Any Server You Choose
> <:dot:1279124693412216853>: Full Warranty
> <:dot:1279124693412216853>: Not Against Discord Rules and Regulations
> <:dot:1279124693412216853>: Don't kick the server boosters
> <:dot:1279124693412216853>: Delivered within minuets of payment
> <:dot:1279124693412216853>: They have warranty depending on how long you bought them for
> <:dot:1279124693412216853>: Disable all anti raid bots and give working invite link before i boost I will not re-boost
> <:dot:1279124693412216853>: We NEVER Replace or give refunds if Your server gets deleted, You or a staff member kicks the accounts or an anti raid bot kicks the accounts
> <:dot:1279124693412216853>: Once we boost your server, we cannot transfer the boost. We will not be held responsible for any Nitro IDs/tokens getting termed or revoked by Discord, and we will not provide any refund or replacement.
> <:dot:1279124693412216853>: We advise you to turn off any anti-raid bots before making a purchase, as we will not replace any boosts if your anti-raid bot kicks the boosting accounts.
> <:dot:1279124693412216853>: We cannot provide proof if the ID is not in the server or got kicked or revoked, as the boost will be activated through tokens.
> <:dot:1279124693412216853>: We are not responsible for any issues arising from providing a wrong or invalid Discord server.`)
    .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),
  
  all: new EmbedBuilder()
    .setDescription(`<:lnl_purpleflowers:1279113703706591406> **[SERVER RULES](https://discord.gg/hunainstore)**
> <a:Check:1267939435790598267> : No need to rush orders. please respect my privacy and time.
> <a:Check:1267939435790598267> : Prices may change without prior notice. always check the updated pricelist
> <a:Check:1267939435790598267> : No rude buyers. be kind. respect others as you want to be respected. rude = kicked.
> <a:Check:1267939435790598267> : 1-5 days is considered as end of subscription or premium accounts.
> <a:Check:1267939435790598267> : No self-promotion, Dm advertising or any other advertisements are not allowed in this server. if found advertising all warranty on products will be voided.
> <a:Check:1267939435790598267> : Double check your information and make sure you've entered the correct info.
> <a:Check:1267939435790598267> : all products are non-refundable. refunds will not be given unless stated by the me.
> <a:Check:1267939435790598267> : Make sure to take responsibility to have proofs when required.`)
    .setFooter({ text: `Requested by ${message.author.tag}.`, iconURL: message.author.displayAvatarURL({ dynamic: true }) }),
};

  const embed = new EmbedBuilder()
    .setAuthor({
      name: message.author.displayName,
      iconURL: message.author.displayAvatarURL({ dynamic: true }),
    })
    .setDescription("> <:lnl_purpleflowers:1279113703706591406> **Below are the __Terms Of Services__ For Each Category**")   
    .setColor("#007fff")
    //.setImage("https://cdn.discordapp.com/banners/1279054089119862794/a_25ce2952a9ce1e646719f696c1ee57aa.gif?size=4096")
    //.setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    //.setTimestamp()
    /*.setFooter({
      text: `Requested By ${message.member.displayName}`,
      iconURL: message.author.displayAvatarURL({ dynamic: true }),
    });*/

  // Select Menu for Command Categories
  let menu = new StringSelectMenuBuilder()
    .setCustomId("menu")
    .setMinValues(1)
    .setMaxValues(1)
    .setPlaceholder("⭕ ・ Browse Terms Of Service")
    .addOptions([
      {
        label: "Server Members",
        value: "music",
        emoji: `<:GettoUser:1279132447027761183>`,
      },
      {
        label: "3m Nitro Accounts",
        value: "config",
        emoji: `<a:nitro:1279132563260309584>`,
      },
      {
        label: "Nitro Gift Link",
        value: "filter",
        emoji: `<a:nitro:1279132563260309584>`,
      },
      {
        label: "Server Boosts",
        value: "information",
        emoji: `<a:Boost_badges_rise:1279133946231394376>`,
      },
      {
        label: "Server Rules",
        value: "all",
        emoji: `<:discordrules:1279134092616536147>`,
      },
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
  aliases: ["tos", "terms"]
};

exports.help = {
  name: "termsofservice"
};


