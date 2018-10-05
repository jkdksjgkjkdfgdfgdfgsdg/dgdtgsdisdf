const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** حرام واحد جميل مثلك م يكون عندنا .. تنورنا  https://discord.gg/uQm2EE9 ** ')

}).catch(console.error)
})


client.login(process.env.BOT_TOKEN); 
