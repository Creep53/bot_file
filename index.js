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

bot.on('message', async message => { 
    
        if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
        if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if(message.content.startsWith(prefix + "cat")){
        var cat = [
			"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
			"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
			"https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif"
		];
    var gif = cat[Math.floor(Math.random() * cat.length)]; 
	
	var cat_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle(':cat: Chat:')
	 .setImage(gif)
	.setFooter('CHAT CHAT CHAT CHAT')
	message.channel.send(cat_embed);
	}
	
	if(message.content.startsWith(prefix + "Yuki")){
        var Yuki = [
			"https://cdn.discordapp.com/attachments/417516189619585024/507993319767408660/Snapchat-66221107.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993515943264286/Snapchat-1883413935.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993646373535746/Snapchat-410157663.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993757182853130/Snapchat-1423020034.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507994773336883200/IMG_20180107_122344.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507995280990273549/IMG_20180416_194429.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507996560240541698/IMG_20180703_101443.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507996898221883404/IMG_20180714_192659_003.jpg"
		

		];
    var gif = Yuki[Math.floor(Math.random() * Yuki.length)]; 
	
	var Yuki_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle(':cat: Chat:')
	 .setImage(gif)
	.setFooter('CHAT CHAT CHAT CHAT')
	message.channel.send(Yuki_embed);
	}
	
	if(message.content.startsWith(prefix + "narnia")){
        var narnia = [
			"https://media.giphy.com/media/ytL3y83qPtic8/giphy.gif",
			"https://media.giphy.com/media/4PuHxplO8XuyA/giphy.gif",
			"https://media.giphy.com/media/mEuI7NjX90BNu/giphy.gif"
			
				];
    var gif = narnia[Math.floor(Math.random() * narnia.length)]; 
	
	var narnia_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('Narnia')
	 .setImage(gif)
	.setFooter("Narnia Narnia Narnia Narnia")
	message.channel.send(narnia_embed);
	}
		if(message.content.startsWith(prefix + "wtf")){
        var aleatoire = [
			"https://media.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.gif",
			"https://media.giphy.com/media/13BwjdpxACoBPO/giphy.gif",
			"https://media.giphy.com/media/ToMjGpPbMMFCWHrqk6Y/giphy.gif",
			"https://media.giphy.com/media/AIgTmKOesNSWA/giphy.gif",
			"https://media.giphy.com/media/QxZQ7dSV4j6GQ/giphy.gif",
			"https://media.giphy.com/media/IYqe9gVpujtWo/giphy.gif",
			"https://media.giphy.com/media/13nhYQqKEPQAyA/giphy.gif",
			"https://media.giphy.com/media/o8GQT5Ipi4spy/giphy.gif"
	
				];
    var gif = aleatoire[Math.floor(Math.random() * aleatoire.length)]; 
	
	var aleatoire_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('WTF')
	 .setImage(gif)
	.setFooter("WTF WTF WTF WTF WTF")
	message.channel.send(aleatoire_embed);
	}    
    if (msg.content === prefix + "help"){
             var aide_embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(`:robot: Voici mes catégories d'aide !`)
            .setDescription(`Voici mes commandes disponible :`)
            .addField(":tools: Modération", "Fais `Cp mod` pour voir mes commandes de modération !")
            .addField(":tada: Fun", "Fais `Cp fun` pour voir mes commandes d'animation !")
            .setFooter("Menu d'aide - By Creep_1")
            .setTimestamp()
            message.channel.send(aide_embed);        
            console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(token); //a garder en version heroku
