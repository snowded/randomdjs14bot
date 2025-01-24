const { EmbedBuilder } = require('discord.js');

exports.run = async (client, message, args) => {

    // Create the embed
    const embed = new EmbedBuilder()
    .setAuthor({
        name: `Hunain Store ~ Pay Command`,
        iconURL: client.user.displayAvatarURL({ dynamic: true })
    })
.addFields(
    {
        "name": "> <:Easypaisa:1279326483684528211> Easypaisa",
        "value": "<:dot:1279124693412216853> 03195952154\n<:dot:1279124693412216853> Muhammad Hunain",
        "inline": true
      },
      {
        "name": "ㅤ",
        "value": "ㅤ",
        "inline": true
      },
      {
        "name": "> <:Jazzcash:1279326991375405107> JazzCash",
        "value": "<:dot:1279124693412216853> 03195952154\n<:dot:1279124693412216853> Muhammad Hanin",
        "inline": true
      },
      {
        "name": " ",
        "value": " ",
        "inline": false
      },
      {
        "name": "> <:binance:1279327061303103538> Binance",
        "value": "<:dot:1279124693412216853> 477202988\n<:dot:1279124693412216853> Muhammad_Hunain",
        "inline": true
      },
      {
        "name": "ㅤ",
        "value": "ㅤ",
        "inline": true
      },
      {
        "name": "> <:Bank:1279326792443760716> Bank",
        "value": "<:dot:1279124693412216853> 99780110087102\n<:dot:1279124693412216853> Muhammad Hunain",
        "inline": true
      },
      {
        "name": " ",
        "value": " ",
        "inline": false
      },
      {
        "name": "> <a:ltcan:1279326338334851134> LiteCoin",
        "value": "<:dot:1279124693412216853> ltc1q6t5vlrdza9744ut3m49lylhu5d4kq2hm0pf7rt",
        "inline": true
      }
)
        .setTimestamp()
        .setFooter({
            text: `Requested By ${message.author.displayName}`,
            iconURL: message.author.displayAvatarURL({ format: 'png', size: 2048 })
        });

    message.channel.send({ embeds: [embed] });
}

exports.conf = {
    aliases: []
};

exports.help = {
    name: "pay"
};
