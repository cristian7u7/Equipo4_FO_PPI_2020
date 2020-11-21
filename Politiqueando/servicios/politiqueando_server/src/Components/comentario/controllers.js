
const store = require("./store");

const addComentario = (comentario) => {
    return new Promise(async (resolve, reject) => {
        if (!comentario) {
            reject("Invalidate");
            return false;
        }
        let result = await store.add(comentario);
        if(!result.ok){
            reject(result.error);
            return false;
        }
        resolve(result.body);
    });
}

const updateComentario = (id, comentario) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !comentario) {
            reject("Invalidate");
            return false;
        }
        let result = await store.updateComentario(id, comentario);
        resolve(result);
    });
}

const getComentario = (config) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(config));
    })
}

const delComentario = (id) => {
    return new Promise((resolve, reject) => {
        resolve(store.del(id));
    })
}

module.exports = {
    addComentario,
    getComentario,
    updateComentario,
    delComentario
}