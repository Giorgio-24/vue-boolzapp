Vue.config.devtools = true;

var root = new Vue(
    {
        el: '#root',
        data: {
            user,
            contacts,
            currentIndex: 0,
        },
        methods: {

        },
    });