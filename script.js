Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            data,
            currentIndex: 0,
            userMessage: '',
            cpuMessages: ['Si', 'No', 'Okay', 'Non me lo ricordo', 'Certo!', 'Certo che no',],
        },
        methods: {
            randomiseNumber(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            },
            printCpuMessage(index) {

                let number = this.randomiseNumber(0, this.cpuMessages.length);
                let cpuMessage = {
                    date: '28/03/2020 10:10:40',
                    message: this.cpuMessages[number],
                    status: 'received',
                };
                let pushMessage = setTimeout(() => {
                    this.data.contacts[index].messages.push(cpuMessage);
                }, 1000)


            },
            printMessage(index) {
                let addMessage = {
                    date: '28/03/2020 10:10:40',
                    message: this.userMessage,
                    status: 'sent',
                };
                console.log(addMessage);
                this.data.contacts[index].messages.push(addMessage);

                /* this.userMessage = ''; */
            },

        }
    });