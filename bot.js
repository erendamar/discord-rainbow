const Discord = require("discord.js") 
const ayarlar = require("./ayarlar.json")
const aish = new Discord.Client()
aish.on('ready', async => {
console.log("▪ Bot Kullanılmaya hazır hale getirildi! → "  + aish.user.tag + "\n \n" + "▪ Bulundugu sunucu sayisi → "  + aish.guilds.size + "\n \n" + "▪ Toplam Kullanici → " + aish.users.size + "\n \n" + "▪ Botunuzda bir sorun oluştuysa, dosyanızdaki sorunlar.txt metinini okuyabilirsiniz.. \n \n \ » designed and developed by ern#2088 «")
});
aish.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === ayarlar.prefix + ayarlar.rainbowbaslamakomutu) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(ayarlar.bozukbolum.rolbulunamadi).catch(err=> message.channel.send("Cevap alınamadı"))
        if(!message.guild.member(aish.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(ayarlar.bozukbolum.yetkiyok).catch(err=> message.channel.send("Cevap alınamadı"))
        var colors = ayarlar.rainbowrolleri
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, ayarlar.rainbowgecikme); 
            message.channel.send(ayarlar.bozukbolum.basarili).catch(err=> message.channel.send("Cevap alınamadı"))

    }
    if(command === ayarlar.prefix + ayarlar.rainbowdurdur) {
		        if(!message.guild.member(aish.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(ayarlar.bozukbolum.yetkiyok).catch(err=> message.channel.send("Cevap alınamadı"))
            setTimeout(function () {
           process.exit()
            }, 1000);
           
                       message.channel.send(ayarlar.bozukbolum.rainbowdurdurmesaj).catch(err=> message.channel.send("Cevap alınamadı"))
                       }
});
aish.login(ayarlar.token).catch(err=> console.log("Botunun tokenini doğru girdiğinden emin ol lütfen"))