# discord-buttons-pages
Button pages for the discord-buttons package.

This package allows you to have multiple pages of buttons, and to be able to cycle through them using auto-generated buttons.  

To install the package, use the following command in the console/terminal/shell.

`npm i discord-buttons-pages`

Here is some example code for using the package:
      
      const Discord = require("discord.js");
      
      const disbut = require("discord-buttons");
      
      const disbutpages = require("discord-buttons-pages")
      
      const client = new Discord.Client();
      
      disbut(client);
      
      client.login(process.env.token)
      
      client.on("message", async message=>{
      if(message.author.bot || message.channel.type == "dm")return;
      
      if(message.content == "test"){
      
            var m = await message.channel.send("testing button pages wee")
            
            var pages = [];
            var page1 = [];
            var page2 = [];
            
            let button = new disbut.MessageButton()
            .setLabel("I like")
            .setStyle("blurple")
            .setEmoji("🍕")
            .setID("like_button")
      
            button1 = new disbut.MessageButton()
            .setLabel("am poo")
            .setStyle("blurple")
            .setEmoji("🍕")
            .setID("poo_button")
            const page1Row = new disbut.MessageActionRow()
            .addComponent(button)
            .addComponent(button1)
            page1.push(page1Row)
            
            button2 = new disbut.MessageButton()
            .setLabel("page 2")
            .setStyle("blurple")
            .setEmoji("🍕")
            .setID("page2_button")
            
            button3 = new disbut.MessageButton()
            .setLabel("wooooo")
            .setStyle("blurple")
            .setEmoji("🍕")
            .setID("wee_button")
            
            const page2Row = new disbut.MessageActionRow()
            .addComponent(button2)
            .addComponent(button3)
            page2.push(page2Row)
            
            m.edit("we", {components: page1})
            pages = [page1, page2]
      disbutpages.pages(client, m, pages, 100000, disbut, "red")
      }
      })
      
Of course, you can put more than one row of buttons per page.

**Functions**

There is one function in this package.

**disbutpages.pages(client, message, pages, timeout, disbut, style)**

**Client:**
Client is your discord client

**Message:**
This is the message that you sent and want to add buttons to.

**Pages:**
This is an array of arrays of disbut.MessageActionRow()

**Timeout:**
This is the amount of time after the message is sent (in milliseconds) to stop updating the pages.

**Disbut:**
This is the disbut instance that you have.

      const Discord = require("discord.js")

      const client = new Discord.Client()

      const disbut = require("discord-buttons")

      disbut(client)

You would then use the defined disbut.

**Style:**
This is the colour of the page moving buttons.
Can be one of red, green, blurple or grey
