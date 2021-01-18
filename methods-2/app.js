new Vue({
    el: "#app",
    data: {
        name: 'Rafiqul Islam',
        district: 'Satkhira',
        upozila: 'Kaligonj',
        village: 'Brojopulia'
    },
    methods: {
        greetings(){
            return this.name;
        },
        districts(){
            return this.district;
        }
    }
});