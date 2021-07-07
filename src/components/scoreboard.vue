<template>
    <div class="scoreboard">
        <div class="score">{{ score1 }}</div>
        <div class="hyphen">-</div>
        <div class="score">{{ score2 }}</div>
    </div>
</template>

<script>
import '../../public/css/scoreboard.css';

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
