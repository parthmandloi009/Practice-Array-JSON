
async function init() {
  

    for(let i=0;i<10;i++){
        await sleep(2000);
        console.log(i);
    }
  }
  
  function sleep(ms) {
    return new Promise((resolve) => {
      setInterval(resolve, ms);
    });
  }

  init();