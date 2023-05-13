const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27023/khatabook';
const connectDb = () => {
    return mongoose
        .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Database connected'))
        .catch((err) => console.error(err));
};
module.exports = connectDb;
//# sourceMappingURL=mongoconfig.js.map