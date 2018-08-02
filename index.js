const mongoose = require('mongoose');

// Make sure we are running node version 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if(major < 7 || (major === 7 && minor <= 5)) {
  console.log("You are using an older version of node that does not support the latest greatest feature we are going to use");
  process.exit();
}

//import environment varibales
require('dotenv').config({ path: '.env'});

//Connect to our Database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.promise = global.Promise;
mongoose.connection.on('error', err => {
  console.error(err.message);
});

// Import models
require('./models/RSI');
require('./models/HQBranch');
require('./models/Company');

//Start App
const app = require('./app');
app.set('port', process.env.PORT || 9090);
const server = app.listen(app.get('port'), () => {
  console.log(`Server running on PORT ${server.address().port}`);
});