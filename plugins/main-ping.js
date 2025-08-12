// CODES BY KEITH

const config = require('../config');
const { cmd } = require('../command');
const moment = require('moment-timezone');

// Enhanced ping command with repo info
cmd({
    pattern: "ping",
    alias: ["speed", "pong"],
    desc: "Check bot's response time and status",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const start = Date.now();
        
        // Emoji collections
        const emojiSets = {
            reactions: ['⚡', '🚀', '💨', '🎯', '🌟', '💎', '🔥', '✨', '🌀', '🔹'],
            decorations: ['▰▰▰▰▰▰▰▰▰▰', '▰▱▱▱▱▱▱▱▱▱', '▰▰▱▱▱▱▱▱▱▱', '▰▰▰▱▱▱▱▱▱▱', '▰▰▰▰▱▱▱▱▱▱'],
            status: ['🟢 ONLINE', '🔵 ACTIVE', '🟣 RUNNING', '🟡 RESPONDING']
        };

        // Random selections
        const reactionEmoji = emojiSets.reactions[Math.floor(Math.random() * emojiSets.reactions.length)];
        const statusEmoji = emojiSets.status[Math.floor(Math.random() * emojiSets.status.length)];
        const loadingBar = emojiSets.decorations[Math.floor(Math.random() * emojiSets.decorations.length)];

        // Send reaction
        await conn.sendMessage(from, {
            react: { text: reactionEmoji, key: mek.key }
        });

        // Calculate response time
        const responseTime = (Date.now() - start) / 1000;
        
        // Get current time
        const time = moment().tz('Africa/Harare').format('HH:mm:ss');
        const date = moment().tz('Africa/Harare').format('DD/MM/YYYY');

        // Build response message
        const pingMessage = `
> ╔═══════════════╗
> ║    \`KEITH-XMD\` 
> ╚═══════════════╝
   \`\`\`${statusEmoji}\`\`\`
   
> *RESPONSE:* ${responseTime.toFixed(2)}ms

> © Pᴏᴡᴇʀᴇᴅ ʙʏ Kᴇɪᴛʜ 
`.trim();

        // Send ping response
        await conn.sendMessage(from, {
  text: pingMessage,
  contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 1000,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363417440480101@newsletter',
      newsletterName: 'KEITH TECH',
      serverMessageId: 143
    },
    externalAdReply: {
      title: 'KEITH_XMD', 
      body: '© Pᴏᴡᴇʀᴇᴅ Bʏ Kᴇɪᴛʜ',
      mediaType: 1,
      thumbnailUrl: config.ALIVE_IMAGE_URL,
      renderLargerThumbnail: true,
      sourceUrl: 'https://whatsapp.com/channel/0029VbANWX1DuMRi1VNPlB0y',
      showAdAttribution: true
    }
  }
}, { quoted: mek });

    } catch (e) {
        console.error("Ping command error:", e);
        reply(`❌ Error: ${e.message}`);
    }
});

// Ping2 with enhanced visuals
cmd({
    pattern: "ping2",
    desc: "Advanced ping with system info",
    category: "main",
    react: "🧠",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const startTime = Date.now();
        const loadingMsg = await conn.sendMessage(from, { 
            text: '🚀 *Measuring KEITH-XMD performance...*' 
        });

        const endTime = Date.now();
        const ping = endTime - startTime;

        // System emojis
        const systemEmojis = {
            cpu: '⚙️',
            ram: '🧠', 
            speed: '⚡',
            clock: '⏱️',
            repo: '📦'
        };

        const pingMessage = `
${systemEmojis.cpu} *SYSTEM PERFORMANCE*
        
${systemEmojis.clock} *Response Time:* ${ping}ms
${systemEmojis.speed} *Speed:* ${ping < 500 ? '⚡ Blazing Fast' : ping < 1000 ? '🚀 Fast' : '🐢 Slow'}

${systemEmojis.repo} *Repository:*
${config.REPO || "https://github.com/Keith-tech57/KEITH-XMD"}

💫 *Don't forget to star the repo!*
`.trim();

        await conn.sendMessage(from, { 
            text: pingMessage,
            edit: loadingMsg.key
        });

    } catch (e) {
        console.error("Ping2 error:", e);
        reply(`⚠️ Command failed: ${e.message}`);
    }
});

// Ping3 with typing indicator
cmd({
    pattern: "ping3",
    desc: "Ping with typing simulation",
    category: "utility",
    react: "⏱️",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Show typing indicator
        await conn.sendPresenceUpdate('composing', from);
        
        const start = Date.now();
        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const latency = Date.now() - start;
        await conn.sendPresenceUpdate('paused', from);

        const resultMessage = `
⏱️ *Real-time Performance Metrics*
        
🏓 *Pong!* 
📶 *Latency:* ${latency}ms
📊 *Status:* ${latency < 300 ? 'Excellent' : latency < 600 ? 'Good' : 'Fair'}

✨ *Keep KEITH-XMD alive by starring the repo!*
🔗 ${config.REPO || "https://github.com/Keith-tech57/KEITH-XMD"}
`.trim();

        await reply(resultMessage);

    } catch (error) {
        console.error('Ping3 error:', error);
        reply('❌ Failed to measure performance');
    }
});