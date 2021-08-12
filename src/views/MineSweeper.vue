<template>
<div class="minesweeper-wrapper">
    <div class="minesweeper">
        <minecell v-model="cell.value" v-for="cell in cells" :key="cell.id" class="mcell" @restart="restart" @show="show"/>
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
        cells: []       
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
                })
            }
        },
        generateBombs: function () {
            this.cells.forEach(el => {
                if(Math.floor(Math.random() * 100) + 1 > 80)
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
            this.cells = []
            this.generateCells();
            this.generateBombs();
            this.generateNumbers();
            console.log("restarted")
        },

        show: function() {
            let elements = document.getElementsByClassName("mcell")
            elements.forEach(el => {
                console.log(el.classList.remove("hidden"))
            })
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
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>