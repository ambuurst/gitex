const express = require('express');

const application = express();

application.get('*', (request, respons, next) => {
    next();
});

const port = 8080;
application.listen(port, ()=> {
    console.log('Hier is poort ' + port)

});

module.exports = application;