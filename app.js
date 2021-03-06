const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch(comando){
    case 'crear':
        console.log('Crear tarea por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break
    case 'listar':
        console.log('Listar tareas por hacer');
        let listado = porHacer.listar();
        for(let tarea of listado){
            console.log('======Por hacer====='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('======Por hacer====='.green);
        }
        break
    case 'actualizar':
        console.log('Actualizar tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break
    case 'borrar':
        console.log('Borrar tarea por hacer');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break
    default:
        console.log('Comando no reconocido');
}