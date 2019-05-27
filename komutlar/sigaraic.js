const Discord = require ("discord.js");

exports.run = (client, message, args) => {
    return message.channel.send("**Sigara zamanı!**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁☁');
                        }, 1020);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1250);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 1296);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.delete(`**Sigara sağlığa zararlıdır, içmekten vazgeç!**`);
                        }, 1500);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['sigara', 'yak'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "sigaraiç",
                  description: "sigara içersiniz",
                  usage: "sigaraiç"
                };