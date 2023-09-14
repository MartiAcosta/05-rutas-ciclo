<template>
    <h1>Pokemon: <span>#{{ id }}</span></h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>

<script>
    export default {
        props:{
            id: {
                type: Number,
                required: true
            }

        },
        data() {
            return {
                id: this.$route.params.id
            }
        },
        created(){
            // const { id } = this.$route.params
            // this.id= id
            // console.log(this.$attrs) 
            this.getPokemon()
        },
        methods: {
            async getPokemon() {
                try {
                    
                        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json())
                        console.log(pokemon)
                        this.pokemon = pokemon
                }catch (erro) {
                    this.$router.push('/')
                    console.log('No hay nada que hacer aqui')
                }
            }
        },
        wath: {
            id() {
                this.getPokemon()
            }
        }
    }
</script>