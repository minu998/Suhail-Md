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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_31_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgMjAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIno2aTJrQS8wUmtsSGNmcnR1ZlRoc3pTU0RpOEpsWk10THlpVTRoVnBWY0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlQtN0dLTDNDU1lpZ2N6RXJ5cVNQY2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Y3OTFiNjMtN2IxNi00YzcyLWEzMWEtZDc0MTcxMDdlNWNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDM4LFxuICAgICAgODQsXG4gICAgICAwLFxuICAgICAgMjAsXG4gICAgICA5OSxcbiAgICAgIDEwOCxcbiAgICAgIDE0OSxcbiAgICAgIDEzOCxcbiAgICAgIDE5NCxcbiAgICAgIDEwNyxcbiAgICAgIDk3LFxuICAgICAgMTIyLFxuICAgICAgMTIsXG4gICAgICAyMzcsXG4gICAgICAxNDIsXG4gICAgICA4MixcbiAgICAgIDIwLFxuICAgICAgMTUxLFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDIzNyxcbiAgICAgIDEzNCxcbiAgICAgIDE3MixcbiAgICAgIDIwMixcbiAgICAgIDE2NyxcbiAgICAgIDEzOCxcbiAgICAgIDksXG4gICAgICAxMDMsXG4gICAgICAxNjgsXG4gICAgICAyNDMsXG4gICAgICAzLFxuICAgICAgOTMsXG4gICAgICAzNixcbiAgICAgIDE4NixcbiAgICAgIDE3OSxcbiAgICAgIDEyOCxcbiAgICAgIDg5LFxuICAgICAgNTUsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKWTNZVFZHS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzMyNTk4Mjg6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNzQ5NTAxNDkzNjc0NDozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM0Q5NmdGRUxLVGw3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkd2UDg2a2NHU21YQUxGZHdqSWpWUjlRR2lUUFVUYnp1ZTk3UmcxcVVtMk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibFNoc3pUWTVqTXZhcXFhRVVGMDNmZWNKN3lrVktEdE5FSDdIOURaZ2R3cUFqRStLSk1VMlNCUW1DRDcvYVA5V1l1UkZUTUFTQlJta3YwL1VISlNZQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVFuTTRqdy96Q1IzTi82azVFTGJBOHNrOGNWcnhXUUt0UE5za2c2WkRqU0JXTTBVQWJyRE1zVFV3V0RqS01sN3RHbGY3VG00VE1VVGlMQjN2bXF0aXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzMyNTk4Mjg6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTQxMTA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFFzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMUXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZbGVsUFVBanBiTEFPaDIxMnl6emlhWE5BYU9FV2ZTQXdVNDQxK3R6dDk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjgwMjE2NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE3OTQ1NTgxOThcIn0iCn0="  // PUT your SESSION_ID 


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
