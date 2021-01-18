new Vue({
    el: "#app",
    data: {
        name: 'Rana',
        persons: {
            name : 'Rafiqul Islam',
            age  : 24,
            gender : 'Male',
            district: 'Satkhira'
        },
        users:['rafiqul', 'kamal','jamal']

    },
    methods: {
        update(){
            setTimeout(() => {
                this.name = 'Rabiul'
            }, 2000);
        }
    }
   
    
});