const Path = require('path');


const BaseName = Path.basename('C:\\temp\\myfile.html');
const DirName = Path.dirname('C:\\temp\\myfile.html');
console.log(BaseName);
console.log(DirName);




const FileExtension = Path.extname(__filename)
console.log(__filename, FileExtension);

