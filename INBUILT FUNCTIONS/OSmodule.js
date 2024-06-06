const os=require("os");

//info about current user
const user=os.userInfo();
console.log(user);
console.log(`The system uptime is ${os.uptime} msseconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);