
const users = [
  {
    name: "Amul",
    age: 19,
    email: "amul@example.com"
  },
  {
    name: "Rahul",
    age: 20,
    email: "rahul@example.com"
  },
  {
    name: "Amit",
    age: 21,
    email: "amit@example.com"
  },
  {
    name: "Rohit",
    age: 22,
    email: "rohit@example.com"
  },
  {
    name: "Ankit",
    age: 19,
    email: "ankit@example.com"
  },
  {
    name: "Vikash",
    age: 20,
    email: "vikash@example.com"
  },
  {
    name: "Karan",
    age: 23,
    email: "karan@example.com"
  },
  {
    name: "Aditya",
    age: 21,
    email: "aditya@example.com"
  },
  {
    name: "Saurabh",
    age: 22,
    email: "saurabh@example.com"
  },
  {
    name: "Arjun",
    age: 20,
    email: "arjun@example.com"
  }
];


const https=require('http')

https.createServer((req,resp)=>{
  resp.setHeader("Content-Type","application/json")
  resp.write(JSON.stringify(users))
  resp.end()
}).listen(5000)