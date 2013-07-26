exports.index = function(req, res){
  res.render('index', { title: 'About' });
};

exports.work = function(req, res){
  res.render('work', { title: 'Work' });
};