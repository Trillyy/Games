<template>
  <div class="card"> {{ value }} </div>
</template>

<script>
import '../../public/css/card.css';

export default {
    name: 'card',

    data: () => ({
    
    }),
    props : {
        value : {
            type: Number,
            default: 0
        },
        id : {
            type: String,
            default: "0"
        }
    },

    methods : {
        draw: function(drawn) {
            console.log(drawn)
            if(this.id == "1")
                this.value = String.toString(drawn[0])
            else
                this.value = String.toString(drawn[1])
        }
    }
}
</script>
