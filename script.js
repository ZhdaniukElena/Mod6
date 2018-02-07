

let question, min, max, startPrompt, checkPositive = true;
const arrTask = [];


const keyTrainer = {
    chars: [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'
        ],
    charCount: {
        setCharCount: function () {
            question = prompt('Введите кол-во символов', '');
            return this;
        },
        checkPositiveInteger: function(q) {
            if(q === null) {
                return checkPositive = false;
            };
            while(!(parseInt(q) == q && q > 0 && q !== null)) {
                return this.setCharCount();
            };
        }
    },
    task: {
        createTask: function() {
            if(checkPositive) {
                min = 0, max = keyTrainer.chars.length;
                let length = parseInt(question);
                for(let i = 0; i < length; i++) {
                    let k = Math.floor(Math.random() * (max - min)) + min;
                    arrTask.push(keyTrainer.chars[k]);
                };

                return this;
            } else return;

        },
        startTask: function() {
            if(checkPositive) {
            return startPrompt = prompt(`Введите строку: ${arrTask.join('')}`, '');
            } else return;
        }
    },
    userInPut: startPrompt,
    userErrors: function() {
        if(checkPositive) {
            let counter = 0;
            for(let i = 0; i < arrTask.length; i++) {
                if(arrTask[i] !== startPrompt[i]) {
                    counter++;
                };
            };

            if(counter === 0) {
                return console.log('Поздравляем, у Вас 0 ошибок!');
            } else {
                return console.log(`У Вас ${counter} ошибок. Попробуйте еще раз, у Вас все получится!`);
            };

        } else return;
    }
}
keyTrainer
    .charCount
    .setCharCount()
    .checkPositiveInteger(question);

keyTrainer
    .task
    .createTask()
    .startTask();

keyTrainer
    .userErrors()