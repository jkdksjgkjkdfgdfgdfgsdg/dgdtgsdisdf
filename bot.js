const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** حرام واحد جميل مثلك م يكون عندنا .. تنورنا  https://discord.gg/9dJNjkU ** ')

}).catch(console.error)
})
NDkzNjAyMDMxMjgyNjgzOTA0.Dpkkgw.nVrIaF8S8EX-l6wkqe6gNEH7G1A

client.login(process.env.BOT_TOKEN); 
