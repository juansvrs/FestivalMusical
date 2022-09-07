const{src,dest,watch} = require("gulp");
const sass= require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
//Hola te felicito que  bien actuas!
function css(done){
    src('src/scss/**/*.scss').
        pipe(plumber()).
            pipe(sass()).
                 pipe(dest("build/css"));
    done();
}
function dev(done){
    watch('src/scss/**/*.scss',css)
    done();
}
function tarea(done){
    console.log("Mi primer tarea aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    done();
}
//hola

exports.tarea=tarea;
exports.css=css;
exports.dev=dev;