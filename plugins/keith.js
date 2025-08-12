const { cmd } = require('../command');
const moment = require('moment-timezone');
const config = require('../config')
const {runtime} = require('../lib/functions')
cmd({
  pattern: "menulist",
  alias: ["allmenui", "fullmenui"], 
  desc: "Display full bot command list",
  category: "main",
  react: "📜",
  filename: __filename,
}, async (Void, m, text, { prefix }) => {

  const runtime = () => {
    let sec = process.uptime();
    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = Math.floor(sec % 60);
    return `${hrs}h ${mins}m ${secs}s`;
  };
  

  const date = moment.tz("Africa/Harare").format("DD/MM/YYYY");
  const time = moment.tz("Africa/Harare").format("HH:mm:ss");
  const uptime = runtime(process.uptime());

  const botName = "KEITH-XMD";
  const ownerName = "Keith";

  const menutext = `
  
*╭────⬡ ${botName} ⬡───⭓*
*│✘╭╌╌╌╌╌╌╌╌╌╌⋅⋅⊷*
*│⬡│ 🤖 Owner:* ${ownerName}
*│⬡│ ⏱️ Runtime:* ${runtime(process.uptime())}
*│⬡│ 📅 Date:* ${date}
*│⬡│ 📡 Baileys:* Multi Device
*│⬡│ ☁️ Platform:* Heroku
*│⬡│ 📦 Prefix:* ${config.PREFIX}
*│⬡│ ⚙️ Mode:* ${config.MODE}
*│⬡│ 📜 Cmds:* 385
*│⬡│ 🏷️ Version:* 2.0.0
*│✘╰╌╌╌╌╌╌╌╌╌╌╌⋅⋅⊷*
*╰─────────────────⭓*


*╭── ✘ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}fᴀᴄᴇʙᴏᴏᴋ
*┊⬡* ${config.PREFIX}mᴇᴅɪᴀꜰɪʀᴇ
*┊⬡* ${config.PREFIX}tɪᴋᴛᴏᴋ
*┊⬡* ${config.PREFIX}sᴇᴛᴛɪɴɢs
*┊⬡* ${config.PREFIX}tᴡɪᴛᴛᴇʀ
*┊⬡* ${config.PREFIX}iɴꜱᴛᴀ
*┊⬡* ${config.PREFIX}aᴘᴋ
*┊⬡* ${config.PREFIX}iᴍɢ
*┊⬡* ${config.PREFIX}tᴛ2
*┊⬡* ${config.PREFIX}pɪɴꜱ
*┊⬡* ${config.PREFIX}aᴘᴋ2
*┊⬡* ${config.PREFIX}fʙ2
*┊⬡* ${config.PREFIX}pɪɴᴛᴇʀᴇꜱᴛ
*┊⬡* ${config.PREFIX}sᴘᴏᴛɪꜰʏ
*┊⬡* ${config.PREFIX}pʟᴀʏ
*┊⬡* ${config.PREFIX}pʟᴀʏ2
*┊⬡* ${config.PREFIX}aᴜᴅɪᴏ
*┊⬡* ${config.PREFIX}vɪᴅᴇᴏ
*┊⬡* ${config.PREFIX}vɪᴅᴇᴏ2
*┊⬡* ${config.PREFIX}yᴛᴍᴘ3
*┊⬡* ${config.PREFIX}yᴛᴍᴘ4
*┊⬡* ${config.PREFIX}sᴏɴɢ
*┊⬡* ${config.PREFIX}dᴀʀᴀᴍᴀ
*┊⬡* ${config.PREFIX}gᴅʀɪᴠᴇ
*┊⬡* ${config.PREFIX}sꜱᴡᴇʙ
*┊⬡* ${config.PREFIX}tɪᴋꜱ
*╰─────────────∙∙◈*

*╭── ✘ 𝐆𝐑𝐎𝐔𝐏 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}gʀᴏᴜᴘʟɪɴᴋ
*┊⬡* ${config.PREFIX}kɪᴄᴋᴀʟʟ
*┊⬡* ${config.PREFIX}ᴋɪᴄᴋᴀʟʟ2
*┊⬡* ${config.PREFIX}ᴋɪᴄᴋᴀʟʟ3
*┊⬡* ${config.PREFIX}ᴀᴅᴅ
*┊⬡* ${config.PREFIX}ʀᴇᴍᴏᴠᴇ
*┊⬡* ${config.PREFIX}ᴋɪᴄᴋ
*┊⬡* ${config.PREFIX}ᴘʀᴏᴍᴏᴛᴇ
*┊⬡* ${config.PREFIX}ᴅᴇᴍᴏᴛᴇ
*┊⬡* ${config.PREFIX}ᴅɪsᴍɪss
*┊⬡* ${config.PREFIX}ʀᴇᴠᴏᴋᴇ
*┊⬡* ${config.PREFIX}sᴇᴛɢᴏᴏᴅʙʏᴇ
*┊⬡* ${config.PREFIX}sᴇᴛᴡᴇʟᴄᴏᴍᴇ
*┊⬡* ${config.PREFIX}ᴅᴇʟᴇᴛᴇ
*┊⬡* ${config.PREFIX}ɢᴇᴛᴘɪᴄ
*┊⬡* ${config.PREFIX}ɢɪɴғᴏ
*┊⬡* ${config.PREFIX}ɪsᴀᴘᴘᴇᴀʀ ᴏɴ
*┊⬡* ${config.PREFIX}ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ
*┊⬡* ${config.PREFIX}ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ,24ʜ
*┊⬡* ${config.PREFIX}ᴀʟʟʀᴇǫ
*┊⬡* ${config.PREFIX}ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ
*┊⬡* ${config.PREFIX}ᴘᴅᴀᴛᴇᴅᴇsᴄ
*┊⬡* ${config.PREFIX}ᴏɪɴʀᴇǫᴜᴇsᴛ
*┊⬡* ${config.PREFIX}sᴇɴᴅᴅᴍ
*┊⬡* ${config.PREFIX}ɴɪᴋᴀʟ
*┊⬡* ${config.PREFIX}ᴍᴜᴛᴇ
*┊⬡* ${config.PREFIX}ᴜɴᴍᴜᴛᴇ
*┊⬡* ${config.PREFIX}ʟᴏᴄᴋɢᴄ
*┊⬡* ${config.PREFIX}ᴜɴʟᴏᴄᴋɢᴄ
*┊⬡* ${config.PREFIX}ɪɴᴠɪᴛᴇ
*┊⬡* ${config.PREFIX}ᴛᴀɢ
*┊⬡* ${config.PREFIX}ʜɪᴅᴇᴛɢ
*┊⬡* ${config.PREFIX}ᴛᴀɢᴀʟʟ
*┊⬡* ${config.PREFIX}ᴛᴀɢᴀᴅᴍɪɴs
*╰─────────────∙∙◈*

*╭── ✘ 𝐀𝐔𝐃𝐈𝐎 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}ʙᴀss
*┊⬡* ${config.PREFIX}sʟᴏᴡ
*┊⬡* ${config.PREFIX}ғᴀsᴛ
*┊⬡* ${config.PREFIX}ʀᴇᴠᴇʀsᴇ
*┊⬡* ${config.PREFIX}ʙᴀʙʏ
*┊⬡* ${config.PREFIX}ᴅᴇᴍᴏɴ
*┊⬡* ${config.PREFIX}ᴇʀʀᴀᴘᴇ
*┊⬡* ${config.PREFIX}ɴɪɢʜᴛғᴏʀᴇ
*┊⬡* ${config.PREFIX}ʀᴏᴏᴛ
*┊⬡* ${config.PREFIX}ᴄʜɪᴘᴍᴜᴋ
*┊⬡* ${config.PREFIX}ʀᴀᴅɪᴏ
*┊⬡* ${config.PREFIX}ʙʟᴏᴡɴ
*┊⬡* ${config.PREFIX}ᴛᴜᴘᴀɪ
*┊⬡* ${config.PREFIX}ғᴀᴛ
*┊⬡* ${config.PREFIX}sᴍᴏᴏᴛʜ
*┊⬡* ${config.PREFIX}ᴅᴇᴇᴘ
*╰─────────────∙∙◈*

*╭── ✘ 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}ʙᴜʟʟʏ
*┊⬡* ${config.PREFIX}ᴄᴜᴅᴅʟᴇ
*┊⬡* ${config.PREFIX}ᴄʀʏ
*┊⬡* ${config.PREFIX}ʜᴜɢ
*┊⬡* ${config.PREFIX}ᴀᴡᴏᴏ
*┊⬡* ${config.PREFIX}ᴋɪss
*┊⬡* ${config.PREFIX}ʟɪᴄᴋ
*┊⬡* ${config.PREFIX}pᴀᴛ
*┊⬡* ${config.PREFIX}sᴍᴜʜ
*┊⬡* ${config.PREFIX}ʙᴏɴᴋ
*┊⬡* ${config.PREFIX}ʏᴇᴇᴛ
*┊⬡* ${config.PREFIX}ʙʟᴜsʜ
*┊⬡* ${config.PREFIX}sᴍɪʟᴇ
*┊⬡* ${config.PREFIX}ᴡᴀᴠᴇ
*┊⬡* ${config.PREFIX}ʜɪɢʜғɪᴠᴇ
*┊⬡* ${config.PREFIX}ʜᴀɴᴅʜᴏʟᴅ
*┊⬡* ${config.PREFIX}ɴᴏᴍ
*┊⬡* ${config.PREFIX}ʙɪᴛᴇ
*┊⬡* ${config.PREFIX}ɢʟᴏᴍᴘ
*┊⬡* ${config.PREFIX}sʟᴀᴘ
*┊⬡* ${config.PREFIX}ᴋɪʟʟ
*┊⬡* ${config.PREFIX}ʜᴀᴘᴘʏ
*┊⬡* ${config.PREFIX}ᴡɪɴᴋ
*┊⬡* ${config.PREFIX}ᴘᴏᴋᴇ
*┊⬡* ${config.PREFIX}ᴅᴀɴᴄᴇ
*┊⬡* ${config.PREFIX}ᴄʀɪɴɢ
*╰─────────────∙∙◈*

*╭── ✘ 𝐋𝐎𝐆𝐎 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}ɴᴇᴏɴʟɪɢʜ
*┊⬡* ${config.PREFIX}ʙʟᴀᴄᴋᴘɪɴᴋ
*┊⬡* ${config.PREFIX}ᴅʀᴀɢᴏɴʙᴀʟʟ
*┊⬡* ${config.PREFIX}3ᴅᴄᴏᴍɪᴄ
*┊⬡* ${config.PREFIX}ᴀᴍᴇʀɪᴄᴀ
*┊⬡* ${config.PREFIX}ɴᴀʀᴜᴛᴏ
*┊⬡* ${config.PREFIX}sᴀᴅɢɪʀʟ
*┊⬡* ${config.PREFIX}ᴄʟᴏᴜᴅs
*┊⬡* ${config.PREFIX}ғᴜᴛᴜʀɪsᴛɪᴄ
*┊⬡* ${config.PREFIX}3ᴅᴘᴀᴘᴇʀ
*┊⬡* ${config.PREFIX}ᴇʀᴀsᴇʀ
*┊⬡* ${config.PREFIX}sᴜɴsᴇᴛ
*┊⬡* ${config.PREFIX}ʟᴇᴀғ
*┊⬡* ${config.PREFIX}ɢᴀʟᴀxʏ
*┊⬡* ${config.PREFIX}sᴀɴs
*┊⬡* ${config.PREFIX}ʙᴏᴏᴍ
*┊⬡* ${config.PREFIX}ʜᴀᴄᴋᴇʀ
*┊⬡* ${config.PREFIX}ᴅᴇᴠɪʟᴡɪɴɢs
*┊⬡* ${config.PREFIX}ɴɪɢᴇʀɪᴀ
*┊⬡* ${config.PREFIX}ʙᴜʟʙ
*┊⬡* ${config.PREFIX}ᴀɴɢᴇʟᴡɪɴɢs
*┊⬡* ${config.PREFIX}ᴢᴏᴅɪᴀᴄ
*┊⬡* ${config.PREFIX}ʟᴜxᴜʀʏ
*┊⬡* ${config.PREFIX}ᴘᴀɪɴᴛ
*┊⬡* ${config.PREFIX}ғʀᴏᴢᴇɴ
*┊⬡* ${config.PREFIX}ᴄᴀsᴛʟᴇ
*┊⬡* ${config.PREFIX}ᴛᴀᴛᴏᴏ
*┊⬡* ${config.PREFIX}ᴠᴀʟᴏʀᴀɴᴛ
*┊⬡* ${config.PREFIX}ʙᴇᴀʀ
*┊⬡* ${config.PREFIX}ᴛʏᴘᴏɢʀᴀᴘʜʏ
*┊⬡* ${config.PREFIX}ʙɪʀᴛʜᴅᴀʏ
*╰─────────────∙∙◈*

*╭── ✘ 𝐎𝐖𝐍𝐄𝐑 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}ᴏᴡɴᴇʀ
*┊⬡* ${config.PREFIX}ᴍᴇɴᴜ
*┊⬡* ${config.PREFIX}ᴍᴇɴᴜ2
*┊⬡* ${config.PREFIX}ᴠᴠ*l
*┊⬡* ${config.PREFIX}ʟɪsᴛᴄᴍᴅ
*┊⬡* ${config.PREFIX}ᴀʟʟᴍᴇɴᴜ
*┊⬡* ${config.PREFIX}ʀᴇᴘᴏ
*┊⬡* ${config.PREFIX}ʙʟᴏᴄᴋ
*┊⬡* ${config.PREFIX}ᴜɴʙʟᴏᴄᴋ
*┊⬡* ${config.PREFIX}ғᴜʟʟᴘᴘ
*┊⬡* ${config.PREFIX}sᴇᴛᴘᴘ
*┊⬡* ${config.PREFIX}ʀᴇsᴛᴀʀᴛ
*┊⬡* ${config.PREFIX}sʜᴜᴛᴅᴏᴡɴ
*┊⬡* ${config.PREFIX}ᴜᴘᴅᴀᴛᴇᴄᴍᴅ
*┊⬡* ${config.PREFIX}ᴀʟɪᴠᴇ
*┊⬡* ${config.PREFIX}ᴘɪɴɢ
*┊⬡* ${config.PREFIX}ɢᴊɪᴅ
*┊⬡* ${config.PREFIX}ᴊɪᴅ
*╰─────────────∙∙◈*

*╭── ✘ 𝐅𝐔𝐍 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}sʜᴀᴘᴀʀ
*┊⬡* ${config.PREFIX}ʀᴀᴛᴇ
*┊⬡* ${config.PREFIX}ɪɴsᴜʟᴛ
*┊⬡* ${config.PREFIX}ʜᴀᴋ
*┊⬡* ${config.PREFIX}sʜɪᴘ
*┊⬡* ${config.PREFIX}ᴄʜᴀʀᴀᴄᴛᴇʀ
*┊⬡* ${config.PREFIX}ᴘɪᴄᴋᴜᴘ
*┊⬡* ${config.PREFIX}ᴊᴏᴋᴇ
*┊⬡* ${config.PREFIX}ʜʀᴛ
*┊⬡* ${config.PREFIX}ʜᴘʏ
*┊⬡* ${config.PREFIX}sʏᴅ
*┊⬡* ${config.PREFIX}ᴀɴɢᴇʀ
*┊⬡* ${config.PREFIX}sʜʏ
*┊⬡* ${config.PREFIX}ᴋɪss
*┊⬡* ${config.PREFIX}ᴍᴏɴ
*┊⬡* ${config.PREFIX}ᴄᴜɴғᴜsᴇᴅ
*┊⬡* ${config.PREFIX}ʜᴀɴᴅ
*┊⬡* ${config.PREFIX}ɴɪᴋᴀʟ
*┊⬡* ${config.PREFIX}ʜᴏʟᴅ
*╰─────────────∙∙◈*

*╭── ✘ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}sᴛɪᴄᴋᴇʀ
*┊⬡* ${config.PREFIX}sᴛɪᴄᴋᴇʀ2
*┊⬡* ${config.PREFIX}ᴇᴍᴏᴊɪᴍɪx
*┊⬡* ${config.PREFIX}ғᴀɴᴄʏ
*┊⬡* ${config.PREFIX}ᴛᴀᴋᴇ
*┊⬡* ${config.PREFIX}ᴛᴏᴍᴘ3
*┊⬡* ${config.PREFIX}ᴛᴛs
*┊⬡* ${config.PREFIX}ᴛʀᴛ
*┊⬡* ${config.PREFIX}ʙᴀsᴇ64
*┊⬡* ${config.PREFIX}ᴜɴʙᴀsᴇ64
*┊⬡* ${config.PREFIX}ʙɪɴᴀʀʏ
*┊⬡* ${config.PREFIX}ᴅʙɪɴᴀʀʏ
*┊⬡* ${config.PREFIX}ᴛɪɴʏᴜʀʟ
*┊⬡* ${config.PREFIX}ᴜʀʟᴅᴇᴄᴏᴅᴇ
*┊⬡* ${config.PREFIX}ᴜʀʟᴇɴᴄᴏᴅᴇ
*┊⬡* ${config.PREFIX}ᴜʀʟ
*┊⬡* ${config.PREFIX}ʀᴇᴘᴇᴀᴛ
*┊⬡* ${config.PREFIX}ᴀsᴋ
*┊⬡* ${config.PREFIX}ʀᴇᴀᴅᴍᴏʀᴇ
*╰─────────────∙∙◈*

*╭── ✘ 𝐀𝐈 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}ᴀɪ
*┊⬡* ${config.PREFIX}ɢᴘᴛ
*┊⬡* ${config.PREFIX}ɢᴘᴛ2
*┊⬡* ${config.PREFIX}ɢᴘᴛ3
*┊⬡* ${config.PREFIX}ɢᴘᴛᴍɪɴɪ
*┊⬡* ${config.PREFIX}ᴍᴇᴛᴀ
*┊⬡* ${config.PREFIX}ʙʟᴀᴄᴋʙᴏx
*┊⬡* ${config.PREFIX}ʟᴜᴍᴀ
*┊⬡* ${config.PREFIX}ᴅᴊ
*┊⬡* ${config.PREFIX}ᴋᴇɪᴛʜ
*┊⬡* ${config.PREFIX}ɢᴘᴛ4
*┊⬡* ${config.PREFIX}ʙɪɴɢ
*┊⬡* ${config.PREFIX}ɪᴍᴀɢᴇ
*┊⬡* ${config.PREFIX}ɪᴍᴀɢᴇ2
*┊⬡* ${config.PREFIX}ᴄᴀᴘɪʟᴏᴛ
*╰─────────────∙∙◈*

*╭── ✘ 𝐌𝐀𝐈𝐍 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}ʙɪʙʟᴇ
*┊⬡* ${config.PREFIX}ᴘɪɴɢ
*┊⬡* ${config.PREFIX}ᴘɪɴɢ2
*┊⬡* ${config.PREFIX}sᴘᴇᴇᴅ
*┊⬡* ${config.PREFIX}ʟɪᴠᴇ
*┊⬡* ${config.PREFIX}ᴀʟɪᴠᴇ
*┊⬡* ${config.PREFIX}ʀᴜɴᴛɪᴍᴇ
*┊⬡* ${config.PREFIX}ᴜᴘᴛɪᴍᴇ
*┊⬡* ${config.PREFIX}ʀᴇᴘᴏ
*┊⬡* ${config.PREFIX}ᴏᴡɴᴇʀ
*┊⬡* ${config.PREFIX}ʀᴇsᴛᴀʀᴛ
*┊⬡* ${config.PREFIX}sᴇᴛᴛɪɴɢs
*╰─────────────∙∙◈*

*╭── ✘ 𝐀𝐍𝐈𝐌𝐄 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}ғᴀᴄᴋ
*┊⬡* ${config.PREFIX}ᴛʀᴜᴛʜ
*┊⬡* ${config.PREFIX}ᴅᴀʀᴇ
*┊⬡* ${config.PREFIX}ᴅᴏɢ
*┊⬡* ${config.PREFIX}ᴀᴡᴏᴏ
*┊⬡* ${config.PREFIX}ɢᴀʀʟ
*┊⬡* ${config.PREFIX}ᴡᴀɪғᴜ
*┊⬡* ${config.PREFIX}ɴᴇᴋᴏ
*┊⬡* ${config.PREFIX}ᴍᴇɢɴᴜᴍɪɴ
*┊⬡* ${config.PREFIX}ɴᴇᴋᴏ
*┊⬡* ${config.PREFIX}ᴍᴀɪᴅ
*┊⬡* ${config.PREFIX}ʟᴏʟɪ
*┊⬡* ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ
*┊⬡* ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ1
*┊⬡* ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ2
*┊⬡* ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ3
*┊⬡* ${config.PREFIX}ᴀɴɪᴍᴇɢɪʀʟ4
*┊⬡* ${config.PREFIX}ᴀɴɪᴍᴇɴᴇᴡs
*┊⬡* ${config.PREFIX}ғᴏx
*┊⬡* ${config.PREFIX}ɴᴀʀᴜᴛᴏ
*╰─────────────∙∙◈*

*╭── ✘ 𝐎𝐓𝐇𝐄𝐑 ✘ ──∙∙◈*
*┊⬡* ${config.PREFIX}ᴛɪᴍᴇɴᴏᴡ
*┊⬡* ${config.PREFIX}ᴅᴀᴛᴇ
*┊⬡* ${config.PREFIX}ᴄᴏᴜɴᴛ
*┊⬡* ${config.PREFIX}ᴄᴀʟᴄᴜʟᴀᴛᴇ
*┊⬡* ${config.PREFIX}ᴄᴏᴜɴᴛx
*┊⬡* ${config.PREFIX}ғʟɪᴘx
*┊⬡* ${config.PREFIX}ᴄᴏɪɴғʟɪᴘ
*┊⬡* ${config.PREFIX}ʀᴄᴏʟᴏʀ
*┊⬡* ${config.PREFIX}ʀᴏʟʟ
*┊⬡* ${config.PREFIX}ғᴀᴄᴛ
*┊⬡* ${config.PREFIX}ᴄᴘᴘ
*┊⬡* ${config.PREFIX}ʀᴡ
*┊⬡* ${config.PREFIX}ᴘᴀɪʀ
*┊⬡* ${config.PREFIX}ᴘᴀɪʀ2
*┊⬡* ${config.PREFIX}ᴘᴀɪʀ3
*┊⬡* ${config.PREFIX}ғᴀɴᴄʏ
*┊⬡* ${config.PREFIX}ʟᴏɢᴏ
*┊⬡* ${config.PREFIX}ᴅᴇғɪɴᴇ
*┊⬡* ${config.PREFIX}ɴᴇᴡs
*┊⬡* ${config.PREFIX}ᴍᴏᴠɪᴇ
*┊⬡* ${config.PREFIX}ᴡᴇᴀᴛʜᴇʀ
*┊⬡* ${config.PREFIX}sʀᴇᴘᴏ
*┊⬡* ${config.PREFIX}ɪɴsᴜʟᴛ
*┊⬡* ${config.PREFIX}sᴀᴠᴇ
*┊⬡* ${config.PREFIX}ᴡɪᴋɪᴘᴇᴅɪᴀ
*┊⬡* ${config.PREFIX}ɢᴘᴀss
*┊⬡* ${config.PREFIX}ɢɪᴛʜᴜʙsᴛᴀʟᴋ
*┊⬡* ${config.PREFIX}ʏᴛs
*┊⬡* ${config.PREFIX}ʏᴛᴠ
*╰─────────────∙∙◈*

${config.DESCRIPTION}
`.trim();

  // Fake verification contact
  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "KEITH-XMD  ✅",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:KEITH\nORG:KEITH-XMD;\nTEL;type=CELL;type=VOICE;waid=254700000000:+254 700 000000\nEND:VCARD`
      }
    }
  };

  const context = {
    isForwarded: true,
    forwardingScore: 999,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363417440480101@newsletter",
      newsletterName: "KEITH-TECH",
      serverMessageId: 100
    },
   
  };

  // Send menu without thumbnail
  await Void.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/wss7ae.jpg" },
    caption: menutext,
    contextInfo: context,
  }, { quoted: fakeContact });
});
  
