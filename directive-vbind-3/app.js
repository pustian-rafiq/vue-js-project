new Vue({
    el: "#app",
    data: {
        // title : 'Image',
        name: 'Rafiqul Islam',
        // src : 'https://picsum.photos/200/300?grayscale',
        // alt : 'Garbage Photo',
        // link : 'https:google.com',
        // mytext : 'This is shown from v-text',
        // myhtml : '<strong>This is shown from v-html</strong>'
        passmark : 59,
        bangla   : 49,
        english  : 28,
        math     : 90

    },
    methods: {
        addTwoNumber() {
            if (this.math > this.passmark) {
                return "You adre great man";
                
            }
        }
    }
   
    
});