<template>
    <div class="scoreboard">
        <div class="score">{{ score1 }}</div>
        <div class="hyphen">-</div>
        <div class="score">{{ score2 }}</div>
    </div>
</template>

<script>

export default {
    name: 'scoreboard',

    data: () => ({

    }),
    props : {
        score1 : {
            type: Number,
            default: 0
        },
        score2 : {
            type: Number,
            default: 0
        }
    },

    methods : {
    }
}
</script>

<style scoped>
.scoreboard {
    background: white;
    width: 240px;
    height: 120px;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
}

.tries {
    color: white;
    margin: 20px;
}

.score {
    border: 1px solid #333;
    border-radius: 10px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 40px;
}

.hyphen {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
}
</style>