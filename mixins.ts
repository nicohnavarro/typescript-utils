function myLogFunction(){
  return(str:string) =>{
    console.log(str);
  }
}

const logger = myLogFunction();
logger('Hakuna matata');

// Function creating a Class 👀

function createLoggerClass(){
  return class MyLoggerClass{
    private completeLog:string ='';
    log(str:string){
      console.log(str);
      this.completeLog += str + '\n';
    }
    dumpLog(){
      return this.completeLog;
    }
  }
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();

logger2.log('First Log');
logger2.log('Second Log');
console.log(logger2.dumpLog());
