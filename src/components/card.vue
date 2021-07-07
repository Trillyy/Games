<template>
    <div class="card">
        <div class="insidecard">
            <div class="cardvalue"> {{ value }} </div>
        </div>
    </div>
</template>

<script>
import '../../public/css/card.css';

export default {
    name: 'card',

    data: () => ({
    
    }),
    props : {
        value : {
            type: Number,
            default: 0
        },
        id : {
            type: String,
            default: "0"
        }
    },
}
</script>
