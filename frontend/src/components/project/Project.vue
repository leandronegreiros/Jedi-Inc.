<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg6>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ project.name }} </strong>
      </v-card-title>
    </v-card>
    <v-expansion-panel>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Valor do projeto</div>
        </template>
        <v-card>
          <v-card-text>{{ project.project_value | currency }}</v-card-text>
        </v-card>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Risco</div>
        </template>
        <v-card>
          <v-card-text>{{ project.risk }}</v-card-text>
        </v-card>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Integrantes</div>
        </template>
        <v-card>
          <v-card-text>{{ project.participants }}</v-card-text>
        </v-card>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Data de Inicio do projeto</div>
        </template>
        <v-card>
          <v-card-text>{{ project.date | formatDate}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>

      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Data fim do projeto</div>
        </template>
        <v-card>
          <v-card-text>{{ project.end_date | formatDate }}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-card>
      <v-container fill-height>
        <v-btn   @click="projectUpdate" class="green darken-3 white--text"
          >Editar</v-btn
        >
        <InvestmentMode :project="project" />

        <Confirmation :project="project"/>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import InvestmentMode from "./InvestmentMode";
import Confirmation from "./ConfirmationDialog";
export default {
  components: { Confirmation, InvestmentMode },
  props: ["project"],
  methods: {
    projectUpdate() {
      this.$store.dispatch("projectUpdate", this.project);
      this.$router.push('update') 
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