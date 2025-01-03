
const { buildLogger}  = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hello word!');
logger.error('Ups! something went wrong!');




/*

const getPokemonById  = require('./js-foundation/06-promises');


getPokemonById(4)
.then((pokemon) => console.log({ pokemon }))
.catch((error) => console.error( 'Por favor intente de nuevo' ))
.finally(() => console.log('Finalizado'));
;


TODO: Factory Function, inyeccion de dependencias

//const {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
//const { getUserById } = require('./js-foundation/04-arrows');
const { getUUID, getAge } = require('./plugins');
const { buildMakePerson} = require('./js-foundation/05-factory');


const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: 'John', birthdate: '1990-01-01' };

const john = makePerson(obj);

console.log({ john });




const id = 1;

TODO: funcion flecha
getUserById(id, (error, user) => {
    if (error) throw new Error(error);
    
    console.log(user);
});

TODO: funcion normal
getUserById(id, function (error, user) {
    if (error) {
        throw new Error(error);
    }

    console.log(user);
});
*/

//nsole.log('templateExport', emailTemplate);