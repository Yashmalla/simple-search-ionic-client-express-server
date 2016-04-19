var httpVerbs = require('./models/httpVerbs');

module.exports = {
  configure: function(app) {
    // Get Verb
    app.get('/api/:id', function(req, res) {
      httpVerbs.get(req.params.id, res);
    });
  }
};