const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("Cp ");

bot.on('ready', function () {
    console.log("Oui jvais bossé patron xD")
    bot.user.setActivity('Cp help').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});

bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if(message.content === prefix + "fun"){
        var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes amusantes !`)
      .setThumbnail(message.author.avatarURL)
      .addField("Bonjour","il y a plein de petit mot caché comme ça trouve les pour discuté")
      .addField("Cp stats", "Le bot vous envoie des informations sur votre profil !")
      .addField("Cp info", "Donne des indormations sur le bot et le serveur !")
	.addField("Cp cat", "Affiche des gifs de chat")
	  .addField("Cp narnia", "Affiche des gifs de narnia")
	  .addField("Cp wtf", "Affiche des gifs wtf")
	  .addField("Cp Yuki", "Affiche des images de (attention c'est dure) Yuki")
      .setFooter("Commande Fun - By Creep_1")
      .setTimestamp()
      message.channel.send(fun_embed);
    }
});

bot.login(token); //a garder en version heroku
