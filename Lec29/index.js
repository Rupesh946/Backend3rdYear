// const { PrismaClient } = require("./generated/prisma");
// const prisma = new PrismaClient()
// async function addUser(email, name, password) {
//     const user = await prisma.user.create({
//         data: {
//             email,
//             name,
//             password
//         }
//     })
//     return user
// }
// // addUser("rg@gmail.com", "Tuar", "124")
// //     .then((data) => {
// //         console.log(data);
// //     })
// //     .catch((err) => {
// //         console.log(err.message);
// //     })

// async function addTweet(content,userId){
//     await prisma.tweet.create({
//         data:{
//             content:content,
//             userId:userId
//         }
//     })
// }
// // addTweet("my first tweet",1)
// // .then(()=> console.log("tweet added successfully"))
// // .catch((err)=>console.log(err.message));

// //find all tweet by user who's id is 1;
// async function getUserTweet(userId){
//     let tweets =await prisma.tweet.findMany({
//         where:{
//             userId:Number(userId)
//         }
    
//     })
//     return tweets;
// }
// // getUserTweet(1)
// // .then((data)=>console.log(data))
// // .catch((err)=>console.log(err.message));

// //user who's id is 1 wants to update his tweet --> tweet id is 1
// // async function updateTweet(tweetId,userId,updatedContent){
// //     let tweet=await prisma.tweet.findUnique({
// //         where:{
// //             id:Number(tweetId)
// //         }

// //     })
// //     if(!tweet){
// //         return "tweet not found"
// //     }
// //     if(tweet.userId!==Number(userId)){
// //         return "user can not update this tweet"
// //     }
// //     await prisma.tweet.update({
// //         where:{
// //             id:Number(tweetId)
// //         },
// //         data:{
// //             content:updatedContent
// //         }
// //     })

// // }
// // updateTweet("1","1","update tweet")
// // .then(()=>{
// //     console.log("tweet updated successfully")
// // })
// //create a function to delete user by id;
// async function deleteUser(userId) {
//     const user = await prisma.user.findUnique({
//         where: { id: Number(userId) }
//     });
//     if (!user) {
//         return "user not found";
//     }
//     await prisma.tweet.deleteMany({
//         where: { userId: Number(userId) }
//     });
//     await prisma.user.delete({
//         where: { id: Number(userId) }
//     });
//     return "User deleted successfully";
    
// }
// deleteUser(1)
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err.message))

// index.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function addUser(name, email) {
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    console.log('User added:', user);
  } catch (error) {
    console.error('Error adding user:', error.message);
  }
}

async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      select: { name: true, email: true },
    });
    console.log('All users:', users);
    return users;
  } catch (error) {
    console.error('Error reading users:', error.message);
  }
}

async function main() {
  await addUser('John Doe', 'john@example.com');
  await getAllUsers();
}

main()
  .catch((err) => console.error(err))
  .finally(async () => {
    await prisma.$disconnect();
  });
 