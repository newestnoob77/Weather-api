import redis from 'redis'
export const client =redis.createClient({
    url: "redis://localhost:6379"
});
client.connect()
client.on("error",(err)=>{
    console.log("Redis Error",err);
})