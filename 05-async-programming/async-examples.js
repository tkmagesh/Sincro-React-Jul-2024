(() => {
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@service] returning the result`);
        return result
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`);
        const result = addSync(x,y)
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsyncCallback(x, y, callbackFn) {
      console.log(`   [@service] processing ${x} and ${y}`);
      setTimeout(() => {
        const result = x + y;
        console.log(`   [@service] returning the result`);
        callbackFn(result);
      }, 5000);
    }

    function addAsyncCallbackClient(x, y) {
      console.log(`[@client] invoking the service`);
      addAsyncCallback(x, y, function (result) {
        console.log(`[@client] result = ${result}`);
      });
    }

    window["addAsyncCallbackClient"] = addAsyncCallbackClient;

    function addAsyncPromise(x, y) {
      console.log(`   [@service] processing ${x} and ${y}`);
      const p = new Promise(function(resolve, reject){
        setTimeout(() => {
          const result = x + y;
          console.log(`   [@service] returning the result`);
          resolve(result);
        }, 5000);
      })
      return p;
    }

    function addSyncClient(x, y) {
      console.log(`[@client] invoking the service`);
      const result = addSync(x, y);
      console.log(`[@client] result = ${result}`);
    }

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        const p = addAsyncPromise(100, 200);
        p.then(function (result) {
          console.log(`[@client] result = ${result}`);
        });
    } 
    */
   async function addAsyncPromiseClient(x, y) {
     console.log(`[@client] invoking the service`);
     const result = await addAsyncPromise(x, y);
     console.log(`[@client] result = ${result}`);
     const doubleResult = result * 2
     return doubleResult
   }

    window["addAsyncPromiseClient"] = addAsyncPromiseClient;
})()