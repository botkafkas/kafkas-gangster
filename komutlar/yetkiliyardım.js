const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** !ban @kullanıcı = Herhangi Bir Kullanıcıyı Banlarsınız.\n**•** !kick = Herhangi Bir Kullanıcıyı Atarsınız.\n**•** !unban @kullanıcı = Herhangi Bir Kullanıcının Banını Açarsınız.\n**•** !otorol rol = İstediğiniz Rolü Girişte Verdirmesini Sağlayabilirsiniz.\n**•** !sunucutanıt = Sunucunuzu Tanıtabilirsiniz.\n**•** !rolbilgi ? İstediğiniz Rolün Bilgilerini Gösterir.\n**•** !temizle = Herhangi Bir Miktarda Mesajları Siler.\n**•** !ses-kanal-aç = Bir Ses Kanalı Oluşturur.\n**•** !yazı-kanal-aç = Bir Yazı Kanalı Oluşturur.\n**•** !slowmode = Sunucuda Yavaş Mod Açar.\n**•** !ailemiz = Botun Sunucularını Gösterir.\n**•** !sustur = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.\n**•** !kanalıkilitle = İstediğiniz Kanalı Kilitler\n**•** !kilitaç = İstediğiniz Kanalın Kilidini Açar.\n**•**!sunucukur = Sunucu Kurar\n**•**!çekiliş = Çekiliş Yapar')
      .addField("» Linkler", `[Bot Davet Linki](https://discordbots.org/bot/582147891859030019)`, false)
      .setFooter('Kafkas Gangster Yetkili Menüsü')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};