
const Discord = require('discord.js');
//Ümit Can Yücel tarafından hazırlanmıştır.

const sans = [
"Dostum su tabancası mı bu? 8 CM",
"Ehh, 16 CM",
"Sana fazla bu, 18 CM",
"Sallama, 18 CM ne lan?",
"Büyüksün abi, 22 CM",
"26 CM ne lan? Çek önümden şunu.",
"Yalanını, 38 CM miş. hehe",
"Zat-ı Şahaneleriniz nasıl? 48 CM"
//,"cevap" şeklinde kod geliştirilebilir.
];

exports.run = function(client, message, args) {
   
  var soru = args.join(' ');

    var kac = sans[Math.floor(Math.random() * sans.length)];
    const embed = new Discord.RichEmbed()
      .addField(`⬇️ ⬇️ ⬇️ ⬇️`, `${kac}`)
      .setColor("RANDOM");
    return message.channel.sendEmbed(embed);

//Ümit Can Yücel tarafından yazılmıştır.
//Başka yerde paylaşılmaması rica olunur.
          };  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['kaccm'],
  permLevel: 0 
};

exports.help = {
  name: 'kaçcm', 
  description: 'Deneyin :)',
  usage: 'kaçcm'
};