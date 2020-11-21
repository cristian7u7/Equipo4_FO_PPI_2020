
const store = require("./store");

const addGusta = (gusta) => {
    return new Promise(async (resolve, reject) => {
        if (!gusta) {
            reject("Invalidate");
            return false;
        }
        let result = await store.add(gusta);
        if(!result.ok){
            reject(result.error);
            return false;
        }
        resolve(result.body);
    });
}

const updateGusta = (id, gusta) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !gusta) {
            reject("Invalidate");
            return false;
        }
        let result = await store.updateGusta(id, gusta);
        resolve(result);
    });
}

const getGusta = (id) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(id));
    })
}

const delGusta = (id) => {
    return new Promise((resolve, reject) => {
        resolve(store.del(id));
    })
}

module.exports = {
    addGusta,
    getGusta,
    updateGusta,
    delGusta
}