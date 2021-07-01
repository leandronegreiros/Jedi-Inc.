<template>
    <v-layout row wrap>
         <Project v-for="project in projects" :key="project._id" :project="project" />
    </v-layout>
</template>

<script>
import Project from './Project'
export default {
	components : { Project },
    computed: {
        projects() {
            return this.$store.getters.projects
        }
    }
}

</script>


<style>

</style>