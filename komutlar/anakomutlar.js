const Discord = require('discord.js');

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Kafkas Gangster`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordbots.org/bot/582147891859030019 | **Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`Gangster's - Ana Komutlar`, `:white_small_square: | **!otorol-ayarla @rol #kanal**: Otorol Rol'ü Belirler!\n:white_small_square: | **!hoşgeldin-ayarla** = Resimli Hoşgeldin Kanalı Ayarlar!\n| **!sayaç-ayarla <sayı> #kanal**: Sunucuya Sayaç Kanalı Belirler!\n:white_small_square: | **!log-ayarla #kanal**: Kullanıcılar için komutlar.\n:white_small_square: | **!küfür aç/kapat**: Küfür Açar Veya Kapatır.\n:white_small_square: | **!link-engel aç/kapat**: Link  Engel Açar Veya Kapatır.\n:white_small_square: | **!öneri** : BOT için komut önerisi yazarsınız.\n:white_small_square: | **!başvuru** : Yetkili Başvurusu Yapar.\n:white_small_square: | **!hata** : Btotdaki Komutlar ile ilgili hataları bildirmenize yarar`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['anakomut', 'anakomutlar', 'anacommand',],
    permLevel: 0
  };
  
  exports.help = {
    name: 'anakomutlar',
    description: 'anakomutlar',
    usage: 'anakomutlar'
  };