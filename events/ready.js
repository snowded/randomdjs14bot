const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag} Bot Online!`)
client.user.setActivity(`.gg/hunainstore`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`👾 ${files.length} Total Commands!`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`🎀 ${props.help.name}.js Loaded!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
