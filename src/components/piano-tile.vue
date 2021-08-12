<template>
  <div :class="clicked" @click="playSound" >
    <div v-if="blacktile == 'left' || blacktile == 'both'" class="left-black"></div>
    <div v-if="blacktile == 'right' || blacktile == 'both'" class="right-black"></div>
    <div class="note"> {{ note }}</div>
  </div>
</template>

<script>

export default {
    name: 'pianotile',

    mounted() {
        let self = this;

        window.addEventListener('keyup', function(e) {
        self.playSoundKey(e); // declared in your component methods
    });
        },

    data: () => ({
        clicked : 'pianotile',
    }),
    props : {
        note : {
            type: String,
            default: 'NOTE'
        },
        blacktile : {
            type: String,
            default: 'none'
        }
    },

    methods : {
        playSound: function() {
            this.changeColor()
            let audio = new Audio(require('@/assets/soundmp3/' + this.$props.note + '.mp3'));
            audio.type = 'audio/mp3'
            audio.play().then(() => {
                console.log('Playing ' + this.$props.note + '.mp3')
            })
            .catch(error => {
                console.log(error);
            })
            console.log('soundmp3/' + this.$props.note + '.mp3');
            this.$emit('tileChange', this.$props.note);
            console.log('tileChange emitted with ' + this.$props.note)
        },
        
        playSoundKey: function (e) {
            console.log(e)
            if (e.key == 'q' && this.note == 'DO'
            || e.key == 'w' && this.note == 'RE'
            || e.key == 'e' && this.note == 'MI'
            || e.key == 'r' && this.note == 'FA'
            || e.key == 't' && this.note == 'SOL'
            || e.key == 'y' && this.note == 'LA'
            || e.key == 'u' && this.note == 'SI'
            || e.key == 'i' && this.note == 'DO2'
            || e.key == 'o' && this.note == 'RE2'
            || e.key == 'p' && this.note == 'MI2'
            || e.key == 'a' && this.note == 'FA2'
            || e.key == 's' && this.note == 'SOL2'
            || e.key == 'd' && this.note == 'LA2'
            || e.key == 'f' && this.note == 'SI2'
            || e.key == 'g' && this.note == 'DO3') {
                this.playSound()
                e.stopPropagation()
                e.preventDefault()
            }
        },

        changeColor: function() {
            this.clicked = 'pianotile active'
            setTimeout(() => {
                this.clicked = 'pianotile'
            }, 500);
        }
    }
}
</script>
<style scoped>
.pianotile {
    height: 250px;
    width: 60px;
    border: 1px solid black;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background: white;
    border-bottom-left-radius: 8%;
    border-bottom-right-radius: 8%;
}

.note {
    position: absolute;
    bottom: 0;
}

.left-black {
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;
    width: 17px;
    
    background: black;
}

.right-black {
    position: absolute;
    top: 0;
    right: 0;
    height: 150px;
    width: 17px;
    
    background: black;
}

.active {
    background: gray !important;
}
</style>