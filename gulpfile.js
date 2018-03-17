const gulp = require("gulp");
const ts = require("gulp-typescript");
const runSequence = require("run-sequence");
const tsProject = ts.createProject("tsconfig.json");
const tslint = require("gulp-tslint");

gulp.task("tslint", () =>
    gulp.src(["src/**/*.ts", "!src/**/*.d.ts"])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
);

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("out"));
});

gulp.task("watch", function() {
    return gulp.watch("src/server/**/*.ts", ["compile"]);
});

gulp.task("default", () => runSequence("tslint", "compile", "watch"));