const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
//*01*/    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/xXCZMrs/3609.jpg' },
//*02*/    { key: 'ALIVE_MSG', value: '*Hello , I am alive now!!*' },
/*03*/    { key: 'PREFIX', value: '.' },
/*04*/    { key: 'AUTO_READ_STATUS', value: 'true' },
/*05*/    { key: 'MODE', value: 'public' },
/*06*/    { key: 'AUTO_VOICE', value: 'true' },
/*07*/    { key: 'AUTO_STICKER', value: 'true' },
/*08*/    { key: 'AUTO_REPLY', value: 'true' },
/*09*/    { key: 'ALLWAYS_OFFLINE', value: 'false' },
/*10*/    { key: 'READ_CMD', value: 'true' },
/*11*/    { key: 'RECORDING', value: 'true' },
/*12*/    { key: 'AUTO_REACT', value: 'true' },
/*13*/    { key: 'ANTI_BOT', value: 'true' },
/*14*/    { key: 'ANTI_BAD', value: 'true' },
/*15*/    { key: 'ANTI_LINK', value: 'true' },
/*16*/    { key: 'READ_MESSAGE', value: 'true' },
/*17*/    { key: 'AUTO_TYPING', value: 'true' },
/*18*/    { key: 'AUTO_STATUS_SEEN', value: 'true' },    
/*19*/    { key: 'BAD_NO_BLOCK', value: 'true' },
/*20*/    { key: 'AUTO_STATUS_REPLY', value: '`🥰𝐘𝐎𝐔𝐑 𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍 𝐁𝐘`\n\n`> *©POWERDE BY KD PANTA 00*`' },
/*21*/    { key: 'OWNER_REACT', value: 'true' },    

          
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
