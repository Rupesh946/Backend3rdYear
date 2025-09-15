const{PrismaClient}=require('./generated/prisma')
const prisma =new PrismaClient();
async function addUser(email,name,password){
await prisma.user.create({data: {
    email: email,
    name: name,
    password: password
}})}
// addUser("rupesh@gmail.com","zrupesh","1234")
// .then(()=>{
//     console.log("user added")
// })
async function getAllUsers(){
    let allUser = await prisma.user.findMany();
    return allUser;
}
getAllUsers()
.then((data)=>{
    console.log(data)
})