new Vue({
    el: "#app",
    data: {
        name: 'Rana',
        a : 0,
        b : 0,
        salary :100,
        persons: {
            name : 'Rafiqul Islam',
            age  : 24,
            gender : 'Male',
            district: 'Satkhira'
        },
        users:['rafiqul', 'kamal','jamal']

    },
    methods: {
         
    },
    computed: {
        addA(){
            console.log("A");
           return this.a + this.salary;
        },
        addB(){
           console.log("B");
           return this.b + this.salary;
       }
    }
   
    
});