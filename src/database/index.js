import mongoose from "mongoose";

const configOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDB = async () => {
    const connectionUrl = "your-mongodb-url";

    mongoose
        .connect(connectionUrl, configOption)
        .then(() => console.log("Eccomerce database successfully!"))
        .catch((err) => 
            console.log(`Getting Error from DB connection ${err.message}`)
        );
};

export default connectToDB;