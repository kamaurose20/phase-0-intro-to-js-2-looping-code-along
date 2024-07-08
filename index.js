function writeCards(names,eventName){
    const message = []
    for (let i=0;i<names.length; i++){
      message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return message;
}
function countDown(number) {
   let i =number
   while(i >=0){
    console.log(i);
    i--;
   }
}

