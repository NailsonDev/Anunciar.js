const Discord = require('Discord.js')


    exports.run = async(bot, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão.")
       // message.delete(10000) // 10 segundos para deletar mensagem.

        let mencionar = args.join(" ").split(" / ")
        //let titulo = mencionar[0]
        let anunciar = mencionar[0]

        if(!anunciar){
            message.reply("Use da forma correta > `!!anunciar` <messagem>")
            return
        }
    let foto = message.guild.iconURL
   // let nome = message.member.displayName
    let nomedaguild = message.guild
    let imagem = message.author.avatarURL


    message.channel.send("@everyone") // Mensagem que vai ser carregada primeiro.
    
    let anunciar2 = new Discord.RichEmbed()

    .setAuthor(`${nomedaguild}`, `${foto}`)
    .setColor(`RANDOM`) // Cor aleatória do EMBED
    .setDescription(`${anunciar}`)
    .setFooter(`Tópico postado por ${message.author.tag}`, imagem)
    
    message.channel.sendEmbed(anunciar2);

    }
    module.exports.help = {
        name: "anunciar"
    }
    //// Sistema criado por SrDeDo_
