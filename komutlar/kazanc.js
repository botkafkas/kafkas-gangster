const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let replies = ["maalesef fakirsin :/ 10","Hmm Orta durumdasın. kazancın 2000","Kazancın: 15000 Tebrikler!","kazancın: 5000 yine iyi :)","günlük 50 tl :)","sen senginsiz kardeş. say say bitmez: 75000tl","maalesef iş bulamadın."]
  	let result = Math.floor((Math.random() * replies.length))

  	const ball = new Discord.RichEmbed()
  	.setAuthor(message.author.tag, message.author.avatarURL)
  	.setColor('RANDOM')
  	.setDescription(replies[result]);
  	message.channel.sendEmbed(ball)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kazancım',
  description: 'Rastgele kazanç gönderir.',
  usage: 'kazancım'
};