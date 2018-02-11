navigator.serviceWorker.register('sw.js')
    .then(reg => {
        if (!navigator.serviceWorker) return;
        console.log('serviceWorker registered');
    }).catch(err => Console.log('something happened', err));