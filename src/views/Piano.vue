<template>
  <div class="piano">
    <div class="details">
        <b>Cronologia suoni (ultimi 15): </b>
        <input type="text" class="form-control-inline" readonly size="75" :value="render(lastpressed)">
      </div>
    <div class="piano-back">
      <pianotile note = "DO" blacktile = "right" @tileChange = "tileChanged($event)"/>
      <pianotile note = "RE" blacktile = "both" @tileChange = "tileChanged($event)"/>
      <pianotile note = "MI" blacktile = "left" @tileChange = "tileChanged($event)"/>
      <pianotile note = "FA" blacktile = "right" @tileChange = "tileChanged($event)"/>
      <pianotile note = "SOL" blacktile = "both" @tileChange = "tileChanged($event)"/>
      <pianotile note = "LA" blacktile = "both" @tileChange = "tileChanged($event)"/>
      <pianotile note = "SI" blacktile = "left" @tileChange = "tileChanged($event)"/>
      <pianotile note = "DO2" blacktile = "right" @tileChange = "tileChanged($event)"/>
      <pianotile note = "RE2" blacktile = "both" @tileChange = "tileChanged($event)"/>
      <pianotile note = "MI2" blacktile = "left" @tileChange = "tileChanged($event)"/>
      <pianotile note = "FA2" blacktile = "right" @tileChange = "tileChanged($event)"/>
      <pianotile note = "SOL2" blacktile = "both" @tileChange = "tileChanged($event)"/>
      <pianotile note = "LA2" blacktile = "both" @tileChange = "tileChanged($event)"/>
      <pianotile note = "SI2" blacktile = "left" @tileChange = "tileChanged($event)"/>
      <pianotile note = "DO3" blacktile = "right" @tileChange = "tileChanged($event)"/>
    </div>
  </div>
</template>

<script>
  import pianotile from '../components/piano-tile'

  export default {
    name: 'Piano',

    created () {
            document.title = "Piano";
    },

    data: () => ({
        lastpressed : [],
    }),

    methods : {
      tileChanged : function(e) {
        console.log(e);
        this.lastpressed.push(e);
        if(this.lastpressed.length > 15)
          this.lastpressed.shift();
        },

      render : function(last) {
        console.log(last);
        let arraystring = ''
        last.forEach((el) => arraystring = arraystring + el + ' ')
        return arraystring
        }
    },

    components: {
      pianotile,
    },
  }
</script>
<style scoped>
.piano {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 86vh;
    border-radius: 20%;
}

.piano-back {
    padding: 25px;
    border: 1px solid black;
    background: red;
    border-radius: 10px;
    -webkit-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    7px 7px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         7px 7px 5px 0px rgba(50, 50, 50, 0.75);
}

.note {
    font-weight: bold;
    text-align: center;
    width: 100%;
}

.details {
    background: white;
    border: 1px solid;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
    -moz-box-shadow:    7px 7px 5px 0px rgba(50, 50, 50, 0.75);
    box-shadow:         7px 7px 5px 0px rgba(50, 50, 50, 0.75);
}
</style>
