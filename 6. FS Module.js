const FS = require('fs');

FS.readFile('File.txt', 'utf8', (err, data) => {
    console.log(err, data)
});



const a = FS.readFileSync('File.txt');
console.log(a.toString());


console.log("Finished Reading File");

FS.writeFile('File2.txt', "This IS Node Data 1", () => {
    console.log("Written To The File")
});

b = FS.writeFileSync('File5.txt', "This IS Node Data 2");
console.log(b);



