import express from 'express'; 
import path from 'path';
import open from'open';

const port = 3000;
const app = express();
// now when you put babel in front of your scripts in package.json you are enable to use ES6code in your files

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})