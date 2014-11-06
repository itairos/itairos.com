exports.about = function(req, res){
  res.render('about', { title: 'Itai Rosenberger' });
};

exports.projects = function(req, res){
  res.render('projects', { title: 'Itai Rosenberger &middot Projects' });
};