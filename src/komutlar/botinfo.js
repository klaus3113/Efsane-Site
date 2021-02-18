const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

exports.run = async function (client, message, args) {
  
var toplambot = Object.getOwnPropertyNames(db.fetch("botlar"))
var toplammod = Object.getOwnPropertyNames(db.fetch("yetkili"))
var toplamadmin = client.admin

const embed = new Discord.RichEmbed()
  .setColor("WHITE")
  .setTitle("Bot List İstatistik")
  .setDescription(`
⠀
**-** Sistemde toplam \`${toplambot.length}\` bot bulunmaktadır**.**
**-** Sitemizde toplam \`${toplammod.length}\` moderatör çalışmaktadır**.**
**-** Sitemizin toplam \`${toplamadmin.length}\` admin bulunmaktadır**.**
`)
message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  kategori: 'moderasyon',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban-bot <kisi> <sebep>',
};
