async function nftcmd(msg: any, sussy_secret: string, user: any) {    
    const channel_id = "1578423740495040512"
    await msg.send(`Grabbing for ${user.username} an wild nft!`, channel_id, sussy_secret)
    await msg.send(`Heres your NFT ${user.username}!`, channel_id, sussy_secret)
    await msg.send(`${`![]` + '(https://avatars.xoniaapp.com/' + Math.floor(Math.random() * 1000)+ 1 + ')'}`, channel_id, sussy_secret)


    console.log(user)

};



export default nftcmd

