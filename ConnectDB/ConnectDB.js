const mongoose = require('mongoose')


exports.ConnectDB = async () => {
    // try {
    //     const db = await mongoose.connect(`mongodb+srv://mfk:test123@portfolio.lsuj3bc.mongodb.net/Blogging_App?retryWrites=true&w=majority&appName=Portfolio`)

    //     console.log(`DB Connected`)
    //     return db;

    // } catch (error) {
    //     return console.log('error connecting db', error.message);
    // }

    mongoose.connect(`mongodb+srv://mfk:test123@portfolio.lsuj3bc.mongodb.net/Blogging_App?retryWrites=true&w=majority&appName=Portfolio`)
        .then((db) => db)
        .catch((err) => console.log(err.message));
}

// export {ConnectDB}