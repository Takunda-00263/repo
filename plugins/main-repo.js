const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "repo",
    alias: ["sc", "script", "repository"],
    desc: "Fetch information about a GitHub repository.",
    react: "📂",
    category: "main",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Keith-tech57/KEITH-XMD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API with axios
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
        
        const repoData = response.data;

        // Format the repository information in new stylish format
        const formattedInfo = `\n> Hᴇʟʟᴏ 👋  *KEITH-XMD* User 

╔══════════════╗
║  𝙍𝙀𝙋𝙊 𝙄𝙉𝙁𝙊
╟╌╌╌╌╌╌╌╌╌╌╌╌╌╌╢
║ \`𝐑𝐄𝐏𝐎:\` 🖇️
║ https://github.com/Keith-tech57/KEITH-XMD
║ 
║ \`𝐒𝐄𝐒𝐒𝐈𝐎𝐍:\` ❄️
║ https://keithxmd-session.onrender.com
║
║ \`𝐒𝐓𝐀𝐑𝐒:\` 🌟 
║ ${repoData.stargazers_count}
║
║ \`𝐅𝐎𝐑𝐊𝐒:\` 🍽 
║ ${repoData.forks_count}
║
╚═══════════════╝

> DON'T FORGET TO STAR 🌟 AND FORK 🍽
`.trim();

        // Send an image with the formatted info as a caption
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/68qmj5.jpg` }, // Replace with your image URL
            caption: formattedInfo,
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

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("❌ Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});


