const fs=require('fs');

fs.readFile('./people.js', (err, data)=>
{
    if (err){
        console.log(err);
    }
    console.log(data.toString());

});