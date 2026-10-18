// const fs= require("fs")

// const opr= process.argv[2]


// if(opr=="write"){
//   const name=process.argv[3]
//   const path= `../curd${name}.txt`;
//   const content=process.argv[4]
//   const data=fs.writeFileSync(path,content)

//   console.log(data)

// }
// else if(opr=="read"){
//   const name=process.argv[3]
//   const path = `../curd${name}.txt`;
//   const rdata=fs.readFileSync(path,"utf-8")
//    console.log(rdata)


// }else if(opr=="update"){
//   const name=process.argv[3]
//   const path= `../curd${name}.txt`;
//   const content=process.argv[4]
//   const udata=fs.appendFileSync(path,content)
//  console.log(udata)

// }
// else if(opr=="delete"){
//   const name=process.argv[3]
//   const path= `../curd${name}.txt`;
//   const deldata=fs.unlinkSync(path)
//  console.log(deldata)

// }
// else{
//   console.log("invalid operation")
// }


const fs = require("fs");

const opr = process.argv[2];

if (opr == "write") {

    const name = process.argv[3];
    const path = `../curd/${name}.txt`;
    const content = process.argv[4];

    fs.writeFileSync(path, content);

    console.log("File created successfully");

}
else if (opr == "read") {

    const name = process.argv[3];
    const path = `../curd/${name}.txt`;

    const rdata = fs.readFileSync(path, "utf-8");

    console.log(rdata);

}
else if (opr == "update") {

    const name = process.argv[3];
    const path = `../curd/${name}.txt`;
    const content = process.argv[4];

    fs.writeFileSync(path, content);

    console.log("File updated successfully");

}
else if (opr == "delete") {

    const name = process.argv[3];
    const path = `../curd/${name}.txt`;

    fs.unlinkSync(path);

    console.log("File deleted successfully");

}
else {

    console.log("Invalid operation");

}