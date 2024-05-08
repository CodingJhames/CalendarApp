

// db user: mern_user
// db pass: ewmNcAVMBd8Ilk3y

const mongoose = require('mongoose');

const db_connection = async() => {

    try {
        
        await mongoose.connect( process.env.DB_CNN );

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la DB');
    }

};

module.exports = {
    db_connection,
}