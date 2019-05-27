const Discord = require('discord.js');

exports.run = (bot, message) => {
    let args = message.content.split(' ').slice(1).join(" ");
    
    if (!args) return message.channel.send("Karışım için yazı girmeniz gerekmektedir :)")
    message.channel.send(funnyWords(args))
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karıştır"],
  permLevel: 0
};

module.exports.help = {
  name: 'karıştır',
  description: 'yazdığınız yazıları karıştırır',
  usage: 'karıştır <yazı>'
};