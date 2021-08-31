Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            data,
            currentIndex: 0,
            randomTime: 0,
            userMessage: '',
            searchUserByName: '',
            cpuMessages: ['', 'Si', 'No', 'Okay', 'Certo!', 'Certo che no', 'Non me lo ricordo',],
        },
        methods: {
            randomiseNumber(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            },
            deleteMessage(index) {
                const eliminateMe = this.data.contacts[this.currentIndex].messages;

                return eliminateMe.splice(index, 1);
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
                /* 
                //?TEST RISPOSTE REALISTICHE.
                                if (this.userMessage.trim().toLowerCase() === 'ciao' || 'ei' || 'hey' || 'salve') return this.userMessage = '', setTimeout(() => {
                
                                    let cpuMessage = this.messageStructure(`Ciao ${this.data.user.name}!`, 'received');
                
                                    this.data.contacts[index].messages.push(cpuMessage);
                                }, 4500) */


                let number = this.randomiseNumber(1, this.cpuMessages.length);
                this.randomTime = number;
                setTimeout(() => {
                    let cpuMessage = this.messageStructure(this.cpuMessages[number], 'received');

                    this.data.contacts[index].messages.push(cpuMessage);
                }, (number * 800) + 4500)//^ COSI IL TEMPO DI RISPOSTA DIPENDERA' DALLA LUNGHEZZA DEL MESSAGGIO(I PIU' LUNGI SONO IN FONDO)
            },
            printMessage(index) {
                if (!this.userMessage) return;
                const addMessage =
                    this.messageStructure(this.userMessage, 'sent');
                console.log(addMessage);
                this.data.contacts[index].messages.push(addMessage);
            },
            searchUser(contact) {
                if ((contact.name.trim().toLowerCase().includes(this.searchUserByName.trim().toLowerCase()) && contact.visible === true) || this.searchUserByName.trim() === '') {
                    return true;
                }
            },
            getLastAccess(contact) {
                if (!this.userMessage) return;

                this.userMessage = '';

                setTimeout(() => {
                    contact.lastAccess = 'Online';
                }, 1500);

                setTimeout(() => {
                    contact.lastAccess = 'Sta scrivendo...';
                }, 3000);

                setTimeout(() => {
                    contact.lastAccess = 'Online';
                }, (this.randomTime * 800) + 4500);

                setTimeout(() => {
                    contact.lastAccess = `Ultimo accesso il: ${contact.messages[contact.messages.length - 1].date}`;
                }, (this.randomTime * 800) + 6000);

            },

        }
    });