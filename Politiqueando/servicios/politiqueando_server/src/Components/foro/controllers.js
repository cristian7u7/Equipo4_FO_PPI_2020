
const store = require("./store");

const addForo = (foro) => {
    return new Promise(async (resolve, reject) => {
        if (!foro) {
            reject("Invalidate");
            return false;
        }
        let result = await store.add(foro);
        if(!result.ok){
            reject(result.error);
            return false;
        }
        resolve(result.body);
    });
}

const updateForo = (id, foro) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !foro) {
            reject("Invalidate");
            return false;
        }
        let result = await store.updateForo(id, foro);
        resolve(result);
    });
}

const getForo = (config) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(config));
    })
}

const delForo = (id) => {
    return new Promise((resolve, reject) => {
        resolve(store.del(id));
    })
}

module.exports = {
    addForo,
    getForo,
    updateForo,
    delForo
}