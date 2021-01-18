new Vue({
    el: "#app",
    data: {
        name: 'Rana',
        x :0,
        y : 0,
        persons: {
            name : 'Rafiqul Islam',
            age  : 24,
            gender : 'Male',
            district: 'Satkhira'
        },
        users:['rafiqul', 'kamal','jamal']

    },
    methods: {
        updateName(){
            setTimeout(() => {
                this.name = 'Rabiul'
            });
        },
        getCoord(event){
            this.x = event.ClientX;
            this.y = event.ClientY;
        }
    }
   
    
});