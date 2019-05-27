const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** !canlıdestek = Kendi Sunucumuzdan Sizin sunucunuzla Bağlantı Kurup yazılı Görüşüyoruz.\n**•** !bağış = Bağış Yapmak İçin İninal Barkodumuz.')
  .addField("» Linkler", `[Bot Davet Linki]()` ,false)    
  .setFooter('Kafkas Gangster Destek');

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
  aliases: ['destek'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Tüm komutları gösterir.',
  usage: 'destek'
};