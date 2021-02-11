const express =  require('express');
const path = require('path');

const app=express();

app.use(express.static(__dirname+'/dist/PlantillaPdf'));
app.get('/*',function (req,res) {
    res.sendFile(path.join(__dirname+'/dist/PlantillaPdf/index.html'));
})
app.listen(process.env.PORT || 8080);