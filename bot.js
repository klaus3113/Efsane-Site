const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const db = require("quick.db");
const useful = require("useful-tools");
const ms = require("parse-ms");
// DATABASE AYARI
/*
 <%if (bot.users.get(id).presence.status){%>
						<% if (bot.users.get(id).presence.status === 'online') {%>
			<img src="https://cdn.discordapp.com/emojis/532658353915297794.png" width="40" height="40" style="margin-left: 100px; margin-top: -140px;">
						<%}else if(bot.users.get(id).presence.status === 'offline'){%>
			<img src="https://cdn.discordapp.com/emojis/532658353340416010.png?v=1" width="40" height="40" style="margin-left: 140px; margin-top: -190px;">
						<%}else if (bot.users.get(id).presence.status === 'dnd'){%>
				<img src="https://cdn.discordapp.com/emojis/532658362031144987.png" width="40" height="40" style="margin-left: 140px; margin-top: -190px;">
						<%}else if(bot.users.get(id).presence.status === 'idle'){%>
						<img src="https://cdn.discordapp.com/emojis/551428323302047771.png" width="40" height="40" style="margin-left: 170px; margin-top: -170px;">
						<%} %>  
        <% } %>
        */

client.ayar = db;
client.useful = useful;

let profil = JSON.parse(fs.readFileSync("./profil.json", "utf8")); // PROFIL KAYIT
client.profil = profil;

client.ayarlar = {
  prefix: "!", //prefix
  oauthSecret: "-gIcIThp_98nvWv2Q3zahkZzrpZbzhHI", //bot secreti
  callbackURL: "https://wrapskrka-pwps-rawor/token", //benim sitenin urlsini kendin ile değiş "/callback" kalacak!
  kayıt: "786954715866988584", //onaylandı, reddedildi, başvuru yapıldı falan kayıtların gideceği kanalın ID'ini yazacaksın                                                                                                                                                                                                                                                    // ! Roxza mutlu olan#2719
  renk: "AQUA", //embedların rengini burdan alıo can sıkıntısdna yapılmış bişe falan fln
  geliştirici: "786940464833232926",
  ser_geliştirici: "786940806199771136",
  part_geliştirici: "786940862856298526",
  bot: "772054393016287242",
  ser_bot: "764456886698246165",
  part_bot: "764456886698246165",
  kayıtsız: "769622584731762709"
};
client.kayıt = "";

// ADMIN PANEL DİSCORD İDLERİ //

client.admin = ["725800411172307015", "702444949794455643", ""]; // AYNILARINI APP.JS DOSYASINADA YAZINIZ

// ADMIN PANEL DİSCORD İDLERİ //

client.on("ready", async message => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);

  require("./app.js")(client);

  client.user.setStatus(`dnd`);
  client.user.setActivity(`||`); // ! Roxza mutlu olan#2719

  console.log("Site ve bot aktif oldu!");
});

client.on("presenceUpdate", (oldMember, newMember) => {
  if (db.has("botlar")) {
    if (Object.keys(db.fetch("botlar")).includes(newMember.id) === false)
      return;
  }

  let yenistatus = newMember.presence.status;

  db.set(`durum.${newMember.id}`, yenistatus);
});


client.on("guildMemberAdd", async member => {

  if(member.guild.id !== "ID") return;//Zorunlu Girilecek Sunucu ID'Sİ

  let g = client.guilds.cache.find(r => r.id == "ID");//Rolun Verileceği Sunucu ID'Sİ

  let us = g.members.cache.find(r => r.id == member.user.id);

  us.roles.add("ID");//Verilecek Rolun ID'Sİ

});

client.on("guildMemberAdd", member => {
  if (db.has("botlar")) {
    if (Object.keys(db.fetch("botlar")).includes(member.id) === false) return;
  }

  let yenistatus = member.presence.status;

  db.set(`durum.${member.id}`, yenistatus);
});

/*client.on("message", m => {
  if (m.author.id !== client.user.id) {
    if (m.author.bot === true) {
      m.delete(30000);
    }
  }
});*/

client.on("guildMemberAdd", m => {
  if (m.guild.id === "707544645168660490") {
    if (m.user.bot === true) {
      m.addRole(client.ayarlar.bot);
    }
  }
});

client.on("guildMemberRemove", m => {
  if (m.guild.id === "707544645168660490") {
    if (db.has("botlar")) {
      if (db.has(`kbotlar.${m.user.id}`)) {
        for (var i = 0; i < Object.keys(db.fetch("botlar")).length; i++) {
          var idd = Object.keys(db.fetch("botlar"))[i];
          if (db.fetch(`botlar.${idd}.sahipid`) === m.user.id) {
            db.delete(`botlar.${idd}`);
            db.delete(`kbotlar.${m.user.id}.${idd}`);
          }
        }
      }
    }
  }
});


