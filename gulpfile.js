// function tarea(done){
//     console.log('mi primer tarea');

//     done()
// }

// exports.tarea = tarea;



const  {src, dest, watch }  = require ("gulp");
const sass = require('gulp-sass')(require('sass'));


function css (done){

    src("src/scss/app.scss") //indentificar el archivo SASS
    .pipe( sass())  //Compilarlo
     .pipe(dest("build/css"));//Almacenar en el disco duro

done() ;   
}

function dev (done){
    watch("src/scss/app.scss", css);

    
    done();
}

exports.css = css;
exports.dev = dev;


