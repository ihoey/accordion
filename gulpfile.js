var gulp = require("gulp"),
    less = require("gulp-less"),
    rename = require("gulp-rename")

gulp.task("less", function() {
    gulp.src("./index.less")
        .pipe(less())
        .pipe(rename("main.css"))
        .pipe(gulp.dest("./"))
})