// OYNUYOR

setInterval(() => {}, 10000);
//`Sistemimizde ${sayi.length} Bot Mevcut`

  
  

  
  

const request = require("node-superfetch");

var botid = "735559524542316615"; // BOT ID
var url = "https://darklists.tk/api/bot/" + botid;
var key = "yJV4dtoHyMlb8ZwsqoiSL9OsM2pPmr"; // YOUR API KEY

var { body } = request.get(`${url}?key=${key}`);

console.log(body);

const request1 = require("node-superfetch");

var botid = "735559524542316615"; // BOT ID
var url = "https://darklists.tk/api/bot/" + botid;
var key = "yJV4dtoHyMlb8ZwsqoiSL9OsM2pPmr"; // YOUR API KEY

var { body } = request1.get(`${url}?key=${key}`);

console.log(body);

const request2 = require("node-superfetch");

var id = "735559524542316615"; // BOT ID
var url = "https://darklists.tk/api/bot/" + id + "/status";
var key = "yJV4dtoHyMlb8ZwsqoiSL9OsM2pPmr"; // YOUR API KEY

var { body } = request2.get(`${url}?key=${key}`);

const request3 = require("node-superfetch");

var url = "https://darklists.tk/api/bots";
var key = "yJV4dtoHyMlb8ZwsqoiSL9OsM2pPmr"; // YOUR API KEY

var { body } = request3.get(`${url}?key=${key}`);

console.log(body);
  

    const request4 = require('node-superfetch');
    
    var userid = '725800411172307015' // USER ID
    var url = 'https://darklists.tk/api/user/' + userid
    var key = 'yJV4dtoHyMlb8ZwsqoiSL9OsM2pPmr' // YOUR API KEY

    var { body } = request.get(`${url}?key=${key}`);
    
    console.log(body);
  
const chalk = require("chalk");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir(`./src/komutlar/`, (err, files) => {
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) {
    console.log("Olamazz! Hiç komut dosyası bulamadım!");
  } else {
    if (err) {
      console.error("Hata! Bir komutun name veya aliases kısmı yok!");
    }
    console.log(`${jsfiles.length} komut yüklenecek.`);

    jsfiles.forEach(f => {
      let props = require(`./src/komutlar/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
      console.log(`Yüklenen komut: ${props.help.name}`);
    });
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith("!")) return;
  var command = message.content.split(" ")[0].slice("!".length);
  var args = message.content.split(" ").slice(1);
  var cmd = "";

  if (client.commands.has(command)) {
    var cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    var cmd = client.commands.get(client.aliases.get(command));
  }

  if (cmd) {
    if (cmd.conf.permLevel === 1) {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.send("Yetersiz yetki.");
        return;
      }
    }
    if (cmd.conf.permLevel === 2) {
      if (!message.member.hasPermission("KICK_MEMBERS")) {
        message.channel.send("Üyeleri atma yetkin yok.");
        return;
      }
    }
    if (cmd.conf.permLevel === 3) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.channel.send("Yetersiz yetki.");
        return;
      }
    }
    if (cmd.conf.permLevel === 4) {
      const x = await client.fetchApplication();
      var arr = [x.owner.id, "725800411172307015"];
      if (!arr.includes(message.author.id)) {
        message.channel.send("Yetersiz yetki.");
        return;
      }
    }
    if (cmd.conf.permLevel === 5) {
      const x = await client.fetchApplication();
      var arr = [x.owner.id, "725800411172307015"];
      if (!arr.includes(message.author.id)) {
        message.channel.send("Yetersiz yetki.");
        return;
      }
    }
    if (cmd.conf.enabled === false) {
      message.channel.send("Bu komut devre dışı.");
      return;
    }
    if (message.channel.type === "dm") {
      if (cmd.conf.guildOnly === true) {
        message.channel.send("Bu komutu özel mesajlarda kullanamazsın.");
        return;
      }
    }
    cmd.run(client, message, args);
  }
});

client.login("ODExODU2NjEzMzIwNjg3NjI2.YC4SZA.sBzEmdxjy9Lp_8lI8eD4e-iwc2M");

process.env = {};
process.env.TOKEN =
  "ODExODU2NjEzMzIwNjg3NjI2.YC4SZA.sBzEmdxjy9Lp_8lI8eD4e-iwc2M";
