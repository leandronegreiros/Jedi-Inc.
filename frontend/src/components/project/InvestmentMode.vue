<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-2" dark v-on="on"> INVESTIMENTO </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Simulação de Investimento
        </v-card-title>

        <v-card-text v-if="textCliar"> {{ valueInvestment }} </v-card-text>

        <v-container fill-height>
          <v-text-field
            label="Informe um valor"
            type="number"
            v-model.number="investmentValue"
          />
          <v-btn
            class="green darken-3 white--text"
            :disabled="investmentValue <= 0"
            @click="simulatInvestmente"
          >
            SIMULAR</v-btn
          >
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="close"> FECHAR </v-btn>
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
      investmentValue: 0,
      validate: false,
      textCliar: false,
    };
  },
  methods: {
    simulatInvestmente() {
      const dados = {
        _id: this.project._id,
        investmentValue: this.investmentValue,
      };

      this.$store.dispatch("simulatInvestmente", dados);

      this.textCliar = true;
    },
    close() {
      this.dialog = false;
       this.textCliar = false;
    },
  },
  computed: {
    valueInvestment() {
      return this.$store.getters.valueInvestment;
    },
  },
};
</script>

<style>
</style>