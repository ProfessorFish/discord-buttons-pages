# discord-buttons-pages
pages for the discord-buttons package

To install the package, use the following command in the console/terminal/shell.

`npm i discord-buttons-pages`

Here is some example code for using the package:

`
      var pages = [];
      
      var page1 = [];
      
      var page2 = [];
      
      let button = new disbut.MessageButton()
    .setLabel("I like")
    .setStyle("blurple")
    .setEmoji("🍕")
    .setID("like_button")
    button1 = new disbut.MessageButton()
    .setLabel("I dislike")
    .setStyle("blurple")
    .setEmoji("🍕")
    .setID("dislike_button")
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
    .setID("woo_button")
    const page2Row = new disbut.MessageActionRow()
    .addComponent(button2)
    .addComponent(button3)
    page2.push(page2Row)
    m.edit("we", {components: page1})
    pages = [page1Row, page2Row]
      disbutpages.pages(client, m, pages, 10000, disbut, "red")`
