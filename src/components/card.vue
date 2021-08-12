<template>
    <div class="card">
        <div class="insidecard">
            <div class="cardvalue"> {{ value }} </div>
        </div>
    </div>
</template>

<script>

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

<style scoped>
.card {
    width: 140px;
    height: 200px;
    border: 1px solid;
    text-align: center;
    font-size: 50px;
    margin: 50px;
}

.insidecard {
    margin: 10px 10px 10px 10px;
    width: auto;
    height: 100%;
    border: 1px solid black;
    position: relative;
}

.cardvalue {
    position: absolute;
    top: -20px;
    left: 0;
}
</style>
