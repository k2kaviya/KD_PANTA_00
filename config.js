
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KD-PANTA-00-csRUHTwK#zAK_4D3R1Exgpmi4z3SR6No3BUH4C5yqNzqf9jqdXsM",  
MONGODB: process.env.MONGODB || "mongodb+srv://athulakumara604:qBwvqo6IM64eT1SL@cluster0.wr7rx.mongodb.net/",  
ANTI_LINK: process.env.ANTILINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
//AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "true",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO            
};
