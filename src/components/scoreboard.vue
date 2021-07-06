<template>
  <div class="scoreboard"> {{ value }} </div>
</template>

<script>
import '../../public/css/scoreboard.css';

export default {
    name: 'scoreboard',

    data: () => ({

    }),
    props : {
        value : {
            type: String,
            default: 'NaN'
        },
    },

    methods : {
    }
}
</script>
