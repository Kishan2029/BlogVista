const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        mongoose.connect(
            process.env.MONGODB_URL,
            {
                useNewUrlParser: true,
                // useFindAndModify: false,
                useUnifiedTopology: true
            }
        );
        console.log("BlogVista database Connected....");
    } catch (err) {
        console.error(err.message);
        // Exit Process with failure
        process.exit(1);
    }

}

module.exports = connectDB;
