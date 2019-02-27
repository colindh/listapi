let express = require('express');
let listRouter = require('./js/server/listRouter');

let server = (function(){
  let app = express();

  app.use(express.static('public'));

  app.use('/api/list', listRouter);

  app.listen(3000);
})();
