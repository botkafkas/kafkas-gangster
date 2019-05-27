const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/QGzPdYCcBbbZm/giphy.gif", "https://media.giphy.com/media/44Eq3Ab5LPYn6/giphy.gif", "https://media.giphy.com/media/x1kS7NRIcIigU/giphy.gif", "https://media.giphy.com/media/Ebu8aRL2qxMzK/giphy.gif", "https://media.giphy.com/media/uymKgqrJ9Or60/giphy.gif", "https://media.giphy.com/media/U7P2vnWfPkIQ8/source.gif", "https://media.giphy.com/media/XHr6LfW6SmFa0/giphy.gif", "https://media.giphy.com/media/YFJ2iCW2FSnbpz0NKp/source.mp4", "https://media.giphy.com/media/bNdFHfp0VIiME/giphy.gif", "https://media.giphy.com/media/w1XrYq5PsCbyE/giphy.gif", "https://media.giphy.com/media/dIBzteMy7M5H6iy7CX/giphy.gif", "https://media.giphy.com/media/1LnQKc4eh8BP2/giphy.gif", "https://media.giphy.com/media/NBN2nFCVQDCDe/giphy.gif", "https://media.giphy.com/media/yV5xcSTmtVPBS/giphy.gif", "https://media.giphy.com/media/44X9vIGbuj864/giphy.gif", "https://media.giphy.com/media/XozypzpGakVuX2ciZJ/source.gif", "https://media.giphy.com/media/Tgn493H3TI544/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'ortaparmak',
  description: 'Rastgele ortaparmak gifi atar.',
  usage: 'ortaparmak'
}; 