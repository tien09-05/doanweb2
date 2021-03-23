const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tien09-05:123123123@cluster0.a8vpf.mongodb.net/shopwatch?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect fail");
    }
}


module.exports = { connect };

