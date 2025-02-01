





const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') { return text === fault ? true : false; } module.exports = {


//====ඔයාගෙ අලුතෙන් ගත්ත session id එක මෙතනට දාන්න 🪄====//
SESSION_ID: process.env.SESSION_ID || "KD-PANTA-00-csRUHTwK#zAK_4D3R1Exgpmi4z3SR6No3BUH4C5yqNzqf9jqdXsM",  

//====ඔයාගෙ monhodb url එක මෙතනට දාන්න 🎇====//
MONGODB: process.env.MONGODB || "mongodb+srv://athulakumara604:qBwvqo6IM64eT1SL@cluster0.wr7rx.mongodb.net/",  

//====ඔයා ඉන්න ගෲප් වල ලින්ක් ඔටෝ ඩිලිට් වෙන්න හදාගන්න...✨
//====01. ලින්ක් ඩිලිට් වෙන්න ඕනෙ නම් 'true'
//====02. ලින්ක් ඩිලිට් වෙන්න එපා නම්  'false'
ANTI_LINK: process.env.ANTILINK || "true",

//====ඔයා ඉන්න ගෲප් වල නරක වචන ඔටෝ ඩිලිට් වෙන්න හදාගන්න...✨
//====01. නරක වචන ඩිලිට් වෙන්න ඕනෙ නම් 'true'
//====02. නරක වචන ඩිලිට් වෙන්න එපා නම්  'false'
ANTI_BAD: process.env.ANTI_BAD || "true",


DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO            
};
