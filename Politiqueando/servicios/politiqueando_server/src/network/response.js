const statusMessages = {
    200 : "Done",
    201 : "Created",
    400 : "Invalid format",
    500 : "Internal error"
}

exports.success = (req, res, message, status) => {
    let statusCode = status;
    let statsMessage = message;
    if(!status){
        statusCode = 200;
    }
    if(!message){
        statusMessage = statusMessages[status];
    }
    res.status(statusCode).send({
        ok:true,
        body: statsMessage,
        status: statusCode,
        error: "",
    });
}

exports.error = (req, res, message, status) => {
    let statusCode = status;
    let statsMessage = message;
    if(!status){
        statusCode = 500;
    }
    if(!message){
        statusMessage = statusMessages[status];
    }
    res.json({
        ok:false,
        body: "",
        status: statusCode,
        error: statsMessage,
    });
}