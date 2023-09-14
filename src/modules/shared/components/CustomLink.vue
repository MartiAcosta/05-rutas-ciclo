<template>
    <a v-if="isExternaLink"
    target="_black"
    class="normal-link"
    :href="link.to">
        {{ link.name }}
    </a>
    <router-link 
    v-else
    :to=" route "
    v-slot="{ isActive }"
    >
    <!-- href, is Active-->
        <a :class="isActive ? 'is-active' : 'normal-lonk'">
            {{ link.name }}
        </a>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternaLink() {
            return this.link.to.startsWith('http')
        },
        route() {
            return this.link.id === undefined
                ? { name: this.link.to }
                : { name: this.link.to, params: { id: this.link.id} }
        }
    },

}
</script>

<style scope>
    .is-active { 
        color: #42b983;
    }
    .normal-link {
        color: #c6c5c5;
    }
</style>