const express = require('express');

const app = express();


// * ruta de inicio
app.get('/', (req, res)=>{
   res.send('Hola mundo');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('App listening on port 3000!');
});