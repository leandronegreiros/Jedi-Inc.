<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on"> REMOVER </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Remover Projeto
        </v-card-title>

        <v-card-text> O projeto sera removido da base de dados. </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="deleteProject">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    deleteProject() {
      this.dialog = false
      this.$store.dispatch('deleteProjects', this.project._id)
      this.$store.dispatch('initProjects')
    },
  },
};
</script>

<style>
</style>