
<template>
  <div>
    <!-- <router-link :to="{name: 'home'}">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: {id: '85'}}">Pokemon by id</router-link>
    <router-link :to="{name: 'about'}">About List</router-link> -->
    <CustomLink
      v-for="link in links"
      :key="link.to"
      :link="link"
    />
  </div>
</template>

<script>
  import { defineAsyncComponent } from 'vue';

  export default{
    data (){
      return {
        links: [
          { to: 'pokemon-home' , name: 'Pokemons'},
          { to: 'pokemon-id' , name: 'Por ID', id: 151},
          { to: 'pokemon-about' , name: 'About'},
          { to: 'dbz-characters' , name: 'Personajes'},
          { to: 'dbz-about' , name: 'DBZ - about'},
          { to: 'http://google.com' , name: 'Google'},
        ]
      }
    },
    components: {
      CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
  }

</script>

<style scope>

  div{
    padding: 0 30px;
  }

  div a{
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
  }

  div .router-link-exact-active{
    color: #42b984;
  }

</style>