Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            data,
            currentIndex: 0,
            userMessage: '',
            cpuMessage: ['Si', 'No', 'Okay', 'Non me lo ricordo', 'Certo!', 'Certo che no',],
        },
        methods: {
            randomiseNumber(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            },
            /*             printCpuMessage() {
                            let number = this.randomiseNumber(0, this.cpuMessage.length);
                            return `<div class="col-3 bg-color-white px-3 py-2 b-radius-10"><div>${this.cpuMessage[number]}</div><div class="font-11 text-end color-grey">27/08/21 10:21</div></div>`;
                        }, */
            /*             printMessage(index) {
                            if (this.currentIndex === index) {
                                this.printUserMessage += `<div class="col-3 bg-color-light-green px-3 py-2 ms-auto b-radius-10"><div>${this.userMessage}</div><div class="font-11 text-end color-grey">27/08/21 10:21</div></div>`;
                                this.printUserMessage += this.printCpuMessage();
                            }
                        },
                    }, */
        }
    });