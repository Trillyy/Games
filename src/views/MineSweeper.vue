<template>
<div class="minesweeper-wrapper">
    <div class="minesweeper">
        <minecell v-model="cell.value" v-for="cell in cells" :key="cell.id" :id="cell.id"
            :class="{minecell: true, blown: cell.isBlown, hidden: cell.isHidden}"
            @restart="restart" 
            @show="show"
            @update-score="updatescore"
            @hidden="showEl"
            @blown="blowEl"/>
    </div>
    <div class="scoreboard">
        <div class="score">
            <div class="number">{{score}}</div>
            <span>Points</span>
        </div>
        <div class="message">{{message}}</div>
        <div class="restart">
            <button class="btn btn-info" @click="restart">Restart</button>
        </div>
    </div>
</div>
</template>

<script>
import minecell from '../components/minecell'

export default {
    name: 'Minesweeper',

    created() {
        document.title = "Minesweeper";
    },

    data: () => ({
        cells: [],
        score: 0,
        message: '',   
    }),

    mounted() {
        this.restart();
    },

    methods : {
        generateCells: function () {
            for(let i = 0; i < 64; i++) {
                this.cells.push({
                    id: i+1,
                    value: '',
                    isHidden: true,
                    isBlown: false,
                })
            }
        },
        generateBombs: function () {
            this.cells.forEach(el => {
                if(Math.floor(Math.random() * 100) + 1 > 90)
                    el.value = 'B'
            })
        },
        generateNumbers: function () {
            this.cells.forEach((el, i) => {
                if(el.value !== 'B') {
                    let n = 0
                    if(this.cells[i-1] != undefined && this.cells[i-1].value == 'B') n++   //previous
                    if(this.cells[i+1] != undefined && this.cells[i+1].value == 'B') n++   //next
                    if(this.cells[i-7] != undefined && this.cells[i-7].value == 'B') n++   //top1
                    if(this.cells[i-8] != undefined && this.cells[i-8].value == 'B') n++   //top2
                    if(this.cells[i-9] != undefined && this.cells[i-9].value == 'B') n++   //top3
                    if(this.cells[i+7] != undefined && this.cells[i+7].value == 'B') n++   //bottom1
                    if(this.cells[i+8] != undefined && this.cells[i+8].value == 'B') n++   //bottom2
                    if(this.cells[i+9] != undefined && this.cells[i+9].value == 'B') n++   //bottom3

                    el.value = n.toString();
                    console.log(n)
                }
            })
        },
        restart: function() {
            this.hide()
            this.score = 0
            this.cells = []
            this.generateCells();
            this.generateBombs();
            this.generateNumbers();
            this.message = ''
        },

        show: function() {
            let elements = document.getElementsByClassName("minecell")
            elements.forEach(el => {
                el.classList.remove("hidden")
            })
        },

        hide: function() {
            let elements = document.getElementsByClassName("minecell")
            elements.forEach(el => {
                el.classList.add("hidden")
                el.classList.remove("blown")
            })
        },

        updatescore: function(id, value) {
            if(this.cells[id-1].isHidden)
                this.score += parseInt(value)
        },

        showEl: function(v) {
            this.cells[v-1].isHidden = false;
            if(this.won())
            {
                this.show()
                this.message = "YOU WON!"
            }
        },

        blowEl: function(v) {
            this.cells[v-1].isBlown = true;
            this.message = "YOU LOSE!"
        },

        won: function() {
            let missingCells = this.cells.filter(function (el) {
                return el.isHidden == true && el.value !== 'B'}
            )

            let bomb = this.cells.filter(function (el) {
                return el.value === 'B'}
            )
            console.log(bomb)

            console.log(missingCells)
            if(missingCells.length == 0)
                return true;
            else
                return false;
        }
    },

    components: {
        minecell,
    },
}
</script>

<style scoped>

*, *::after, *::before {
    box-sizing: border-box;
}

.minesweeper {
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(8, 65px);
    grid-template-rows: repeat(8, 65px);
}

.minesweeper-wrapper {
    min-height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.scoreboard {
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
    width: 50%;
}

.score {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.restart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}

.message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    font-size: 40px;
    font-weight: bold;
}

.number {
    margin-left: 10px;
    padding: 0 10px;
    font-weight: bold;
    font-size: 40px;
}
</style>