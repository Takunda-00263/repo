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
        let botName = "𝐊𝐄𝐈𝐓𝐇-𝐗𝐌𝐃";
        let totalCommands = Object.keys(commands).length;
        const caption = `
*╭┄┄✪ ${botName} ✪┄┄⊷*
*┃❂┬┄✯✯✯✯✯✯✯✯*
*┃❂┊* 𝗢𝘄𝗻𝗲𝗿: ${config.OWNER_NAME}
*┃❂┊* 𝗕𝗮𝗶𝗹𝗲𝘆𝘀: Multi Device
*┃❂┊* 𝗗𝗮𝘁𝗲: ${currentDate}
*┃❂┊* 𝗧𝘆𝗽𝗲: Nodejs
*┃❂┊* 𝗨𝗽𝘁𝗶𝗺𝗲: ${runtime(process.uptime())}
*┃❂┊* 𝗣𝗿𝗲𝗳𝗶𝘅: ${config.PREFIX}
*┃❂┊* 𝗠𝗼𝗱𝗲: ${config.MODE}
*┃❂┊* 𝗥𝗮𝗺: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*┃❂┊* 𝗦𝘁𝗮𝘁𝘂𝘀:* *Online*
*┃❂┊* 𝗩𝗲𝗿𝘀𝗶𝗼𝗻:* 2.0.0
*┃❂┴┄✯✯✯✯✯✯✯✯*
*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊷*

> \`\`\`ʀᴇᴘʟʏ ᴡɪᴛʜ ᴀ ɴᴜᴍʙᴇʀs ʙᴇʟᴏᴡ\`\`\`

*╭──◇* ⟮ 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗜𝗘𝗦 ⟯ *◇─∙∙⊷*
*┃➛╭─────────────⊶*
*┃➛│* 1. ʙɪʙʟᴇᴍᴇɴᴜ
*┃➛│* 2. ǫᴜʀᴀɴᴍᴇɴᴜ
*┃➛│* 3. sᴇᴛᴛɪɴɢᴍᴇɴᴜ
*┃➛│* 4. ᴀɪᴍᴇɴᴜ
*┃➛│* 5. ᴀɴɪᴍᴇᴍᴇɴᴜ
*┃➛│* 6. ʀᴇᴀᴄᴛɪᴏɴsᴍᴇɴᴜ
*┃➛│* 7. ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
*┃➛│* 8. ғᴜɴᴍᴇɴᴜ
*┃➛│* 9. ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
*┃➛│* 10. ɢʀᴏᴜᴘᴍᴇɴᴜ
*┃➛│* 11. ᴍᴀɪɴᴍᴇɴᴜ
*┃➛│* 12. ᴏᴡɴᴇʀᴍᴇɴᴜ
*┃➛│* 13. ᴏᴛʜᴇʀᴍᴇɴᴜ
*┃➛│* 14. ʟᴏɢᴏᴍᴇɴᴜ
*┃➛│* 15. ᴛᴏᴏʟsᴍᴇɴᴜ
*┃➛╰────────────⊶*
*╰─────────────────⋅⋅⊷*

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
*├▢ • surah 
*├▢ • ayat <surah:
*├▢ • tafsir <surah>*
*├▢ • listreciters*
*├▢ • play <reciter> <surah>*
*├▢ • searchquran <query>*
*├▢ • quranpdf <surah>*
*├▢ • prayer <city>*
*├▢ • setlocation <city>*
*├▢ • mylocation*
*├▢ • prayerfull <city>*
*├▢ • prayernext <city>*
*├▢ • hijridate*
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
│├▢ .prefix new prefix
│├▢ .botname new name
│├▢ .ownername new name
│├▢ .botimage reply to image 
│├▢ .mode public/private
│
├───⬡ *AUTO FEATURES* ⬡───
│├▢ .autoreact on/off
│├▢ .autoreply on/off
│├▢ .autosticker on/off
│├▢ .autotyping on/off
│├▢ .autostatusview on/off
│├▢ .autostatusreact on/off
│├▢ .autostatusreply on/off
│├▢ .autorecoding on/off
│├▢ .alwaysonline on/off
│
├───⬡ *GROUP SETTINGS* ⬡───
│├▢ .welcome on/off
│├▢ .goodbye on/off
│├▢ .antilink on/off
│├▢ .antilinkkick on/off
│├▢ .deletelink on/off
│├▢ .antibad on/off
│├▢ .antibot on/off
│
├───⬡ *MESSAGE SETTINGS* ⬡───
│├▢ .read-message on/off
│├▢ .mention-reply on/off
│├▢ .admin-action on/off
│
├───⬡ *CUSTOMIZATION* ⬡───
│├▢ .creact on/off
│├▢ .cemojis ❤️,🧡,💛
│
╰────⬡ *Use ${config.PREFIX}command on/off* ⬡────⭓
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "4": // AI Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ AI MENU ⬡────*
*├▢ • ai <query>*
*├▢ • gpt <query>*
*├▢ • gpt2 <query>*
*├▢ • gpt3 <query>*
*├▢ • gpt4 <query>*
*├▢ • bard <query>*
*├▢ • bing <query>*
*├▢ • copilot <query>*
*├▢ • imagine <prompt>*
*├▢ • imagine2 <prompt>*
*├▢ • blackbox <query>*
*├▢ • luma <query>*
*├▢ • meta <query>*
*├▢ • khan <query>*
*├▢ • jawad <query>*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "5": // Anime Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ ANIME MENU ⬡────*
*├▢ • waifu*
*├▢ • neko*
*├▢ • loli*
*├▢ • maid*
*├▢ • animegirl*
*├▢ • animeboy*
*├▢ • animenews*
*├▢ • animequote*
*├▢ • naruto*
*├▢ • animewall*
*├▢ • animememe*
*├▢ • anime1*
*├▢ • anime2*
*├▢ • anime3*
*├▢ • anime4*
*├▢ • anime5*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "6": // Reactions
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ REACTIONS ⬡────*
*├▢ • bully @tag*
*├▢ • cuddle @tag*
*├▢ • hug @tag*
*├▢ • kiss @tag*
*├▢ • lick @tag*
*├▢ • pat @tag*
*├▢ • slap @tag*
*├▢ • kick @tag*
*├▢ • poke @tag*
*├▢ • bite @tag*
*├▢ • yeet @tag*
*├▢ • blush @tag*
*├▢ • smile @tag*
*├▢ • wave @tag*
*├▢ • highfive @tag*
*├▢ • handhold @tag*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "7": // Convert Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ CONVERT MENU ⬡────*
*├▢ • sticker <image>*
*├▢ • sticker2 <video>*
*├▢ • tomp3 <video>*
*├▢ • tomp4 <audio>*
*├▢ • tts <text>*
*├▢ • trt <text> <lang>*
*├▢ • base64 <text>*
*├▢ • unbase64 <text>*
*├▢ • binary <text>*
*├▢ • dbinary <binary>*
*├▢ • tinyurl <url>*
*├▢ • emojimix <emoji+emoji>*
*├▢ • fancy <text>*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "8": // Fun Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ FUN MENU ⬡────*
*├▢ • joke*
*├▢ • meme*
*├▢ • fact*
*├▢ • quote*
*├▢ • truth*
*├▢ • dare*
*├▢ • ship @tag1 @tag2*
*├▢ • rate <something>*
*├▢ • hack @tag*
*├▢ • character*
*├▢ • pickup*
*├▢ • wyr*
*├▢ • wouldyourather*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "9": // Download Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ DOWNLOAD MENU ⬡────*
*├▢ • ytmp3 <url>*
*├▢ • ytmp4 <url>*
*├▢ • fb <url>*
*├▢ • fb2 <url>*
*├▢ • fb3 <url>*
*├▢ • tiktok <url>*
*├▢ • insta <url>*
*├▢ • twitter <url>*
*├▢ • spotify <url>*
*├▢ • play <query>*
*├▢ • play2 <query>*
*├▢ • play3 <query>*
*├▢ • play4 <query>*
*├▢ • play5 <query>*
*├▢ • playx <query>*
*├▢ • mediafire <url>*
*├▢ • gdrive <url>*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "10": // Group Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ GROUP MENU ⬡────*
*├▢ • add @tag*
*├▢ • kick @tag*
*├▢ • promote @tag*
*├▢ • demote @tag*
*├▢ • grouplink*
*├▢ • revoke*
*├▢ • setname <text>*
*├▢ • setdesc <text>*
*├▢ • setwelcome <text>*
*├▢ • setgoodbye <text>*
*├▢ • welcome on/off*
*├▢ • goodbye on/off*
*├▢ • lockgc*
*├▢ • unlockgc*
*├▢ • mute*
*├▢ • unmute*
*├▢ • tagall*
*├▢ • tagadmins*
*├▢ • hidetag <text>*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "11": // Main Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ MAIN MENU ⬡────*
*├▢ • ping*
*├▢ • runtime*
*├▢ • uptime*
*├▢ • speedtest*
*├▢ • owner*
*├▢ • support*
*├▢ • menu*
*├▢ • menu2*
*├▢ • listcmd*
*├▢ • allmenu*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "12": // Owner Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ OWNER MENU ⬡────*
*├▢ • broadcast <message>*
*├▢ • ban @tag*
*├▢ • unban @tag*
*├▢ • block @tag*
*├▢ • unblock @tag*
*├▢ • join <link>*
*├▢ • leave*
*├▢ • setpp <image>*
*├▢ • fullpp*
*├▢ • shutdown*
*├▢ • restart*
*├▢ • update*
*├▢ • getsudo*
*├▢ • addsudo @tag*
*├▢ • delsudo @tag*
*├▢ • banlist*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "13": // Other Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ OTHER MENU ⬡────*
*├▢ • weather <location>*
*├▢ • news*
*├▢ • movie <name>*
*├▢ • wikipedia <query>*
*├▢ • define <word>*
*├▢ • currency <amount> <from> <to>*
*├▢ • calculator <expression>*
*├▢ • flip*
*├▢ • roll*
*├▢ • fact*
*├▢ • rcolor*
*├▢ • countdown <seconds>*
*├▢ • remind <time> <message>*
*╰────────────────*
> ${config.DESCRIPTION}`,
                            contextInfo: commonContextInfo(receivedMsg.key.participant || receivedMsg.key.remoteJid)
                        }, { quoted: receivedMsg });
                        break;

                    case "14": // Logo Menu
                        await conn.sendMessage(senderID, {
                            image: { url: config.MENU_IMAGE_URL },
                            caption: `*╭────⬡ LOGO MENU ⬡────*
*├▢ • neonlight <text>*
*├▢ • blackpink <text>*
*├▢ • dragonball <text>*
*├▢ • 3dcomic <text>*
*├▢ • america <text>*
*├▢ • naruto <text>*
*├▢ • sadgirl <text>*
*├▢ • clouds <text>*
*├▢ • futuristic <text>*
*├▢ • 3dpaper <text>*
*├▢ • eraser <text>*
*├▢ • sunset <text>*
*├▢ • leaf <text>*
*├▢ • galaxy <text>*
*├▢ • sans <text>*
*├▢ • boom <text>*
*├▢ • hacker <text>*
*├▢ • devilwings <text>*
*├▢ • nigeria <text>*
*├▢ • bulb <text>*
*├▢ • angelwings <text>*
*├▢ • zodiac <text>*
*├▢ • luxury <text>*
*├▢ • paint <text>*
*├▢ • frozen <text>*
*├▢ • castle <text>*
*├▢ • tatoo <text>*
*├▢ • valorant <text>*
*├▢ • bear <text>*
*├▢ • typography <text>*
*├▢ • birthday <text>*
*╰────────────────*
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
                            text: "Invalid selection. Please reply with a number between 1-15",
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
