const config = require('../config');
const moment = require('moment-timezone');
const { cmd, commands } = require('../command');
const axios = require('axios');

cmd({
  pattern: "menu5",
  alias: ["allmenu", "all"],
  use: '.menu',
  desc: "Show all bot commands",
  category: "menu",
  react: "🐍",
  filename: __filename
},
async (conn, mek, m, { from, reply }) => {
  try {
    const totalCommands = commands.length;
    const date = moment().tz("Africa/Harare").format("dddd, DD MMMM YYYY");

    const uptime = () => {
      let sec = process.uptime();
      let h = Math.floor(sec / 3600);
      let m = Math.floor((sec % 3600) / 60);
      let s = Math.floor(sec % 60);
      return `${h}h ${m}m ${s}s`;
    };

    // Menu principal
    let menuText = `
*╭┄┄✪ ${botName} ✪┄┄⊷*
*┃❂┬┄✯✯✯✯✯✯✯✯*
*┃❂┊ Owner:* ${config.OWNER_NAME}
*┃❂┊ Baileys:* Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ
*┃❂┊ Date:* ${currentDate}
*┃❂┊ Type:* Nᴏᴅᴇᴊs
*┃❂┊ Runtime:* ${runtime(process.uptime())}
*┃❂┊ Prefix:* ${config.PREFIX}
*┃❂┊ Mode:* ${config.MODE}
*┃❂┊ Ram:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*┃❂┊ Status:* *Oɴʟɪɴᴇ*
*┃❂┊ Version:* 2.0.0
*┃❂┴┄✯✯✯✯✯✯✯✯*
*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊷*
`;


    // Catégories et commandes
    let category = {};
    for (let cmd of commands) {
      if (!cmd.category) continue;
      if (!category[cmd.category]) category[cmd.category] = [];
      category[cmd.category].push(cmd);
    }

    const keys = Object.keys(category).sort();
    for (let k of keys) {
      menuText += `\n\n*╭┈┈┄❂ ${k.toUpperCase()} ❂┄┄┄◈*`;
      const cmds = category[k].filter(c => c.pattern).sort((a, b) => a.pattern.localeCompare(b.pattern));
      cmds.forEach((cmd) => {
        const usage = cmd.pattern.split('|')[0];
      menuText += `\n*┋⬡ ${config.PREFIX}${usage}*    `});
      menuText += `\n*╰┄┄┄┄┄┈┈┈┈┄┄┄◈*`;
    }
    // Affecter à la variable caption
    const selectedStyle = menuText;

    // Envoyer l'image avec le menu
    await conn.sendMessage(from, {
      image: { url: config.MENU_IMAGE_URL },
      caption: selectedStyle,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363417440480101@newsletter',
          newsletterName: 'KEITH-XMD',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

  } catch (e) {
    console.error(e);
    reply(`❌ Error: ${e.message}`);
  }
});
