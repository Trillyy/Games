<template>
  <div class="card-game">
    <card :value="value1" id="1" @draw="draw(drawn)"></card>
    <div class="scorepad">
      <p class="winner">{{winner}}</p>
      <scoreboard :score1="score1" :score2="score2" />
      <button class="btn btn-success" @click="deckdraw">Go</button>
      <button class="btn btn-warning mt-2" @click="reset">Reset</button>
      <label class="tries">{{tries}} more tries...</label>
    </div>
    <card :value="value2" id="2" @draw="draw(drawn)"></card>
  </div>
</template>

<script>
  import scoreboard from '../components/scoreboard'
  import card from '../components/card'

  export default {
    name: 'Card',

    data: () => ({
        card1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        card2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        tries: 10,
        value1: 0,
        value2: 0,
        score1: 0,
        score2: 0,
        winner: ''
    }),

    methods : {
      deckdraw: function() {
        if(this.tries > 0)
        {
          this.tries--
          this.shuffle(this.card1)
          this.shuffle(this.card2)
          this.value1 = this.card1.pop();
          this.value2 = this.card2.pop();
          if(this.value1 > this.value2)
            this.score1++;
          else
            if(this.value1 < this.value2)
              this.score2++;
          if(this.tries == 0)
            if(this.score1 > this.score2)
              this.winner = 'PLAYER 1 WON!'
            else
              if(this.score1 == this.score2)
                this.winner = 'DRAW'
              else
                this.winner = 'PLAYER 2 WON!'
        }
      },

      reset: function() {
        this.card1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.card2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        this.tries = 10
        this.value1 = 0
        this.value2 = 0
        this.score1 = 0
        this.score2 = 0
        this.winner = ''
      },

      shuffle: function(array) {
        var currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
      }

    },

    components: {
      card, scoreboard
    },
  }
</script>
