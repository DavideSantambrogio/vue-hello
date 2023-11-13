const { createApp } = Vue;

const app = createApp({
    data () {
        return{            
            title: "ciao",
            text: "ciao come stai",
            classColor: "blu",   
            imgSrc: "https://picsum.photos/200"
                     
        }
    },    

    methods: {
        clickMe: function() {
            alert("hai cliccato il bottone")                  
        },  

        changeColor: function(){
            this.classColor= "red"            
        }        
    }
})

app.mount("#app");

