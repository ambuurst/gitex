const express = require('express');

const application = express();

application.all('*', (request, respons, next) => {
    next();
});

application.get('/hello', (request, respons, next) =>
{
    respons.status(200).json({
        'msg': 'Hello JEDI\'s'
    });
});

const port = process.env.PORT;
application.listen(port, ()=> {
    console.log('Hier is poort ' + port)

});

module.exports = application;