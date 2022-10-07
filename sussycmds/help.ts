async function helpcmd(msg: any, sussy_secret: string, user: any) {    
    const channel_id = "1578423740495040512"
    await msg.send(`Thank you ${user.username}! for trying me ;)`, channel_id, sussy_secret)
    await msg.send(`Commands [Alpha]`, channel_id, sussy_secret)
    await msg.send(`/nft and /sus and /copy`, channel_id, sussy_secret)
    await msg.send(`Huge thanks to Aelpxy for all the help making Sus Bot!`, channel_id, sussy_secret)
    await msg.send(`Debug Info: ID > ${user.id}, User Creation Date > ${user.createdAt}`, channel_id, sussy_secret)



    console.log(user)

};



export default helpcmd

