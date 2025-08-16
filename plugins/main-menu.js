const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path');
const os = require("os")
const fs = require('fs');
const moment = require('moment-timezone');
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
pattern: "menu",
alias: ["allmenu","fullmenu"],
use: '.menu',
desc: "Show all bot commands",
category: "menu",
react: "📜",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
let totalCommands = Object.keys(commands).length;
let botName = "KEITH-XMD";
let now = new Date();
        
        // Get the formatted date (e.g., "Monday, January 15, 2025")
        let currentDate = now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });


let dec = `\n*╭┄┄┄┄┄✪ ${botName} ✪┄┄┄⊷*
*┃❂╭──────────◎*
*┃❂│ Owner:* ${config.OWNER_NAME}
*┃❂│ Runtime:* ${runtime(process.uptime())}
*┃❂│ Baileys:* Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ
*┃❂│ Type:* Nᴏᴅᴇᴊs
*┃❂│ Date:* ${currentDate}
*┃❂│ Prefix:* ${config.PREFIX}
*┃❂│ Mode:* ${config.MODE}
*┃❂│ Status:* *Oɴʟɪɴᴇ*
*┃❂│ Version:* 2.0.0
*┃❂╰───────────◎*
*╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄⊷*


*╭┄┄┄✪ DOWNLOAD MENU ✪┈◎*
║╭─────────────⋅⋅
║│ ❂ .fb    
║│ ❂ .fb2    
║│ ❂ .fb3    
║│ ❂ .fb4    
║│ ❂ .getimage    
║│ ❂ .gitclone    
║│ ❂ .igdl    
║│ ❂ .igdl2    
║│ ❂ .igdl4    
║│ ❂ .img    
║│ ❂ .mediafire    
║│ ❂ .movie    
║│ ❂ .pair    
║│ ❂ .pair2    
║│ ❂ .ringtone    
║│ ❂ .tiktok    
║│ ❂ .tt3    
║│ ❂ .tts 
║│ ❂ .ig3    
║│ ❂ .song    
║│ ❂ .tt2   
║╰────────────⋅⋅
*╰┄┄┄┄┄┄┄┄┄┄┄┄┈┄┈◎*

*╭┄┄┄✪ AI MENU ✪┈◎*
║╭──────────⋅⋅
║│ ❂ .ai    
║│ ❂ .deepseek    
║│ ❂ .openai    
║│ ❂ .remini    
║╰─────────⋅⋅
*╰┄┄┄┄┄┄┄┄┈┄┈◎*

*╭┄┄┄✪ ANIME MENU ✪┈◎*
║╭─────────⋅⋅
║│ ❂ .awoo    
║│ ❂ .garl    
║│ ❂ .maid    
║│ ❂ .megumin    
║│ ❂ .neko    
║│ ❂ .waifu    
║╰───┄─────⋅⋅
*╰┄┄┄┄┄┄┄─┈┄┈◎*

*╭┄┄┄✪ AUDIO MENU ✪┈◎*
║╭───────────⋅⋅
║│ ❂ .audiomenu    
║│ ❂ .baby    
║│ ❂ .bass    
║│ ❂ .blown    
║│ ❂ .chipmunk    
║│ ❂ .deep    
║│ ❂ .deep    
║│ ❂ .demon    
║│ ❂ .earrape    
║│ ❂ .fast    
║│ ❂ .fat    
║│ ❂ .nightcore    
║│ ❂ .radio    
║│ ❂ .reverse    
║│ ❂ .robot    
║│ ❂ .slow    
║│ ❂ .smooth    
║│ ❂ .tomp3    
║│ ❂ .toptt    
║│ ❂ .tupai    
║╰───────────⋅⋅
*╰┄┄┄┄┄┄┄┄┄┄┄┈┄┈◎*

*╭┄┄┄✪ CONVERT MENU ✪┈◎*
║╭───────────⋅⋅
║│ ❂ .convert    
║│ ❂ .npm    
║│ ❂ .npm    
║│ ❂ .tiny    
║│ ❂ .tourl    
║╰─────┄┄──⋅⋅
*╰┄┄┄┄┄┄┄┈──┄┈◎*


*╭┄┄┄✪ FUN MENU ✪┈◎*
║╭───────────⋅⋅
║│ ❂ .8ball    
║│ ❂ .animegirl    
║│ ❂ .animegirl1    
║│ ❂ .animegirl2    
║│ ❂ .animegirl3    
║│ ❂ .animegirl4    
║│ ❂ .animegirl5    
║│ ❂ .aura    
║│ ❂ .awoo    
║│ ❂ .bacha    
║│ ❂ .bachi    
║│ ❂ .bible    
║│ ❂ .bite    
║│ ❂ .blush    
║│ ❂ .bonk    
║│ ❂ .bully    
║│ ❂ .cgrt    
║│ ❂ .coinflip    
║│ ❂ .compatibility    
║│ ❂ .compliment    
║│ ❂ .cringe    
║│ ❂ .cry    
║│ ❂ .cuddle    
║│ ❂ .dance    
║│ ❂ .dog    
║│ ❂ .emix    
║│ ❂ .emoji    
║│ ❂ .flip    
║│ ❂ .glomp    
║│ ❂ .handhold    
║│ ❂ .happy    
║│ ❂ .highfive    
║│ ❂ .hug    
║│ ❂ .kill    
║│ ❂ .kiss    
║│ ❂ .lick    
║│ ❂ .lovetest    
║│ ❂ .me    
║│ ❂ .motivate    
║│ ❂ .muth    
║│ ❂ .nom    
║│ ❂ .pat    
║│ ❂ .pick    
║│ ❂ .poke    
║│ ❂ .rate    
║│ ❂ .repeat    
║│ ❂ .roast    
║│ ❂ .roll    
║│ ❂ .shapar    
║│ ❂ .slap    
║│ ❂ .smile    
║│ ❂ .smug    
║│ ❂ .spam    
║│ ❂ .wave    
║│ ❂ .wink    
║│ ❂ .yeet    
║╰──────┄────⋅⋅
*╰┄┄┄┄┄┄┄┄┄┄─┈┄┈◎*

*╭┄┄┄✪ GROUP MENU ✪┈◎*
║╭────────────⋅⋅
║│ ❂ .acceptall    
║│ ❂ .antibot    
║│ ❂ .antilink    
║│ ❂ .broadcast    
║│ ❂ .delete    
║│ ❂ .deletelink    
║│ ❂ .demote    
║│ ❂ .ginfo    
║│ ❂ .hidetag    
║│ ❂ .invite    
║│ ❂ .join    
║│ ❂ .lockgc    
║│ ❂ .mute    
║│ ❂ .newgc    
║│ ❂ .out    
║│ ❂ .poll    
║│ ❂ .promote    
║│ ❂ .rejectall    
║│ ❂ .removeadmins    
║│ ❂ .removeall2    
║│ ❂ .removemembers    
║│ ❂ .requestlist    
║│ ❂ .revoke    
║│ ❂ .tagadmins    
║│ ❂ .tagall    
║│ ❂ .unlockgc    
║│ ❂ .unmute    
║│ ❂ .updategdesc    
║│ ❂ .updategname    
║╰──────────⋅⋅
*╰┄┄┄┄┄┄┄┄┄┄┈┄┈◎*


*╭┄┄┄✪ LOGO MENU ✪┈◎*
║╭────────────⋅⋅
║│ ❂ .nokia
║│ ❂ .3dcomic    
║│ ❂ .3dpaper    
║│ ❂ .america    
║│ ❂ .angelwings    
║│ ❂ .bear    
║│ ❂ .birthday    
║│ ❂ .blackpink    
║│ ❂ .boom    
║│ ❂ .bulb    
║│ ❂ .castle    
║│ ❂ .cat    
║│ ❂ .clouds    
║│ ❂ .deadpool    
║│ ❂ .devilwings    
║│ ❂ .dragonball    
║│ ❂ .eraser    
║│ ❂ .frozen    
║│ ❂ .futuristic    
║│ ❂ .galaxy    
║│ ❂ .hacker    
║│ ❂ .leaf    
║│ ❂ .luxury    
║│ ❂ .naruto    
║│ ❂ .neonlight    
║│ ❂ .nigeria    
║│ ❂ .paint    
║│ ❂ .pornhub    
║│ ❂ .sadgirl    
║│ ❂ .sans    
║│ ❂ .sunset    
║│ ❂ .tatoo    
║│ ❂ .thor    
║│ ❂ .typography    
║│ ❂ .valorant    
║│ ❂ .zodiac    
║╰──────────⋅⋅
*╰┄┄┄┄┄┄┄┄┄┄┈┄┈◎*

*╭┄┄┄✪ MAIN MENU ✪┈◎*
║╭─────────────⋅⋅
║│ ❂ .deleteplugin    
║│ ❂ .pluginlist   
║│ ❂ .cid 
║│ ❂ .aivoice    
║│ ❂ .anime    
║│ ❂ .antidelete    
║│ ❂ .biblelist    
║│ ❂ .blur    
║│ ❂ .fetch    
║│ ❂ .fluxai    
║│ ❂ .fullpp    
║│ ❂ .grey    
║│ ❂ .imgjoke    
║│ ❂ .imgscan    
║│ ❂ .install    
║│ ❂ .invert    
║│ ❂ .menulist    
║│ ❂ .mp4    
║│ ❂ .news    
║│ ❂ .owner    
║│ ❂ .person    
║│ ❂ .ping    
║│ ❂ .ping2    
║│ ❂ .play4    
║│ ❂ .praytime    
║│ ❂ .privacy    
║│ ❂ .quran    
║│ ❂ .rcolor    
║│ ❂ .repo    
║│ ❂ .report    
║│ ❂ .rmbg    
║│ ❂ .screenshot    
║│ ❂ .send    
║│ ❂ .song    
║│ ❂ .songx    
║│ ❂ .stabilityai    
║│ ❂ .stablediffusion    
║│ ❂ .tempmail    
║│ ❂ .uptime    
║│ ❂ .version    
║│ ❂ .vfc    
║│ ❂ .video2    
║│ ❂ .vv3    
║│ ❂ .wanted    
║│ ❂ .weather    
║│ ❂ .wikipedia    
║│ ❂ .wstalk    
║╰───────────⋅⋅
*╰┄┄┄┄┄┄┄┈┄┄┄┄┄┈◎*

*╭┄┄┄✪ MENU ✪┈◎*
║╭─────────⋅⋅
║│ ❂ .aimenu    
║│ ❂ .animemenu    
║│ ❂ .convertmenu    
║│ ❂ .dlmenu    
║│ ❂ .funmenu    
║│ ❂ .githubstalk    
║│ ❂ .groupmenu    
║│ ❂ .list    
║│ ❂ .logo    
║│ ❂ .mainmenu    
║│ ❂ .menu    
║│ ❂ .menu2    
║│ ❂ .menu3    
║│ ❂ .menu5    
║│ ❂ .othermenu    
║│ ❂ .ownermenu    
║│ ❂ .quranmenu    
║│ ❂ .reactions    
║╰────────⋅⋅
*╰┄┄┄┄┄┄┄┄┈┄┈◎*


*╭┄┄┄✪ OTHER MENU ✪┈◎*
║╭────────────⋅⋅
║│ ❂ .countryinfo 
║│ ❂ .sticker    
║│ ❂ .take    
║│ ❂ .anime1    
║│ ❂ .anime2    
║│ ❂ .anime3    
║│ ❂ .anime4    
║│ ❂ .anime5    
║│ ❂ .gpass    
║│ ❂ .jid    
║│ ❂ .readmore    
║│ ❂ .rw    
║│ ❂ .srepo    
║│ ❂ .trt    
║╰────────⋅⋅
*╰┄┄┄┄┄┄┄┄┈┄┈◎*

*╭┄┄┄✪ OWNER MENU ✪┈◎*
║╭────────────⋅⋅
║│ ❂ .admin    
║│ ❂ .anti-call    
║│ ❂ .ban    
║│ ❂ .block    
║│ ❂ .broadcast    
║│ ❂ .chr    
║│ ❂ .clearchats    
║│ ❂ .count    
║│ ❂ .countx    
║│ ❂ .delsudo    
║│ ❂ .forward    
║│ ❂ .get    
║│ ❂ .getpp    
║│ ❂ .gjid    
║│ ❂ .leave    
║│ ❂ .listban    
║│ ❂ .listsudo    
║│ ❂ .restart    
║│ ❂ .setbotimage    
║│ ❂ .setbotname    
║│ ❂ .setownername    
║│ ❂ .setpp    
║│ ❂ .setprefix    
║│ ❂ .setreacts    
║│ ❂ .setsudo    
║│ ❂ .settings    
║│ ❂ .shutdown    
║│ ❂ .tempnum    
║│ ❂ .unban    
║│ ❂ .unblock    
║│ ❂ .update    
║│ ❂ .vv    
║│ ❂ .vv2    
║╰─────────⋅⋅
*╰┄┄┄┄┄┄┄┈┄┄┄┈◎*


*╭┄┄┄✪ PRIVACY MENU ✪┈◎*
║╭─────────────⋅⋅
║│ ❂ .blocklist    
║│ ❂ .getbio    
║│ ❂ .getprivacy    
║│ ❂ .groupsprivacy    
║│ ❂ .setmyname    
║│ ❂ .setonline    
║│ ❂ .setppall    
║│ ❂ .updatebio    
║╰─────────⋅⋅
*╰┄┄┄┄┄┄┄┄┄┈┄┈◎*

*╭┄┄┄✪ SEARCH MENU ✪┈◎*
║╭─────────────⋅⋅
║│ ❂ .define    
║│ ❂ .playstore    
║│ ❂ .tiktokstalk    
║│ ❂ .xstalk    
║│ ❂ .yts    
║│ ❂ .ytstalk    
║╰─────────⋅⋅
*╰┄┄┄┄┄┄┄┈┄┈◎*

*╭┄┄┄✪ SETTINGS MENU ✪┈◎*
║╭───────────⋅⋅
║│ ❂ .admin-events    
║│ ❂ .alwaysonline    
║│ ❂ .antibad    
║│ ❂ .autoreact    
║│ ❂ .autorecoding    
║│ ❂ .autoreply    
║│ ❂ .autostatusreact    
║│ ❂ .autostatusreply    
║│ ❂ .autostatusview    
║│ ❂ .autosticker    
║│ ❂ .autotyping    
║│ ❂ .chatbot    
║│ ❂ .config    
║│ ❂ .customreact    
║│ ❂ .goodbye    
║│ ❂ .mention-reply    
║│ ❂ .mode    
║│ ❂ .ownerreact    
║│ ❂ .read-message    
║│ ❂ .welcome    
║╰─────────⋅⋅
*╰┄┄┄┄┄┄┄┈┄┄┄┈◎*

*╭┄┄┄✪ TOOLS MENU ✪┈◎*
║╭────────────⋅⋅
║│ ❂ .angry    
║│ ❂ .chai    
║│ ❂ .chumi    
║│ ❂ .confused    
║│ ❂ .fancy    
║│ ❂ .google    
║│ ❂ .happy    
║│ ❂ .heart    
║│ ❂ .moon    
║│ ❂ .nikal    
║│ ❂ .otpbox    
║│ ❂ .sad    
║│ ❂ .shy    
║│ ❂ .templist    
║╰───────────⋅⋅
*╰┄┄┄┄┄┄┄┄┄┈┄┄┈◎*

*╭┄┄┄✪ UTILITY MENU ✪┈◎*
║╭─────────────⋅⋅
║│ ❂ .calculate
║│ ❂ .base64    
║│ ❂ .binary    
║│ ❂ .checkmail    
║│ ❂ .date    
║│ ❂ .dbinary    
║│ ❂ .ping3    
║│ ❂ .timenow    
║│ ❂ .unbase64    
║│ ❂ .urldecode    
║│ ❂ .urlencode    
║╰────────────⋅⋅
*╰┄┄┄┄┄┄┄┄┄┄┄┈┄┈◎*

${config.DESCRIPTION}`;
  
 await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363417440480101@newsletter',
                        newsletterName: 'KEITH TECH',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
        
        
    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});