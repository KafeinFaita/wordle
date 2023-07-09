const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT);
})

app.get('/', (req, res) => {
    res.send('HELLO')
})