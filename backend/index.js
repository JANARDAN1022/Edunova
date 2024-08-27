require('dotenv').config({path:"C:/Users/janar/OneDrive/Desktop/Edunova/backend/config/config.env"});
const app = require('./app.js');

require('./config/database.js');



const Port = process.env.PORT || 4000;
const HostName = process.env.HOSTNAME;

app.listen(Port, HostName, (err) => {
  if (err) throw err;
  console.log(`Server is Running at http://${HostName}:${Port}`);
})

