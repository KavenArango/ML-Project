
function sendToPython() {

    var { PythonShell } = require('python-shell');

    let options = {
        mode: 'button'
        
    };

    PythonShell.run('./Python/mkvenv.py', options, function (err, results) {
        if (err) throw err;
        
        // results is an array consisting of messages collected during execution
        console.log('results: ', results);
        result.textContent = results;
    });

}


python.addEventListener('click', () => {
    sendToPython()
});


python.dispatchEvent(new Event('click'))


























// function sendToPython() {
//     console.log("the button works")
//     const spawn = require('child_process').spawn;
//     const python = spawn('python', ['./Python/mkvenv.py']);

//     testpython.value = "HANG ON..."

//     python.stdout.on('data', function (data) {
//         console.log("Python response: ", data.toString('utf8'));
//         result.textContent = data.toString('utf8');
//     });

//     python.stderr.on('data', (data) => {
//         console.error(`stderr: ${data}`);
//     });

//     python.on('close', (code) => {
//         console.log(`child process exited with code ${code}`);
//     });

// }



// python.addEventListener('click', () => {
//     const spawn = require('child_process').spawn;
//     const python = spawn('python', ['./Python/mkvenv.py']);

//     console.log("the button works")

//     testpython.value = "HANG ON..."

//     python.stdout.on('data', function (data) {
//         console.log("Python response: ", data.toString('utf8'));
//         result.textContent = data.toString('utf8');
//     });


//     python.stderr.on('data', (data) => {
//         console.error(`stderr: ${data}`);
//     });

//     python.on('close', (code) => {
//         console.log(`child process exited with code ${code}`);
//     });


// });


// python.dispatchEvent(new Event('click'));
