<template>
  <div class="card-game">
    <card value="X" id=1 @draw="draw(drawn)"></card>
    <div class="score">
      <scoreboard />
      <button class="btn btn-success" @click="deckdraw">Go</button>
      <label class="tries">{{tries}} more tries...</label>
    </div>
    <card value="X" id=2 @draw="draw"></card>
  </div>
</template>

<script>
  import scoreboard from '../components/scoreboard'
  import card from '../components/card'

  export default {
    name: 'Card',

    data: () => ({
        card1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(),
        card2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].sort(),
        tries: 10
    }),

    methods : {
      deckdraw: function() {
        if(this.tries > 0)
        {
          this.tries--
          this.$emit("draw", [this.card1.pop(), this.card2.pop()])
        }
          
      }
    },

    components: {
      card, scoreboard
    },
  }
</script>
