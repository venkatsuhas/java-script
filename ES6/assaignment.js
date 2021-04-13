delay=(time)=>{
    return new Promise(resolve=>setTimeout(resolve,time)
    );
}

 async function call(){
    console.log("next message come after 5 secs",new Date().toTimeString())
    await delay(5000);
    console.log("were Done",new Date().toTimeString())
}
call();