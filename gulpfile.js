const gulp = require("gulp");
const ts = require("gulp-typescript");
const runSequence = require("run-sequence");
const tslint = require("gulp-tslint");
const sourcemaps = require("gulp-sourcemaps");
const mocha = require("gulp-mocha");
const cleanCompiledTypeScript = require("gulp-clean-compiled-typescript");
const del = require("del");

gulp.task("tslint", () =>
    gulp.src(["src/**/*.ts", "!src/**/*.d.ts"])
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
);

gulp.task("clean-compiled-typescript", () => {
    return gulp.src(["src/**/*.ts"])
        .pipe(cleanCompiledTypeScript());
});

gulp.task("clean", ["clean-compiled-typescript"], () => {
    return del(["./out"]);
});

gulp.task("unit-test", () => {
    runSequence("compile", "test-server");
});

gulp.task("test-server", () => {
    return gulp.src(["out/tests/**/*.js"])
        .pipe(mocha({reporter: "spec", timeout: 20000}))
        .once("error", (err) => {
            console.log(err);
            process.exit(1);
        })
        .once("end", () => {
            process.exit();
        })
});

gulp.task("compile", function () {
    let errors = false;
    const tsProject = ts.createProject("tsconfig.json");
    return gulp.src(["src/**/*.ts", "!src/client/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .on("error", function() { errors = true; })
        .on("end", function() { if (errors) process.exit(1);})
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./out"));
});

gulp.task("watch", function() {
    return gulp.watch("src/server/**/*.ts", ["compile"]);
});

gulp.task("default", () => runSequence("tslint", "compile", "watch"));