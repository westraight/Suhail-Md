const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://thembasakala98:themba2006@cluster0.zft1ycs.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Zambia";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "We Straight 🔞🖤"
 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260765199175";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_59_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICA0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9mYTBkUGFWdHV2TDczSEEvOTdzczFJVEJ0K1hoeldCd1RKeG8wZW9yQ2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZpUUF5eXdHUXhHQUwxS1RKb2w4NlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzBjZGEyNTQtNzRlMi00YTU5LWE2OGEtZjUzODU4Y2ZjMTQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMjA2LFxuICAgICAgMTUwLFxuICAgICAgMTU0LFxuICAgICAgNjAsXG4gICAgICAzOSxcbiAgICAgIDk1LFxuICAgICAgMTkzLFxuICAgICAgMTY0LFxuICAgICAgMjU1LFxuICAgICAgMTU1LFxuICAgICAgMjU0LFxuICAgICAgMTQ4LFxuICAgICAgMTA1LFxuICAgICAgNjksXG4gICAgICA1NSxcbiAgICAgIDEwMCxcbiAgICAgIDI3LFxuICAgICAgNzAsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDEzNixcbiAgICAgIDM0LFxuICAgICAgNDUsXG4gICAgICAyNyxcbiAgICAgIDE1MixcbiAgICAgIDEzNCxcbiAgICAgIDE0MyxcbiAgICAgIDE3MCxcbiAgICAgIDYxLFxuICAgICAgNTksXG4gICAgICAyNDksXG4gICAgICAxMDcsXG4gICAgICAxODIsXG4gICAgICAxNTcsXG4gICAgICA3NyxcbiAgICAgIDM4LFxuICAgICAgNTYsXG4gICAgICAxNDYsXG4gICAgICAyMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTU1WNURMWVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDc2NTE5OTE3NTo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM4MDEwNjAzNTgxNTEzOjY0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04zL25zOENFTyt0b3JRR0dBb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSXRyZE5zaVBiVlVHTUNDNklpMjh3OFM5U0lZU2o5bWRMZ0FhT3ZuVmYzWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHQVJPQTlGcGp1YmhaUHdMdG1Sc2Z0c205L29jZmhjcXJYWWlaSXc0RzVoeTNBN3ArVFhGcXBzNk9tVTkxYzRQSmkzOFdDT25uQmhjaWwrOTZnN09Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzbkVkZkRKVFJodStvbjFNcW1tMDdIRDhFT1hBMm9CWXFvWTRPbHg0T1g5Vy8wcHdPeTNBNnkwNnZzM2dxQWJWUVdvamxxYTRrN1FNSElHcG5UUVpCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA3NjUxOTkxNzU6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDIyNzU3M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "We Straight 🔞🖤" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "We Straight 🔞❤️",
  ownername:process.env.OWNER_NAME|| "4L Draco❤️🔞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
