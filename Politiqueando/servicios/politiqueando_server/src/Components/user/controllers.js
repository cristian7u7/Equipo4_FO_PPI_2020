
const store = require("./store");

const addUser = (user) => {
    return new Promise(async (resolve, reject) => {
        if (!user) {
            reject("Invalidate");
            return false;
            console.log('hola')
        }
        let result = await store.add(user);
        if(!result.ok){
            reject(result.error);
            return false;
        }
        resolve(result.body);
    });
}

const updateUser = (id, user) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !user) {
            reject("Invalidate");
            return false;
        }
        let result = await store.updateUser(id, user);
        resolve(result);
    });
}

const getUser = (config) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(config));
    })
}

const delUser = (id) => {
    return new Promise((resolve, reject) => {
        resolve(store.del(id));
    })
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    delUser
}