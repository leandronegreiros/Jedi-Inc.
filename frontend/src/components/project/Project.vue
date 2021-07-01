<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg6>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ project.name }}
          <small>(Valor do Risco: {{ project.risk }})</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-btn class="green darken-3 white--text" @click="projectUpdate"
          >Editar</v-btn
        >
        <v-btn class="red darken-3 white--text" @click="projectDelete"
          >Excluir</v-btn
        >
        <v-btn class="blue darken-3 white--text" @click="projectInvestment"
          >Investimento</v-btn
        >
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ["project"],
  methods: {
    projectUpdate() {
      const orderUpdate = {
        projectId: this.project._id,
        projectName: this.project.name,
        projectRisk: this.project.risk,
      };
      console.log(orderUpdate);
    },
    projectDelete() {
      const orderDelete = {
        projectId: this.project._id,
      };
      console.log(orderDelete);
    },
    projectInvestment() {
      const orderInvestment = {
        projectId: this.project._id,
      };
      console.log(orderInvestment);
    },
  },
};
</script>

<style>
</style>