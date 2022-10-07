import { account, message} from "./xonia.js"
// Commands for Sussy Bot
import  hellocmd  from "./sussycmds/hello"
import  nftcmd  from "./sussycmds/nft"
import  helpcmd  from "./sussycmds/help"


const susSession = async () => {
    //Provide your account sussy stuff here
    return await account.get_token("sussy@baka", "msn1234")
}

(async () => {
    const sussy_secret: any = await susSession()
    console.log("ඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞ");
    console.log("Connected Sus Bot to Xonia!");
    console.log("ඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞඞ");
    const msg: any = message;
    while (true) {
        const channel_id = "1578423740495040512"
        const info =  await msg.get(channel_id, sussy_secret)

        const text = info[0].text
        const user = info[0].user

    if(text == "/sus") {
    await hellocmd(msg, sussy_secret, user);
    }

    if(text == "/nft") {
        await nftcmd(msg, sussy_secret, user);

    }

    if(text == "/help") {
        await helpcmd(msg, sussy_secret, user);

    }
    }
})(); 

