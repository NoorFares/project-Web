function game() {
    const actions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const userWinResults = ['scissorspaper', 'paperrock', 'rocklizard', 'lizardspock', 'spockscissors',
    'rockscissors', 'scissorslizard', 'lizardpaper', 'paperspock', 'spockrock'];
    let userChoice = '';
    let compChoice = '';
    const userChoiceElement = document.querySelector('.user-choice');
    const pickedElement = document.querySelector('.picked');
    const userPickElement = document.querySelector('.user-pick');
    const pcPickElement = document.querySelector('.pc-pick');
    window.addEventListener('load', () => {
    
        document.querySelectorAll('.user-choice .game-card').forEach(card => {
            card.addEventListener('click', (ev) => {
                userChoice = getUserChoice(ev.target);
                compChoice = getComputerChoice();
    
                startGame();
            })
        });
       
        
        resultElement.querySelector('button').addEventListener('click', tryAgain);
    
    })
    
   
    function getUserChoice(target) {
        if (target.nodeName === 'IMG') {
            return target.parentElement.classList[1];
        }
        return target.classList[1];
    }
    
    function getComputerChoice() {
        return actions[Math.floor(Math.random() * 5)];

    }
    function buildChoiceElement(isItUserElement, className) {
        const el = document.createElement('div');
        el.classList = [`game-card ${className}`];
        el.innerHTML = `<img src="icon-${className}.svg" alt="${className}">`;
        if (isItUserElement) {
            userPickElement.append(el);
        } else {
            pcPickElement.append(el);
        }
    }
}