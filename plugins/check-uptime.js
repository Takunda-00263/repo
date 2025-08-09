const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const config = require('../config');
const moment = require('moment-timezone');

function keithtech() {
  const hour = moment().tz('Africa/Harare');

  if (hour >= 5 && hour < 12) {
    return 'Good Morning 🌅';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon 🏞️';
  } else if (hour >= 17 && hour < 21) {
    return 'Good Evening 🌌';
  } else {
    return 'Good Night 🌃';
  }
}
        
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
        const time = moment().tz('Africa/Harare').format('HH:mm:ss');
        const date = moment().tz('Africa/Harare').format('DD/MM/YYYY');
       const keithHrs = keithtech();

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
      body: `${keithHrs} | UPTIME: ${uptime}`, // format uptime to match
      mediaType: 2, // audio
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
