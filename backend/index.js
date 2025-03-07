const express = require('express');
const app = express();

// database connection
    const connectDB= async () => {
        try {
            await mongoose.connect()
    }

    catch (err) {
    console.log(err);
    }

}

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    })