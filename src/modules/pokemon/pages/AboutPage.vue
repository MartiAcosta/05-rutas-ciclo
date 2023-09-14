<template>
    <h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>
    <button @click="onChangeName">
        Cambiar Nombre
    </button>
</template>

<script>
    export default{
        data() {
            return{
                name: 'Martina'
            }
        },
        methods: {
            onChangeName(){
                this.name = 'Camila'
            }
        },
        beforeCreate() {
            console.log('1: beforeCreate')
        },
        created () {
            console.log('2: created')
        },
        beforeMount () {
            console.log('3: beforeMount')
        },
        mounted() {
            console.log('4: mounted')
        },
        beforeUpdate () {
            console.log('5: beforeUpdate')
        },
        updated() {
            console.log('6: updated')
        },
        activated() {
            console.log('7: activated')
        },
        deactivated() {
            console.log('8: deactivated')
        },
        beforeUnmount() {
            console.log('9: beforeUnmount')
        },
        unmounted() {
            console.log('10: unmounted')
        },
        errorCaptured() {
            console.log('11: errorCaptured')
        },
        renderTracked() {
            console.log('12: renderTracked')
        },
        renderTriggered() {
            console.log('13: renderTriggered')
        },
    }
</script>