<template>
<div @click="handleClick">
    <v-img :src="require('@/assets/' + image)" class="img" />
</div>
</template>

<script>

export default {
    name: 'minecell',

    data: () => ({
    }),

    props : {
        value: {
            type: String,
            default: '',
            /*validator(e) {
                let found = false;
                ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'B'].forEach(el =>  {
                    if(el.toString() == e.toString()) found = true
                })
                return found
            }*/
        },
        id: {
            type: Number,
            default: 0,
        }
    },

    computed: {
        image() {
            if(this.value === 'B')
                return "bomb.png"
            if(this.value === '0')
                return "transparent.png"
            if(!isNaN(this.value))
                return "numbers/" + this.value + ".png"
            return ''
        }
    },

    methods : {
        handleClick: function() {
            console.log(this.value)
            if(this.value === 'B')
            {
                this.$emit("blown", this.id)
                this.$emit("hidden", this.id)                
                this.$emit("show")
            }
            else
            {
                this.$emit("update-score", this.id, this.value)
                this.$emit("hidden", this.id)
            }
        }
    }
}
</script>

<style scoped>

.minecell {
    width: 60px;
    height: 60px;
    background: hsl(0, 6%, 75%);
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 2px solid black;
    outline-offset: -3px;
    padding: 10px;
    cursor: pointer;
}

.img {
    background: transparent;
}

.hidden {
    background: rgb(88, 70, 70);
}

.hidden > *{
    display: none;
}

.blown {
    background: red;
}
</style>
