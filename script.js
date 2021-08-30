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
            messageStructure(message, status) {
                return {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message,
                    status,
                };
            },
            printCpuMessage(index) {
                if (!this.userMessage) return;

                this.userMessage = '';
                let number = this.randomiseNumber(1, this.cpuMessages.length);
                setTimeout(() => {
                    let cpuMessage = this.messageStructure(this.cpuMessages[number], 'received')

                    this.data.contacts[index].messages.push(cpuMessage);
                }, number * 800)//^ COSI IL TEMPO DI RISPOSTA DIPENDERA' DALLA LUNGHEZZA DEL MESSAGGIO(I PIU' LUNGI SONO IN FONDO)
            },
            printMessage(index) {
                if (!this.userMessage) return;
                const addMessage =
                    this.messageStructure(this.userMessage, 'sent')
                console.log(addMessage);
                this.data.contacts[index].messages.push(addMessage);
            },
            searchUser(contact) {
                if ((contact.name.trim().toLowerCase().includes(this.searchUserByName.trim().toLowerCase()) && contact.visible === true) || this.searchUserByName.trim() === '') {
                    return true;
                }
            }

        }
    });