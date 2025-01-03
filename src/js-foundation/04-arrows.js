const users = [
    {
        id: 1,
        name: 'John',
        surname: 'Doe',
        age: 25,
    },
    {
        id: 2,
        name: 'Rodrigo',
        surname: 'Bak',
        age: 32,
    },
];

//TODO: Funcion flecha
function getUserById(id, callback) {
    const user = users.find((user) => user.id === id);

    return user ? callback(null, user) : callback(`User not found with id ${id}`);


}


/*
TODO: Funcion normal
function getUserById(id, callback) {
   const user = users.find( function(user){
        return user.id === id;
    });
   if(!user){
       return callback(`User not found with id ${id}`);
   }
    callback(null, user);
}
*/



module.exports = {
    getUserById,
}