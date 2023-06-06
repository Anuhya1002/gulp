to install gulp

npm install gulp -g

DEPENDENCIES DECLARATIONS

Example - gulp-imagemin (dependency)
command line (npm install gulp-imagemin --save-dev)

Add dependncies to the confugaration file
(var imagemin = require('gulp-imagemin');)

Create a task for each dependency:
gulp.task('task-name', function() {
   //do stuff here
});

(‘task-name’ is a string name and ‘function()’ performs your task)


Install different dependencies and run them in fucntion to call and run the command in temnimal as gulp watch
