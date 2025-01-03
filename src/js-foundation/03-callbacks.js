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



function getUserById(id, callback) {
   const user = users.find( function(user){
        return user.id === id;
    });
   if(!user){
       return callback(`User not found with id ${id}`);
   }
    callback(null, user);
}

//getUserById(2);  // { id: 1, name: 'John', surname: 'Doe', age: 25 }
//getUserById(1);  // { id: 2, name: 'Rodrigo', surname: 'Bak', age: 32 }

module.exports = {
    getUserById,
}