var express = require('express');
var app = express();
var port = 3000;
var cors = require('cors');

app.use(cors());
app.use('/:id', express.static(`${__dirname}/../client/dist`));

app.all('/api/restaurant/reviews/*', (req, res) => res.redirect(`http://reviews-api.us-west-2.elasticbeanstalk.com${req.path}`));
app.all('/api/restaurant/info/*', (req, res) => res.redirect(`http://zagat-info2.us-west-1.elasticbeanstalk.com${req.path}`));
app.all('/api/restaurant/suggestions/*', (req, res) => res.redirect(`http://zagat-suggestions-dev.us-west-1.elasticbeanstalk.com${req.path}`));
app.all('/api/restaurant/carousel/*', (req, res) => res.redirect(`http://carousel-dev6.us-west-1.elasticbeanstalk.com${req.path}`));
app.all('/api/restaurant/recommendations/*', (req, res) => res.redirect(`http://rec-public-dev.us-west-1.elasticbeanstalk.com${req.path}`));

// app.use((req, res) => { 
//   console.log(req.path);
//   const restaurantId = req.path.slice(1).split('/')[0];
//   if (restaurantId === '' || (restaurantId && Number.isInteger(+restaurantId))) {
//     res.sendFile(path.join(__dirname, '../public', 'index.html'));
//   } else {
//     res.send('Error').end();
//   }
// });

app.listen(port, () => console.log("listening on", port));


