const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');



const commonContextInfo = (sender) => ({
    mentionedJid: [sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
        newsletterJid: '120363417440480101@newsletter',
        newsletterName: config.BOT_NAME,
        serverMessageId: 143
    }
});

cmd({
    pattern: "menu2",
    desc: "Show all bot commands in selection menu",
    category: "menu",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
   
        let totalCommands = Object.keys(commands).length;
        const caption = `╭──✬✪ *${config.BOT_NAME}* ✬✪──◈
┃❍╭────────⊷
┃❍│👑 *Oᴡɴᴇʀ:* ${config.OWNER_NAME}
┃❍│⚙️ *Pʀᴇғɪx:* [${config.PREFIX}]
┃❍│🔧 *Vᴇʀsɪᴏɴ:* 2.0.0 
┃❍│📜 *Tᴏᴛᴀʟ Cᴍᴅs:* ${totalCommands}
┃❍│⏱️ *Upᴛɪᴍᴇ:* ${runtime(process.uptime())}
┃❍│💻 *Developer:* *Kᴇɪᴛʜ*
┃❍╰─────────⊷
╰───────────────◈

*╭━━* ⟮ 𝐌𝐀𝐈𝐍-𝐌𝐄𝐍𝐔 ⟯ *━∙∙⊷*
*┃❍╭╴╴╴╴╴╴╴╴╴╴⊶*
*┃❍│* 1. ʙɪʙʟᴇᴍᴇɴᴜ
*┃❍│* 2. ǫᴜʀᴀɴᴍᴇɴᴜ
*┃❍│* 3. sᴇᴛᴛɪɴɢᴍᴇɴᴜ
*┃❍│* 4. ᴀɪᴍᴇɴᴜ
*┃❍│* 5. ᴀɴɪᴍᴇᴍᴇɴᴜ
*┃❍│* 6. ʀᴇᴀᴄᴛɪᴏɴsᴍᴇɴᴜ
*┃❍│* 7. ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
*┃❍│* 8. ғᴜɴᴍᴇɴᴜ
*┃❍│* 9. ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
*┃❍│* 10. ɢʀᴏᴜᴘᴍᴇɴᴜ
*┃❍│* 11. ᴍᴀɪɴᴍᴇɴᴜ
*┃❍│* 12. ᴏᴡɴᴇʀᴍᴇɴᴜ
*┃❍│* 13. ᴏᴛʜᴇʀᴍᴇɴᴜ
*┃❍│* 14. ʟᴏɢᴏᴍᴇɴᴜ
*┃❍│* 15. ᴛᴏᴏʟsᴍᴇɴᴜ
*┃❍╰╴╴╴╴╴╴╴╴╴╴╴⊶*
*╰───────────────⋅⋅⊷*
> ʀᴇᴘʟʏ ᴡɪᴛʜ ᴀ ɴᴜᴍʙᴇʀ ᴛᴏ ᴏᴘᴇɴ ᴀ ᴄᴀᴛᴇɢᴏʀʏ

> ${config.DESCRIPTION}`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption: caption,
            contextInfo: commonContextInfo(sender)
        }, { quoted: mek });

        const messageID = sentMsg.key.id;

        conn.ev.on("messages.upsert", async (msgData) => {
            const receivedMsg = msgData.messages[0];
            if (!receivedMsg.message) return;

            const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
            const senderID = receivedMsg.key.remoteJid;
            const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;

            if (isReplyToBot) {
                await conn.sendMessage(senderID, {
                    react: { text: '⬇️', key: receivedMsg.key }
                });
              
                switch (receivedText) {
                    case "2": // Quran Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ QURAN MENU ⬡────*
*├❖ • surah <number>*
*├❖ • ayat <surah:verse>*
*├❖ • tafsir <surah>*
*├❖ • listreciters*
*├❖ • play <reciter> <surah>*
*├❖ • searchquran <query>*
*├❖ • quranpdf <surah>*
*├❖ • prayer <city>*
*├❖ • setlocation <city>*
*├❖ • mylocation*
*├❖ • prayerfull <city>*
*├❖ • prayernext <city>*
*├❖ • hijridate*
*╰────────────────*
> ${config.DESCRIPTION}`, 
contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "1": // Prayer Time
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption:`\n\n📜 *Old Testament*:
1. Genesis
2. Exodus
3. Leviticus
4. Numbers
5. Deuteronomy
6. Joshua
7. Judges
8. Ruth
9. 1 Samuel
10. 2 Samuel
11. 1 Kings
12. 2 Kings
13. 1 Chronicles
14. 2 Chronicles
15. Ezra
16. Nehemiah
17. Esther
18. Job
19. Psalms
20. Proverbs
21. Ecclesiastes
22. Song of Solomon
23. Isaiah
24. Jeremiah
25. Lamentations
26. Ezekiel
27. Daniel
28. Hosea
29. Joel
30. Amos
31. Obadiah
32. Jonah
33. Micah
34. Nahum
35. Habakkuk
36. Zephaniah
37. Haggai
38. Zechariah
39. Malachi

📖 *New Testament*:
1. Matthew
2. Mark
3. Luke
4. John
5. Acts
6. Romans
7. 1 Corinthians
8. 2 Corinthians
9. Galatians
10. Ephesians
11. Philippians
12. Colossians
13. 1 Thessalonians
14. 2 Thessalonians
15. 1 Timothy
16. 2 Timothy
17. Titus
18. Philemon
19. Hebrews
20. James
21. 1 Peter
22. 2 Peter
23. 1 John
24. 2 John
25. 3 John
26. Jude
27. Revelation


> 📜BY  KEITH-XMD 📜`,

    contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "3": // Prayer Time
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ *SETTING MENU* ⬡────⭓
│
├───⬡ *BOT CONFIGURATION* ⬡───
│├❖ .prefix new prefix
│├❖ .botname new name
│├❖ .ownername new name
│├❖ .botimage reply to image 
│├❖ .mode public/private
│
├───⬡ *AUTO FEATURES* ⬡───
│├❖ .autoreact on/off
│├❖ .autoreply on/off
│├❖ .autosticker on/off
│├❖ .autotyping on/off
│├❖ .autostatusview on/off
│├❖ .autostatusreact on/off
│├❖ .autostatusreply on/off
│├❖ .autorecoding on/off
│├❖ .alwaysonline on/off
│
├───⬡ *GROUP SETTINGS* ⬡───
│├❖ .welcome on/off
│├❖ .goodbye on/off
│├❖ .antilink on/off
│├❖ .antilinkkick on/off
│├❖ .deletelink on/off
│├❖ .antibad on/off
│├❖ .antibot on/off
│
├───⬡ *MESSAGE SETTINGS* ⬡───
│├❖ .read-message on/off
│├❖ .mention-reply on/off
│├❖ .admin-action on/off
│
├───⬡ *CUSTOMIZATION* ⬡───
│├❖ .creact on/off
│├❖ .cemojis ❤️,🧡,💛
│
╰────⬡ *Use ${config.PREFIX}command on/off* ⬡────⭓
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "4": // AI Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭───❍ 🤖 \`A𝖨\` ❍─⋅⋅⋅◈*
*├❖ ${config.PREFIX}ᴀɪ*
*├❖ ${config.PREFIX}ɢᴘᴛ*
*├❖ ${config.PREFIX}ɢᴘᴛ2*
*├❖ ${config.PREFIX}ɢᴘᴛ3*
*├❖ ${config.PREFIX}ɢᴘᴛᴍɪɴɪ*
*├❖ ${config.PREFIX}ᴍᴇᴛᴀ*
*├❖ ${config.PREFIX}ʙʟᴀᴄᴋʙᴏx*
*├❖ ${config.PREFIX}ʟᴜᴍᴀ*
*├❖ ${config.PREFIX}ᴅᴊ*
*├❖ ${config.PREFIX}ɴᴏᴠᴀ*
*├❖ ${config.PREFIX}ᴋᴇɪᴛʜ*
*├❖ ${config.PREFIX}ɢᴘᴛ4*
*├❖ ${config.PREFIX}ʙɪɴɢ*
*├❖ ${config.PREFIX}ɪᴍᴀɢᴇ*
*├❖ ${config.PREFIX}ɪᴍᴀɢᴇ2*
*├❖ ${config.PREFIX}ᴄᴀᴘɪʟᴏᴛ*
*╰──────────────⋅⋅⋅◈*

> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "5": // Anime Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭──❍ 🗣️ \`A𝖭𝗂𝖬𝖤\` ❍─⋅⋅⋅◈*
*├❖ ${config.PREFIX}ғᴀᴄᴋ*
*├❖ ${config.PREFIX}ᴛʀᴜᴛʜ*
*├❖ ${config.PREFIX}ᴅᴀʀᴇ*
*├❖ ${config.PREFIX}ᴅᴏɢ*
*├❖ ${config.PREFIX}ᴀᴡᴏᴏ*
*├❖ ${config.PREFIX}ɢᴀʀʟ*
*├❖ ${config.PREFIX}ᴡᴀɪғᴜ*
*├❖ ${config.PREFIX}ɴᴇᴋᴏ*
*├❖ ${config.PREFIX}ᴍᴇɢɴᴜᴍɪɴ*
*├❖ ${config.PREFIX}ɴᴇᴋᴏ*
*├❖ ${config.PREFIX}ᴍᴀɪᴅ*
*├❖ ${config.PREFIX}ʟᴏʟɪ*
*├❖ ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ*
*├❖ ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ1*
*├❖ ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ2*
*├❖ ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ3*
*├❖ ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ4*
*├❖ ${config.PREFIX}ᴀɴɪᴍᴇɴᴇᴡs*
*├❖ ${config.PREFIX}ғᴏx*
*├❖ ${config.PREFIX}ɴᴀʀᴜᴛᴏ*
*╰─────────────⋅⋅⋅◈*

> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "6": // Reactions
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭─❍ 💀 \`R𝖤𝖠𝖢𝖳𝖨𝖮𝖭𝖲\` ❍─⋅⋅⋅◈*
*├❖ ${config.PREFIX}ʙᴜʟʟʏ*
*├❖ ${config.PREFIX}ᴄᴜᴅᴅʟᴇ*
*├❖ ${config.PREFIX}ᴄʀʏ*
*├❖ ${config.PREFIX}ʜᴜɢ*
*├❖ ${config.PREFIX}ᴀᴡᴏᴏ*
*├❖ ${config.PREFIX}ᴋɪss*
*├❖ ${config.PREFIX}ʟɪᴄᴋ*
*├❖ ${config.PREFIX}pᴀᴛ*
*├❖ ${config.PREFIX}sᴍᴜʜ*
*├❖ ${config.PREFIX}ʙᴏɴᴋ*
*├❖ ${config.PREFIX}ʏᴇᴇᴛ*
*├❖ ${config.PREFIX}ʙʟᴜsʜ*
*├❖ ${config.PREFIX}sᴍɪʟᴇ*
*├❖ ${config.PREFIX}ᴡᴀᴠᴇ*
*├❖ ${config.PREFIX}ʜɪɢʜғɪᴠᴇ*
*├❖ ${config.PREFIX}ʜᴀɴᴅʜᴏʟᴅ*
*├❖ ${config.PREFIX}ɴᴏᴍ*
*├❖ ${config.PREFIX}ʙɪᴛᴇ*
*├❖ ${config.PREFIX}ɢʟᴏᴍᴘ*
*├❖ ${config.PREFIX}sʟᴀᴘ*
*├❖ ${config.PREFIX}ᴋɪʟʟ*
*├❖ ${config.PREFIX}ʜᴀᴘᴘʏ*
*├❖ ${config.PREFIX}ᴡɪɴᴋ*
*├❖ ${config.PREFIX}ᴘᴏᴋᴇ*
*├❖ ${config.PREFIX}ᴅᴀɴᴄᴇ*
*├❖ ${config.PREFIX}ᴄʀɪɴɢ*
*╰──────────────⋅⋅⋅◈*

> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "7": // Convert Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ CONVERT MENU ⬡────*
*├❖ • sticker <image>*
*├❖ • sticker2 <video>*
*├❖ • tomp3 <video>*
*├❖ • tomp4 <audio>*
*├❖ • tts <text>*
*├❖ • trt <text> <lang>*
*├❖ • base64 <text>*
*├❖ • unbase64 <text>*
*├❖ • binary <text>*
*├❖ • dbinary <binary>*
*├❖ • tinyurl <url>*
*├❖ • emojimix <emoji+emoji>*
*├❖ • fancy <text>*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "8": // Fun Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭──❍ 😀 \`F𝖴𝖭\` ❍─⋅⋅⋅◈*
*├❖ ${config.PREFIX}sʜᴀᴘᴀʀ*
*├❖ ${config.PREFIX}ʀᴀᴛᴇ*
*├❖ ${config.PREFIX}ɪɴsᴜʟᴛ*
*├❖ ${config.PREFIX}ʜᴀᴋ*
*├❖ ${config.PREFIX}sʜɪᴘ*
*├❖ ${config.PREFIX}ᴄʜᴀʀᴀᴄᴛᴇʀ*
*├❖ ${config.PREFIX}ᴘɪᴄᴋᴜᴘ*
*├❖ ${config.PREFIX}ᴊᴏᴋᴇ*
*├❖ ${config.PREFIX}ʜʀᴛ*
*├❖ ${config.PREFIX}ʜᴘʏ*
*├❖ ${config.PREFIX}sʏᴅ*
*├❖ ${config.PREFIX}ᴀɴɢᴇʀ*
*├❖ ${config.PREFIX}sʜʏ*
*├❖ ${config.PREFIX}ᴋɪss*
*├❖ ${config.PREFIX}ᴍᴏɴ*
*├❖ ${config.PREFIX}ᴄᴜɴғᴜsᴇᴅ*
*├❖ ${config.PREFIX}ʜᴀɴᴅ*
*├❖ ${config.PREFIX}ɴɪᴋᴀʟ*
*├❖ ${config.PREFIX}ʜᴏʟᴅ*
*╰───────────────⋅⋅⋅◈*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "9": // Download Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭──❍ 📥 \`D𝖮𝖶𝖭𝖫𝖮𝖠𝖣\` ❍─∙∙◈*
*├❖ ${config.PREFIX}fᴀᴄᴇʙᴏᴏᴋ*
*├❖ ${config.PREFIX}mᴇᴅɪᴀꜰɪʀᴇ*
*├❖ ${config.PREFIX}tɪᴋᴛᴏᴋ*
*├❖ ${config.PREFIX}sᴇᴛᴛɪɴɢs*
*├❖ ${config.PREFIX}tᴡɪᴛᴛᴇʀ*
*├❖ ${config.PREFIX}iɴꜱᴛᴀ*
*├❖ ${config.PREFIX}aᴘᴋ*
*├❖ ${config.PREFIX}iᴍɢ*
*├❖ ${config.PREFIX}tᴛ2*
*├❖ ${config.PREFIX}pɪɴꜱ*
*├❖ ${config.PREFIX}aᴘᴋ2*
*├❖ ${config.PREFIX}fʙ2*
*├❖ ${config.PREFIX}pɪɴᴛᴇʀᴇꜱᴛ*
*├❖ ${config.PREFIX}sᴘᴏᴛɪꜰʏ*
*├❖ ${config.PREFIX}pʟᴀʏ*
*├❖ ${config.PREFIX}pʟᴀʏ2*
*├❖ ${config.PREFIX}aᴜᴅɪᴏ*
*├❖ ${config.PREFIX}vɪᴅᴇᴏ*
*├❖ ${config.PREFIX}vɪᴅᴇᴏ2*
*├❖ ${config.PREFIX}yᴛᴍᴘ3*
*├❖ ${config.PREFIX}yᴛᴍᴘ4*
*├❖ ${config.PREFIX}sᴏɴɢ*
*├❖ ${config.PREFIX}dᴀʀᴀᴍᴀ*
*├❖ ${config.PREFIX}gᴅʀɪᴠᴇ*
*├❖ ${config.PREFIX}sꜱᴡᴇʙ*
*├ ${config.PREFIX}tɪᴋꜱ*
*╰─────────────∙∙◈*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "10": // Group Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭──❍ 👥 \`G𝖱𝖮𝖴𝖯\` ❍─⋅⋅◈*
*├❖ ${config.PREFIX}gʀᴏᴜᴘʟɪɴᴋ*
*├❖ ${config.PREFIX}kɪᴄᴋᴀʟʟ*
*├❖ ${config.PREFIX}ᴋɪᴄᴋᴀʟʟ2*
*├❖ ${config.PREFIX}ᴋɪᴄᴋᴀʟʟ3*
*├❖ ${config.PREFIX}ᴀᴅᴅ*
*├❖ ${config.PREFIX}ʀᴇᴍᴏᴠᴇ*
*├❖ ${config.PREFIX}ᴋɪᴄᴋ*
*├❖ ${config.PREFIX}ᴘʀᴏᴍᴏᴛᴇ*
*├❖ ${config.PREFIX}ᴅᴇᴍᴏᴛᴇ*
*├❖ ${config.PREFIX}ᴅɪsᴍɪss*
*├❖ ${config.PREFIX}ʀᴇᴠᴏᴋᴇ*
*├❖ ${config.PREFIX}sᴇᴛɢᴏᴏᴅʙʏᴇ*
*├❖ ${config.PREFIX}sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*├❖ ${config.PREFIX}ᴅᴇʟᴇᴛᴇ*
*├❖ ${config.PREFIX}ɢᴇᴛᴘɪᴄ*
*├❖ ${config.PREFIX}ɢɪɴғᴏ*
*├❖ ${config.PREFIX}ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
*├❖ ${config.PREFIX}ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
*├❖ ${config.PREFIX}ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ,24ʜ*
*├❖ ${config.PREFIX}ᴀʟʟʀᴇǫ*
*├❖ ${config.PREFIX}ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*├❖ ${config.PREFIX}ᴜᴘᴅᴀᴛᴇᴅᴇsᴄ*
*├❖ ${config.PREFIX}ᴊᴏɪɴʀᴇǫᴜᴇsᴛ*
*├❖ ${config.PREFIX}sᴇɴᴅᴅᴍ*
*├❖ ${config.PREFIX}ɴɪᴋᴀʟ*
*├❖ ${config.PREFIX}ᴍᴜᴛᴇ*
*├❖ ${config.PREFIX}ᴜɴᴍᴜᴛᴇ*
*├❖ ${config.PREFIX}ʟᴏᴄᴋɢᴄ*
*├❖ ${config.PREFIX}ᴜɴʟᴏᴄᴋɢᴄ*
*├❖ ${config.PREFIX}ɪɴᴠɪᴛᴇ*
*├❖ ${config.PREFIX}ᴛᴀɢ*
*├❖ ${config.PREFIX}ʜɪᴅᴇᴛɢ*
*├❖ ${config.PREFIX}ᴛᴀɢᴀʟʟ*
*├❖ ${config.PREFIX}ᴛᴀɢᴀᴅᴍɪɴs*
*╰──────────────⋅⋅◈*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "11": // Main Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭──❍ 📜 \`M𝖠𝖨𝖭\` ❍─⋅⋅⋅◈*
*├❖ ${config.PREFIX}ʙɪʙʟᴇ
*├❖ ${config.PREFIX}ᴘɪɴɢ*
*├❖ ${config.PREFIX}ᴘɪɴɢ2*
*├❖ ${config.PREFIX}sᴘᴇᴇᴅ*
*├❖ ${config.PREFIX}ʟɪᴠᴇ*
*├❖ ${config.PREFIX}ᴀʟɪᴠᴇ*
*├❖ ${config.PREFIX}ʀᴜɴᴛɪᴍᴇ*
*├❖ ${config.PREFIX}ᴜᴘᴛɪᴍᴇ*
*├❖ ${config.PREFIX}ʀᴇᴘᴏ*
*├❖ ${config.PREFIX}ᴏᴡɴᴇʀ*
*├❖ ${config.PREFIX}ʀᴇsᴛᴀʀᴛ*
*├❖ ${config.PREFIX}sᴇᴛᴛɪɴɢs*
*╰──────────────⋅⋅⋅◈*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "12": // Owner Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭──❍ 👑 \`O𝖶𝖭𝖤𝖱\` ❍─⋅⋅⋅◈*
*├❖ ${config.PREFIX}ᴏᴡɴᴇʀ*
*├❖ ${config.PREFIX}ᴍᴇɴᴜ*
*├❖ ${config.PREFIX}ᴍᴇɴᴜ2*
*├❖ ${config.PREFIX}ᴠᴠ*
*├❖ ${config.PREFIX}ʟɪsᴛᴄᴍᴅ*
*├❖ ${config.PREFIX}ᴀʟʟᴍᴇɴᴜ*
*├❖ ${config.PREFIX}ʀᴇᴘᴏ*
*├❖ ${config.PREFIX}ʙʟᴏᴄᴋ*
*├❖ ${config.PREFIX}ᴜɴʙʟᴏᴄᴋ*
*├❖ ${config.PREFIX}ғᴜʟʟᴘᴘ*
*├❖ ${config.PREFIX}sᴇᴛᴘᴘ*
*├❖ ${config.PREFIX}ʀᴇsᴛᴀʀᴛ*
*├❖ ${config.PREFIX}sʜᴜᴛᴅᴏᴡɴ*
*├❖ ${config.PREFIX}ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*├❖ ${config.PREFIX}ᴀʟɪᴠᴇ*
*├❖ ${config.PREFIX}ᴘɪɴɢ*
*├❖ ${config.PREFIX}ɢᴊɪᴅ*
*├❖ ${config.PREFIX}ᴊɪᴅ*
*╰──────────────⋅⋅⋅◈*

> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "13": // Other Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭──❍ 📡 \`O𝖳𝖧𝖤𝖱\` ❍─⋅⋅⋅◈*
*├❖ ${config.PREFIX}ᴛɪᴍᴇɴᴏᴡ*
*├❖ ${config.PREFIX}ᴅᴀᴛᴇ*
*├❖ ${config.PREFIX}ᴄᴏᴜɴᴛ*
*├❖ ${config.PREFIX}ᴄᴀʟᴄᴜʟᴀᴛᴇ*
*├❖ ${config.PREFIX}ᴄᴏᴜɴᴛx*
*├❖ ${config.PREFIX}ғʟɪᴘx*
*├❖ ${config.PREFIX}ᴄᴏɪɴғʟɪᴘ*
*├❖ ${config.PREFIX}ʀᴄᴏʟᴏʀ*
*├❖ ${config.PREFIX}ʀᴏʟʟ*
*├❖ ${config.PREFIX}ғᴀᴄᴛ*
*├❖ ${config.PREFIX}ᴄᴘᴘ*
*├❖ ${config.PREFIX}ʀᴡ*
*├❖ ${config.PREFIX}ᴘᴀɪʀ*
*├❖ ${config.PREFIX}ᴘᴀɪʀ2*
*├❖ ${config.PREFIX}ᴘᴀɪʀ3*
*├❖ ${config.PREFIX}ғᴀɴᴄʏ*
*├❖ ${config.PREFIX}ʟᴏɢᴏ*
*├❖ ${config.PREFIX}ᴅᴇғɪɴᴇ*
*├❖ ${config.PREFIX}ɴᴇᴡs*
*├❖ ${config.PREFIX}ᴍᴏᴠɪᴇ*
*├❖ ${config.PREFIX}ᴡᴇᴀᴛʜᴇʀ*
*├❖ ${config.PREFIX}sʀᴇᴘᴏ*
*├❖ ${config.PREFIX}ɪɴsᴜʟᴛ*
*├❖ ${config.PREFIX}sᴀᴠᴇ*
*├❖ ${config.PREFIX}ᴡɪᴋɪᴘᴇᴅɪᴀ*
*├❖ ${config.PREFIX}ɢᴘᴀss*
*├❖ ${config.PREFIX}ɢɪᴛʜᴜʙsᴛᴀʟᴋ*
*├❖ ${config.PREFIX}ʏᴛs*
*├❖ ${config.PREFIX}ʏᴛᴠ*
*╰───────────⋅⋅⋅◈*

> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "14": // Logo Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭──❍ 🖼️ \`L𝖮𝖦𝖮\` ❍─⋅⋅⋅◈*
*├❖ ${config.PREFIX}ɴᴇᴏɴʟɪɢʜ*
*├❖ ${config.PREFIX}ʙʟᴀᴄᴋᴘɪɴᴋ*
*├❖ ${config.PREFIX}ᴅʀᴀɢᴏɴʙᴀʟʟ*
*├❖ ${config.PREFIX}3ᴅᴄᴏᴍɪᴄ*
*├❖ ${config.PREFIX}ᴀᴍᴇʀɪᴄᴀ*
*├❖ ${config.PREFIX}ɴᴀʀᴜᴛᴏ*
*├❖ ${config.PREFIX}sᴀᴅɢɪʀʟ*
*├❖ ${config.PREFIX}ᴄʟᴏᴜᴅs*
*├❖ ${config.PREFIX}ғᴜᴛᴜʀɪsᴛɪᴄ*
*├❖ ${config.PREFIX}3ᴅᴘᴀᴘᴇʀ*
*├❖ ${config.PREFIX}ᴇʀᴀsᴇʀ*
*├❖ ${config.PREFIX}sᴜɴsᴇᴛ*
*├❖ ${config.PREFIX}ʟᴇᴀғ*
*├❖ ${config.PREFIX}ɢᴀʟᴀxʏ*
*├❖ ${config.PREFIX}sᴀɴs*
*├❖ ${config.PREFIX}ʙᴏᴏᴍ*
*├❖ ${config.PREFIX}ʜᴀᴄᴋᴇʀ*
*├❖ ${config.PREFIX}ᴅᴇᴠɪʟᴡɪɴɢs*
*├❖ ${config.PREFIX}ɴɪɢᴇʀɪᴀ*
*├❖ ${config.PREFIX}ʙᴜʟʙ*
*├❖ ${config.PREFIX}ᴀɴɢᴇʟᴡɪɴɢs*
*├❖ ${config.PREFIX}ᴢᴏᴅɪᴀᴄ*
*├❖ ${config.PREFIX}ʟᴜxᴜʀʏ*
*├❖ ${config.PREFIX}ᴘᴀɪɴᴛ*
*├❖ ${config.PREFIX}ғʀᴏᴢᴇɴ*
*├❖ ${config.PREFIX}ᴄᴀsᴛʟᴇ*
*├❖ ${config.PREFIX}ᴛᴀᴛᴏᴏ*
*├❖ ${config.PREFIX}ᴠᴀʟᴏʀᴀɴᴛ*
*├❖ ${config.PREFIX}ʙᴇᴀʀ*
*├❖ ${config.PREFIX}ᴛʏᴘᴏɢʀᴀᴘʜʏ*
*├❖ ${config.PREFIX}ʙɪʀᴛʜᴅᴀʏ*
*╰────────────────⋅⋅⋅◈*

> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "15": // Tools Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ TOOLS MENU ⬡────*
*├▢ • setmyname <name>*
*├▢ • setpp <image>*
*├▢ • setonline <on/off>*
*├▢ • setppall <image>*
*├▢ • getbio @tag*
*├▢ • getpp @tag*
*├▢ • getprivacy*
*├▢ • groupsprivacy*
*├▢ • updatebio <text>*
*├▢ • blocklist*
*├▢ • fullpp*
*├▢ • tea*
*├▢ • chai*
*├▢ • remini <image>*
*├▢ • removebg <image>*
*├▢ • urltoimg <url>*
*├▢ • .reception*
*├▢ • .captain*
*├▢ • .repost*
*├▢ • .story*
*├▢ • .status*
*├▢ • .vcf*
*├▢ • .imgjoke*
*├▢ • .invert <image>*
*├▢ • .grey <image>*
*├▢ • .blur <image>*
*├▢ • .ad <text>*
*├▢ • .nokia <text>*
*├▢ • .wanted <image>*
*├▢ • .jail <image>*
*├▢ • .tiny <url>*
*├▢ • .chr <link> <text/emoji>*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    default:
                        await conn.sendMessage(senderID, {
                            text: "❌ Invalid selection. Please reply with a number between 1-15.",
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                }
            }
        });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});
