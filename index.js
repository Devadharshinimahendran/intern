const file=require('fs')  
let name="deva"
console.log(name);
let filedata=file.readFileSync('data.txt').toString();
console.log(filedata);
file.renameSync('data.txt','filedata.txt')
let filedata2=file.readFileSync('filedata.txt').toString();
console.log(filedata2);
file.writeFileSync('filedata.txt','this is file data wrote by Deva')
// let filedata3=file.readFileSync('filedata.txt').toString();
// console.log(filedata3);
// file.appendFileSync('filedata.txt','hello world2')
// let filedata4=file.readFileSync('filedata.txt').toString();
// console.log(filedata4);
// file.unlinkSync('filedata.txt')
// file.rmdirSync('delet')n