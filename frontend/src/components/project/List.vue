<template>
    <v-layout row wrap>
         <Project v-for="project in projects" :key="project._id" />
    </v-layout>
</template>

<script>
import Project from './Project'
export default {
	components : { Project },
    data() {
        return {
            projects: [
                { _id: 1, name: 'BMW', risk: 0 },
                { _id: 2, name: 'Google', risk: 1 },
                { _id: 3, name: 'Apple', price: 2 },
                { _id: 4, name: 'Twiter', risk: 0 },
            ]
        }
    }
}

</script>


<style>

</style>