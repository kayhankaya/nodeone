var ctrlmymodule = require('./myRouter');
var ctrlmyprofile = require('./profileRouter');

module.exports=function(app){
    app.use('/', ctrlmymodule);
    app.use('/profile', ctrlmyprofile);
};