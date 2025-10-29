import mongoose from "mongoose";

export const  connectDB = async () =>{

    // await mongoose.connect('mongodb+srv://prayaas_db_user:teamPrayaas2023@cluster0.dz7togm.mongodb.netx`np/food-del').then(()=>console.log("DB Connected"));
    await mongoose.connect('mongodb+srv://prayaas_db_user:teamPrayaas2023@cluster0.dz7togm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
                        //    MONGO_URI = mongodb+srv://<username>:<password>@cluster0.dz7togm.mongodb.net/myDatabase

    
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.