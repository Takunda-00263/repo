const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');

     
cmd({
    pattern: "uptime",
    alias: ["runtime", "up", "run"],
    desc: "Show bot uptime",
    category: "main",
    react: "⏱️",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const uptime = runtime(process.uptime());

        await conn.sendMessage(from, {
  audio: { url: 'https://files.catbox.moe/p78tc3.mp3' }, // your audio URL
  mimetype: 'audio/mpeg',
  ptt: true,
  contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363417440480101@newsletter',
                    newsletterName: "KEITH TECH ",
                    serverMessageId: 143
                },
    externalAdReply: {
      title: 'BOT - UPTIME',
      body: `UPTIME: ${uptime}`, // format uptime to match
      mediaType: 1, // audio
      thumbnailUrl: config.MENU_IMAGE_URL, // image shown in the preview
      renderLargerThumbnail: true,
      sourceUrl: 'https://whatsapp.com/channel/0029VbANWX1DuMRi1VNPIB0y',
      showAdAttribution: true
    }
  }
}, { quoted: mek });

    } catch (e) {
        console.error("Uptime Error:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
