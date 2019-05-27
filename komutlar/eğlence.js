const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** !tr = Ne Mutlu Türküm Diyene.\n**•** !aşk @kullanıcı = Kullanıcı İle Aranızdaki Seviyeyi Gösterir.\n**•** !trinity = GİF.\n**•** !brilliance = GİF.\n**•** !bravery = GİF.\c !korkut = sunucudan birini Korkutursunuz.\n**•** !1vs1 @kullanıcı = Kullanıcı İle Eğlenceli 1VS1 atarsınız.\n**•** !balıktut = Balık Tutarsınız.\n**•** !espri = Espri Yaparsınız (Çok Soğuktur Dikkat).\n**•** !söv = Bot İstediğiniz Kişiye Söver.\n**•** !emojiyazı = yazdığınız yazıyı emojiye çevirir.\n**•** !steamstore = Seçtiğiniz Oyun Hakkında Bilgi Verir.\n**•** !slot = Slot Oyunu Oynar.\n**•** !rastgeleuye = Rast Gele en az 2 üye seçer.cc !havadurumu = Seçtiğiniz Şehirin Hava Durumunu Gösterir.\n**•**!trump =  Trump Gifi Yaraftır\n**•**!sonic = Sonicin kim olduğunu gösterir\n**•**!kaçcm = kaç CM olduğunu gösterir.\n**•**!urfagonder = Urfaya gönder bakam.\n**•**!ortaparmak = Rastgele Orta Parmak Fotoğrafı atar.\n**•**!sınav = Size Sınav Yapar\n**•**!wwegif = WWE Giflerini Paylaşır.\n**•**!sarıl = İstediğiniz kişiye sarılır.\n**•**!atatürk = Rastgele Atatürk GİFi paylaşır.\n**•**!koş = Koşma GİFi yaratır.\n**•**!sigaraiç = Sigara İçer.\n**•**!kahkaha = Kahkaha Atar.\n**•**!djdikkat = DJ DİKKATc!kazancım = Rastgele Kazanç Gösterir..\n**•**!herkesebendençay = Herkese Çay Dğıtır.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordbots.org/bot/582147891859030019)` + "**\n**", false)
      .setFooter('Kafkas Gangster')

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
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence '
};