function computerOutput(value) {
    let ans = getRndInteger();

    let computerSelect = 1;

    if (ans == 1) {
        document.getElementById('display').innerHTML = 'stone';
        computerSelect = 1;
    } else if (ans == 2) {
        document.getElementById('display').innerHTML = 'paper';
        computerSelect = 2;
    } else if (ans == 3) {
        document.getElementById('display').innerHTML = 'scissor';
        computerSelect = 3;
    }

    if (value == 1) {
        if (computerSelect == 1) {
            document.getElementById('result').innerHTML = 'tie';
        } else if (computerSelect == 2) {
            document.getElementById('result').innerHTML = 'computer won';
        } else if (computerSelect == 3) {
            document.getElementById('result').innerHTML = 'you won';
        }
    } else if (value == 2) {
        if (computerSelect == 1) {
            document.getElementById('result').innerHTML = 'you won';
        } else if (computerSelect == 2) {
            document.getElementById('result').innerHTML = 'tie';
        } else if (computerSelect == 3) {
            document.getElementById('result').innerHTML = 'computer won';
        }
    } else if (value == 3) {
        if (computerSelect == 1) {
            document.getElementById('result').innerHTML = 'computer won';
        } else if (computerSelect == 2) {
            document.getElementById('result').innerHTML = 'you won';
        } else if (computerSelect == 3) {
            document.getElementById('result').innerHTML = 'tie';
        }
    }
}

function getRndInteger() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}