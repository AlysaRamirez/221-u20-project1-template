const express = require('express')
var bodyParser = require('body-parser');
const app = express();
app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

var colors = require ('./controllers/userController');

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
    .get(colors.getColors)
    .post(colors.saveColors)
}) 

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
    .get(colors.getColors)
    .delete(colors.deleteColors)
    .patch(colors.updateColors)
    .post(colors.saveColors)
}) 


app.listen(1337, () => console.log('Listening on port 1337.'))
