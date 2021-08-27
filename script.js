Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            data,
            currentIndex: 0,
            userMessage: '',
            searchUserByName: '',
            cpuMessages: ['', 'Si', 'No', 'Okay', 'Certo!', 'Certo che no', 'Non me lo ricordo',],
        },
        methods: {
            randomiseNumber(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            },
            printCpuMessage(index) {

                let number = this.randomiseNumber(1, this.cpuMessages.length);
                let cpuMessage = {
                    date: '28/03/2020 10:10:40',
                    message: this.cpuMessages[number],
                    status: 'received',
                };
                let pushMessage = setTimeout(() => {
                    this.data.contacts[index].messages.push(cpuMessage);
                }, number * 800)//^ COSI IL TEMPO DI RISPOSTA DIPENDERA' DALLA LUNGHEZZA DEL MESSAGGIO(I PIU' LUNGI SONO IN FONDO)


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
            searchUser(contact) {
                if (contact.name.toLowerCase().includes(this.searchUserByName.toLowerCase()) || this.searchUserByName === '') {
                    return true;
                }
            }

        }
    });