import "dotenv/config";
import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.set('view engine', 'ejs');
app.use('/statics', express.static('statics'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render("index", {
        client_id: process.env.GG_CLIENT_ID,
        gg_scope: process.env.GG_SOPCE,
    });
})

app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
});
