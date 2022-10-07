async function hellocmd(msg: any, sussy_secret: string, user: any) {    
    const channel_id = "1578423740495040512"
    await msg.send(`Hey sussy baka ${user.username}! \n sussy boi`, channel_id, sussy_secret)
    await msg.send(`Heres your NFT ${user.username}!`, channel_id, sussy_secret)
    await msg.send(`![](${user.image})`, channel_id, sussy_secret)


    console.log(user)

};



export default hellocmd

