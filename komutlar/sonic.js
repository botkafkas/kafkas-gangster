
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Soniği göstericeğini yazmadın dostum.**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + ' Bak aşırı hızlı bu Sonic  **')
        .setImage(`https://media2.giphy.com/media/3o7aDee5RyONByAZ1K/giphy.gif?cid=e1bb72ff5c9fb9a532497874635af7c6`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hız'],
  permLevel: 0
};

exports.help = {
  name: 'sonic',
  description: 'Bu Sonic.',
  usage: 'sonic'
};