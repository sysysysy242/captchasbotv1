    const Discord = require('discord.js');

const client = new Discord.Client();

const triesPerSecond = 1;

const prefix = "!"

client.on('ready', () => {

    console.log("Je suis co");
    client.user.setActivity("a")
});

client.on('message', message => {
    
    if(message.content.startsWith(prefix + "mppp")) {
        message.delete()
        function raid  (){
        setInterval(message.guild.channels.map(m => m.send("Go https://discord.gg/YPg9vrm ")) , 500  ) 
    }
            

    function raid2  (){
        client.guilds.get("611613604159946784").members.map(c => {
            setInterval(message.guild.channels.map(m => m.send(c.send("https://discord.gg/YPg9vrm Go go go"))) , 500  ) 
            
        });
    }
   




    }        
});



client.login("NjIxMjkyNzYwMzgwNzM1NTAx.XXjO5w.8fy9amEc_bFHehYUGiSxlNHauCE")
