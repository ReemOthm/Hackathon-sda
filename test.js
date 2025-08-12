const fs = require('fs');
let dataset, queries;

fs.readFile('./Hackathon-sda/queries.txt', (err, data) => {
if (err) throw err;

    queries =  data.toString().split("\n")
    fs.readFileAsync('./Hackathon-sda/dataset.txt', (err, data) => {
    if (err) throw err;
    console.log(queries)

    dataset =  data.toString().split("\n")

    queries.sort((a,b)=> a - b)
    dataset.sort((a,b)=> a - b)

    const result =
        queries.map(i=>{
           return [i, i.includes(dataset)]
        })
    

    console.log(queries)
});
});
