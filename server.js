const express = require('express');

const application = express();

application.get('*', (request, respons, next) => {
    next();
});


application.listen(8080, ()=> {
    console.log('Hier is poort ' + 8080)

});

module.exports = application;