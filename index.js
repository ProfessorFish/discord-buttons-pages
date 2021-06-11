const Discord = require("discord.js");
const disbut = require("discord-buttons");
async function buttonStuff(client, message, pages, timeout){
    if(pages.length >= 5){
        console.error("Amount of pages must be 4 or below!");
        return;
    }
    var currentPage = 0;
    let button = new MessageButton()
    .setLabel("")
    .setEmoji("⏪")
    .setID("back_button")
    let button2 = new MessageButton()
    .setLabel("I like")
    .setEmoji("⏩")
    .setID("forward_button")
    const buttonRow = new disbut.MessageActionRow
    message.edit({components: pages[0]});
    const filter = (button) => button.clicker.user.id === message.author.id;
    const collector = m.createButtonCollector(filter, { time: timeout });
    collector.on("collect", async b =>{
        if(b.id == "back_button"){
            if(currentPage - 1 > 0){
                currentPage = pages.length - 1
            } else{
                currentPage -= 1;
            }
        } else if(b.id == "forward_button"){
            if(currentPage + 1 == pages.length){
                currentPage = 0;
            } else{
                currentPage += 1;
            }
        }
        if(b.id == "back_button" || b.id == "forward_button"){
            b.defer(true);
            m.edit({components: pages[currentPage]});
        }
    })
}
