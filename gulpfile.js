var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("copy-views", function() {
   return gulp.src(['views/**/*']).pipe(gulp.dest('out/views'));
});

gulp.task("copy-modules", function() {
   return gulp.src(['node_modules/**/*']).pipe(gulp.dest("out/node_modules"));
});

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("out"));
});