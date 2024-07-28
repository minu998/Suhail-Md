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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94773259828";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_00_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDcsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBbFJzWnFxV245ajdSa2lySkhzd2Q5blZtaGlFSGErdjJCNThTUGtLdll3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxdVYtM3BBUlRjdVB0MEhTVTRfbkZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ3YTlhYmVlLWE1NGQtNDUyNS05YWEzLTc5ZmIzN2VjNjUxYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAyNDUsXG4gICAgICA4NCxcbiAgICAgIDE2OSxcbiAgICAgIDE0NixcbiAgICAgIDE4NyxcbiAgICAgIDE2NSxcbiAgICAgIDE3OSxcbiAgICAgIDcxLFxuICAgICAgNTYsXG4gICAgICAyMTksXG4gICAgICAxMjAsXG4gICAgICA1MyxcbiAgICAgIDE3NSxcbiAgICAgIDE4MSxcbiAgICAgIDYyLFxuICAgICAgMTMsXG4gICAgICAxOTIsXG4gICAgICA0MCxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDYsXG4gICAgICA1OCxcbiAgICAgIDYwLFxuICAgICAgNTUsXG4gICAgICAxODcsXG4gICAgICAxNjYsXG4gICAgICAyNDIsXG4gICAgICAxNjIsXG4gICAgICAyOSxcbiAgICAgIDExLFxuICAgICAgNjIsXG4gICAgICAxMDQsXG4gICAgICA2NCxcbiAgICAgIDM5LFxuICAgICAgMTgyLFxuICAgICAgMTYyLFxuICAgICAgMTIsXG4gICAgICAyMzcsXG4gICAgICAyMjUsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTWVk2U1RLNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzMyNTk4Mjg6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzQ5NTAxNDkzNjc0NDozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLekQ5NmdGRU5Eb2xyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkd2UDg2a2NHU21YQUxGZHdqSWpWUjlRR2lUUFVUYnp1ZTk3UmcxcVVtMk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWCtIODN5dHVQdlMxMkJhNi9mTXJadW4zdDIrWDF2RDc4amZFTTUzblRBVVBTYVVFcG4xbEd6OGRTdWl0eE41TVlqaFZQTFVxZnFoMXJmWkhRQmFuQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR0FNK3NLb3B2WnBuQU9sSFcwUm04K3plQWVKUUVvcEpnSkFjdkJwVGs1T01TbUs2S3AvM2dlSjk1a3VhdGZWdjBhdmFMNG9XTjhjak1EcUc5MlJDREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzMyNTk4Mjg6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTM1NjM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFFzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMUXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZbGVsUFVBanBiTEFPaDIxMnl6emlhWE5BYU9FV2ZTQXdVNDQxK3R6dDk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjgwMjE2NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3OTQ1NTgxOThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sasih",


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
