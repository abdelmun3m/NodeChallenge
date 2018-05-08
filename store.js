var fs = require('fs');
var path = require('path');



var file_path = path.join(__dirname,"data.db");
//console.log(process.argv);

if(fs.existsSync(file_path)){
  let dictionary = JSON.parse(fs.readFileSync(file_path));
  switch (process.argv[2]) {
    case "list" : console.log(dictionary);
      break;
    case "add" :  dictionary[process.argv[3]] = process.argv[4] || "";
      break;
    case "get" : console.log(dictionary[process.argv[3]]);
      break;
    case "remove" :   delete(dictionary[process.argv[3]]);
      break;
    case "clear" : dictionary = {};
        break;
    default:
        console.log("Unknown input");
  }
  fs.writeFileSync(file_path,JSON.stringify(dictionary));
}else{
  console.log("not found");
}

//
// function addData(dictionary,key , value){
//
//   fs.writeFileSync(file_path,JSON.stringify(dictionary))
// }
//
//
// function removeKey(key){
//   let dictionary = readData();
//   delete(dictionary[key])
//   fs.writeFileSync(file_path,JSON.stringify(dictionary))
// }
//
//
// function getKey(key){
//   let dictionary = readData();
//   return dictionary[key]
// }
//
// function clearData(){
//   fs.writeFileSync(file_path,JSON.stringify({}));
// }
