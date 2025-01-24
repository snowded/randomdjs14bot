const { EmbedBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
        const user =
            message.mentions.users.first() ||
            client.users.cache.get(args[0]) ||
            message.author

        const destroyer = user.id === '1026351257369194566' ? true : false
        const hunain = user.id === '1239180909807407236' ? true : false
        const titan = user.id === '1111457434356170873' ? true : false
        let badges = ''

        const guild = await client.guilds.fetch('1178390363027816619')

        const sus = await guild.members.fetch(user.id).catch((e) => {
            if (user) badges = badges
            else badges = '`No Badge Available`'
        })

            
        if (hunain === true || user.id === '1239180909807407236')
            badges =
                badges +
                `\n<:snow:1279364235629166652> [Hunain](https://discord.com/users/1239180909807407236)`
               
        if (titan === true || user.id === '1111457434356170873')
            badges =
                badges +
                `\n<:snow:1279364235629166652> [titan.](https://discord.com/users/1111457434356170873)`

        if (destroyer === true || user.id === '1026351257369194566')
             badges =
              badges +
                `\n<:snow:1279364235629166652> [snoww.](https://discord.com/users/1026351257369194566)`

        try {

            if (destroyer === true || user.id === '1026351257369194566')
                badges =
                    badges +
                    `\n<:achie_developer:1279307770134270055> Developer`

        

            const own = sus.roles.cache.has('1201969316363501568')
            if (own === true)
                badges = badges + `\n<:snow:1279199385887969402> Seller`

            const team = sus.roles.cache.has('1220848603636170793')
            if (team === true)
                badges =
                    badges +
                    `\n<:manager:1279307365962743889> Manager`

            const devteam = sus.roles.cache.has('1220848601387892756')
            if (devteam === true)
                badges =
                    badges +
                    `\n<:creamrole:1279367839542808576> Cream Role`
        
            const manager = sus.roles.cache.has('1220848604990800022')
            if (manager === true)
                badges = badges + `\n<:reonshieldstar:1258795728726396949> Moderator`

            const han = sus.roles.cache.has('1220848607620497590')
            if (han === true)
                badges = badges + `\n<:sellerspe:1279368709328339056> Seller Special`

            const mod = sus.roles.cache.has('1220848608916803584')
            if (mod === true)
                badges = badges + `\n<:vip:1279368711341346856> Vip`

            const helper = sus.roles.cache.has('1272932628529418291')
            if (helper === true)
                badges = badges + `\n<:Money:1279308575725850655> Bleeds money | + $200`

            const aman = sus.roles.cache.has('1272927438950764554')
            if (aman === true)
                badges =
                    badges + `\n<:unstable:1272928704062029946> Financially Unstable | + $150`
        
             const cont = sus.roles.cache.has('1220848609533231207')
             if (cont === true)
                   badges = badges + `\n<:100:1279368713086173215> Spoiled w/Money | + $100`

             const ogs = sus.roles.cache.has('1220848611621863596')
             if (ogs === true)
                 badges = badges + `\n<:75:1279369638630789177> Rxch | + $75`

             const boost = sus.roles.cache.has('1220848613115170917')
             if (boost === true)
                 badges = badges + `\n<:50:1279368707566469153> Rags | + $50`

             const os = sus.roles.cache.has('1220848614000300092')
            if (os === true)
                badges = badges + `\n<:verified:1279309057651380285> slight rags | + $25`
            
            const vip = sus.roles.cache.has('1220848614545428594')
            if (vip === true)
                    badges = badges + `\n<:donor:1279368705695809567> Donors`

            const hundi = sus.roles.cache.has('1272618096322154597')
            if (hundi === true)
                badges =
                    badges +
                    `\n<:Money:1279308575725850655> Huntsman`


            const supp = sus.roles.cache.has('1220848619989762200')
            if (supp === true)
                badges =
                    badges +
                    `\n<:friends1:1279369636642684992> Friends`

            const fr = sus.roles.cache.has('1220848616080670910')
            if (fr === true)
                badges =
                    badges + `\n<:client:1279367814792216607> Clients`
            
                    const botuser = sus.roles.cache.has('1220848621277155368')
                    if (botuser === true)
                        badges = badges + `\n<:GettoUser:1279132447027761183> Server Member`
        } catch (err) {
            if (badges) {
                badges = ''
                badges = badges
            } else if (badges === '') badges = '```yaml\nThis User is not Cool Enough to have badges!\n```'
        }

        const pr = new EmbedBuilder()
            .setAuthor({
            name: `${user.displayName}'s Profile`,
            iconURL: client.user.displayAvatarURL({ dynamic: true })
})
            .setThumbnail(user.displayAvatarURL({ dynamic: true }))
            //.setTitle(`${user.username}'s Profile`)
            .setTimestamp()
            .setFooter({
                text: `Requested by ${message.author.displayName}`,
                iconURL: message.author.displayAvatarURL({ dynamic: true })

            })
            .setDescription(`> <a:reddot_:1279114784112902174> **List Of Badges**
  ${badges ? badges : '```yaml\nThis User is not Cool Enough to have badges!\n```'}\n\nIn Order To Receive Your Badges, You Must Be Present In Our Support Server. To Join The Support Server Click [Here.](https://discord.gg/hunainstore)`)
        message.channel.send({ embeds: [pr] })
    }

    exports.conf = {
        aliases: ["pr", "Badges"]
    };
    
    exports.help = {
        name: "profile"
    };
