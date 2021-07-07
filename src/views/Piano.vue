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
