function sendToPython() {

    var { PythonShell } = require('python-shell');
    
    // let options = {
    //     mode: 'text',
    //     args: [input.value]
    // };
    
    PythonShell.run('./Python/mkvenv.py', function (err, results) {
        console.log('results: ', results);
        result.textContent = results;
    });
}
