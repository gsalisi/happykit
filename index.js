const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/dist'));


app.listen(app.get('port'),() => {
  console.log('Node app is running on port', app.get('port'));
});

