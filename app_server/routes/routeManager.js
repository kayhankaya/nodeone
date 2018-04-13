var ctrlmymodule = require('./myRouter');
var ctrlmyprofile = require('./profileRouter');
var ctrlmyadmin = require('./adminRouter');

module.exports=function(app){
    app.use('/', ctrlmymodule);
    app.use('/profile', ctrlmyprofile);
    app.use('/admin', ctrlmyadmin);
};