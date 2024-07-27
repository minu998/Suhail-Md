const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_41_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDcwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICA3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODksXG4gICAgICAgIDQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIndQVW8vTFlLUWtKTGV6cGE0SjhMWHRLU0d1SDJ0dG9ZUys2MzgwbDh4SE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBLb25JVmJVUXNHb0loZ0FFNzZxeVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDU4NzZiOGItNWY4MC00MWMyLWIyMTUtYTQ0ZDMwZmQ5NGM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgODcsXG4gICAgICAxNjMsXG4gICAgICAyNDcsXG4gICAgICAyMTIsXG4gICAgICAxMDQsXG4gICAgICAzLFxuICAgICAgMTk5LFxuICAgICAgNjEsXG4gICAgICA2MSxcbiAgICAgIDE3OSxcbiAgICAgIDM2LFxuICAgICAgOTUsXG4gICAgICAyMixcbiAgICAgIDI0NyxcbiAgICAgIDIzNSxcbiAgICAgIDYsXG4gICAgICAxNTQsXG4gICAgICAxNixcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDIwMyxcbiAgICAgIDIxNixcbiAgICAgIDg0LFxuICAgICAgMjYsXG4gICAgICAyMjIsXG4gICAgICAyNDAsXG4gICAgICAxMjQsXG4gICAgICAyMDksXG4gICAgICA0NyxcbiAgICAgIDE1MCxcbiAgICAgIDg5LFxuICAgICAgMjA0LFxuICAgICAgMTQ4LFxuICAgICAgMjQ0LFxuICAgICAgMTUwLFxuICAgICAgMTMyLFxuICAgICAgMTQ4LFxuICAgICAgNDAsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3U1FXN1dFRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzMyNTk4Mjg6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzQ5NTAxNDkzNjc0NDozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdkQ5NmdGRU5LYWxiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkd2UDg2a2NHU21YQUxGZHdqSWpWUjlRR2lUUFVUYnp1ZTk3UmcxcVVtMk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaDZBRy9SdndXaEl3RnU1cGRKajFQaDRkRkh6cnRnVDErWWMzNVJTT1k5Q0hNcWlkSEJQMURvL0dhSmIxUkhPd2Y1NXc3YWRCREtGRWg4cEg5OEJVQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQytKTys0SlNlbko4cjA2OURBU3FvZmRCSzh2UlRQcyswNGQ0aXhtUlFmMTV1Q1JEU2FMY3RzN2taRlUxRUhqZkFzeGFDbXN4SkxCSkNaa29UQzdTaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzMyNTk4Mjg6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTA5MjY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFJNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMUk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJabWFUdkl3WGZEeHpxQm5qY1hhY1dCQVNWOHRaR1dKQUpaM1JaWEpZV0JnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjgwMjE2NjgsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
