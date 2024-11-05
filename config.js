const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349067353975";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_19_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDc2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRXN6d1luaDRFZXkvcUNvZDVXSG45MmZUUDNzMjhWVVpNQnR1UnRpaDdQST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDY3MzUzOTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMUFBMzhGQ0ZBNDA1MkZBREIxM0Q4RTQ0RUVCMTQyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3OTgzNTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRXZZRTExbklUNWFIYUQxdjRndmVsZ1wiLFxuICBcInBob25lSWRcIjogXCI5YmI1Zjc2MC04YjAyLTQxZjItYjVjMS04NTA2NTdkZjcwM2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICA0LFxuICAgICAgNzUsXG4gICAgICAyNDEsXG4gICAgICA5MCxcbiAgICAgIDE5MSxcbiAgICAgIDE2NSxcbiAgICAgIDEyMyxcbiAgICAgIDgxLFxuICAgICAgMTI3LFxuICAgICAgMjIsXG4gICAgICAxNDgsXG4gICAgICAyNDIsXG4gICAgICAxOCxcbiAgICAgIDE5OCxcbiAgICAgIDIzMixcbiAgICAgIDE2MSxcbiAgICAgIDI0NyxcbiAgICAgIDExNixcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMTksXG4gICAgICAxMTgsXG4gICAgICA3MSxcbiAgICAgIDcxLFxuICAgICAgNDMsXG4gICAgICA2OSxcbiAgICAgIDQyLFxuICAgICAgMTkxLFxuICAgICAgMTY1LFxuICAgICAgOTUsXG4gICAgICAxMDgsXG4gICAgICAyNTIsXG4gICAgICA2NCxcbiAgICAgIDI1MyxcbiAgICAgIDE2NyxcbiAgICAgIDM0LFxuICAgICAgNzksXG4gICAgICAxNTksXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDVSTENKNUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjczNTM5NzU6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInRyZWF0cyBieSBtZWVuYWhcIixcbiAgICBcImxpZFwiOiBcIjI2Nzg2ODU1MzkwODM3NTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002aXQrVUJFSWpHcDdrR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUxUZ2FselZCa244L3pQUmpwdFpVbEw3SmZSQkxBVmdsdi9BQ3ZFZzZqOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3bDZvM01PQkwwRmFJR2taclJnbE5jMzZaTjh6dlZzYjNjNDJsT2dUa0NCS09uUWsyeXdybFV2U3FjVktVdElSRlV6VjZTalIzS2FLSDRyQmFPVDBDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1dVZKUlFNN0lwN1d4U21xQ3FsUmNhb1RIQ0pwTk9EcjZ3NkNaSFVjanhNYm1ZMVg1RGl1WFVwVXJFODZZYlJrNkJFN0R5NzlIR28wN3pMdUlBRGtBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY3MzUzOTc1OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzk4MzQ4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHFXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMcVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoSlNFa2ZnY3hxemU2QlROeE1FQmdFVDNrNjd6dU5DeUJVUWtXRHY3MWM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ4MTE1MzM1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5MDQxNzM2MzExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
