const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://yunti.files.wordpress.com/2017/04/ataturk_bayrak_03_tam35-blogspot-com.gif", "https://yunti.files.wordpress.com/2016/11/bayrak_10_yunus_tam35-blogspot-com.gif", "https://yunti.files.wordpress.com/2018/02/ataturk_bayrak_05_tam35-blogspot-com.gif", "https://yunti.files.wordpress.com/2018/02/ataturk_bayrak_06_tam35-blogspot-com.gif", "https://i.pinimg.com/originals/56/38/9f/56389f8523920b8e492286db350031b0.gif", "https://img-s2.onedio.com/id-581d7278b2d2559c5474bf7f/rev-0/w-635/f-jpg-gif-webp-webm-mp4/s-6f0b4aa098dd277a1aec0e21e8ad6df93e9dffe4.gif", "http://liseyehazirlik.com/wp-content/uploads/2017/08/atat.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gazi Mustafa Kemal Atatürk")
        .setColor("#FF69B4")
        .setFooter(`${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ata"],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Bot Atatürk resmi atar',
  usage: 'atatürk'
}; 