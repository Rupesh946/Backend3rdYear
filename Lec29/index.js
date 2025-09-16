const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient()
async function addUser(email, name, password) {
    const user = await prisma.user.create({
        data: {
            email,
            name,
            password
        }
    })
    return user
}
addUser("rup@gmail.com", "Tusssaaa", "124")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    })

async function addTweet(content,userId){
    await prisma.tweet.create({
        data:{
            content:content,
            userId:userId
        }
        
    })
}
// addTweet("my first tweet",1)
// .then(()=> console.log("tweet added successfully"))
// .catch((err)=>console.log(err.message));

//find all tweet by user who's id is 1;
async function getUserTweet(userId){
    let tweets =await prisma.tweet.findMany({
        where:{
            userId:Number(userId)
        }
    
    })
    return tweets;
}
getUserTweet(1)
.then((data)=>console.log(data))
.catch((err)=>console.log(err.message));

function updateTweet(tweetid, userId,updatedContent){
    let tweet = await prisma.tweet.findUnique({
        where:{
        id:Number(tweetid)
    }})
id((!tweet){
    return "tweet does not exsist"
})}
