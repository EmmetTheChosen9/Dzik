let score = 0;
        let lives = 3;
        let currentNumber = 1;
        let intervalTime = 3000; 
        let intervalId;

        const dzikImage = document.getElementById('dzik-img');
        const scoreDisplay = document.getElementById('score');
        const livesDisplay = document.getElementById('lives');
        const infoDisplay = document.getElementById('info');
        const gameOverDisplay = document.getElementById('game-over');

        function isSpecialNumber(number) {
            return number % 7 === 0 || number.toString().includes('7');
        }

        function updateGame() {
            if (lives <= 0) {
                gameOverDisplay.style.display = 'block';
                dzikImage.style.pointerEvents = 'none'; 
                clearInterval(intervalId); 
                return;
            }
            infoDisplay.textContent = `Aktualna liczba: ${currentNumber}`;
        }

        dzikImage.addEventListener('click', () => {
            if (lives > 0) {
                if (isSpecialNumber(currentNumber)) {
                    score++;
                    scoreDisplay.textContent = score;
                } else {
                    lives--;
                    livesDisplay.textContent = lives;
                }

                currentNumber++;
                updateGame();
            }
        });

        function updateInterval() {
            
            currentNumber++;
            updateGame();

            
            intervalTime = intervalTime * 0.97;
            clearInterval(intervalId); 
            intervalId = setInterval(updateInterval, intervalTime); 
        }

        
        intervalId = setInterval(updateInterval, intervalTime);

        updateGame();
