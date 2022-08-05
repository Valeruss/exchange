const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req: any, res: any) => {
    res.send('Its on!');
})

app.listen(PORT, () => {
    try {
        console.log(`The application is listening on port ${PORT}!`);
    } catch (error) {
        console.log(error);
    }
});
