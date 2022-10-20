const xlsx = require('xlsx');
const file = './retornoprodutosupervi.xlsx';
const express = require ('express');
const app = express();
const port = 2000;
const _ = require('lodash');

app.get('/', (req, res) => {
    const wb = xlsx.readFile(file);
    const ws = wb.Sheets["RETORNO"];
    const data = xlsx.utils.sheet_to_json(ws);

    console.log(data);

    res.send(data);
})

app.listen(port, () => {
    console.log(`App listening on port ${ port }`)
})


//https://www.youtube.com/watch?v=OmlnXrG9PlU
//https://www.youtube.com/watch?v=7v35qj2_H-g