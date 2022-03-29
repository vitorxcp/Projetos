client.on("guildMemberAdd", member => {

try{ // se der algum erro estamos seguros...

    //bem vindo, e... acho que podemos chamar disto.
    if("866521211550433301" === ""+member.guild.id+""){ //verifica se entrou em tal server

    chatId = "CHAT_ID_WELCOME" //ou, na moral, coloca o ID do chat onde será anunciada ai ;3

    const { MessageEmbed } = require("discord.js") //precisamos disto para funcionar né...
     
    var Embed = new MessageEmbed() //apenas uma simples embed feia ;3

    .addColor("16743168") //a mais ultilizada pelo Biel.
    .addImage("https://cdn.discordapp.com/attachments/916149621024239636/935588057770496010/Modelo_4.png")
    .addThumbnail("https://i.imgur.com/peO05Z1.png")
    .addTitle("👋 Seja bem vindo a Games Club")
    .addDescription("> A **Games Club** é uma comunidade brasileira de jogos que busca trazer uma experiência própria e exclusiva para cada participante.")

    let componentes = new MessageActionRow() //add button e satisfatorio.

	.addComponents(

        new MessageButton()
        .setLabel('WebSite')
        .setStyle('LINK')
        .setURL("https://www.gamescluboficial.com.br/")
        .setEmoji("958175361802317844"),

        new MessageButton()
        .setLabel('Youtube')
        .setStyle('LINK')
        .setURL("https://links.gamescluboficial.com.br/youtube")
        .setEmoji("958175881531105350"),

        new MessageButton()
        .setLabel("Instagram")
        .setStyle('LINK')
        .setURL("https://links.gamescluboficial.com.br/instagram")
        .setEmoji("958176801300049970"),

        new MessageButton()
        .setLabel("Apoie a GamesClub")
        .setStyle('LINK')
        .setURL("https://apoia.se/gamescluboficial")
        .setEmoji("934599545722134568")

      );

    client.channels.cache.get(chatId).send({content:"<@"+member+">", embeds: [Embed] , components: [componentes], allowedMentions: { repliedUser: true }}) //a, apenas envia a mensagem...

    }else{

        return console.info("Apenas um user entrou em outro server que eu estou e eu não quero anunciar (apenas isto num liga naum).") //caso o usuario não entrar na gamesclub ;3 (ant erro confia)

    }
}catch(err){
    return console.error("[Erro] - "+err) // nunca podemos se garantir com apenas um "if" né!?
}

}) 