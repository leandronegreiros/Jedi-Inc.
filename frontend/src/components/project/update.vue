<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Nome do projeto"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Data início"
                hint="DD/MM/YYYY formato"
                persistent-hint
                prepend-icon="event"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-flex>

        <v-flex xs12 lg6>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="computedDateFormatted"
                label="Data de término"
                hint="DD/MM/YYYY formato"
                persistent-hint
                prepend-icon="event"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date1"
              no-title
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-container>

    <v-text-field
      v-model="valor"
      :error-messages="valorErrors"
      :counter="10"
      label="Valor do projeto"
      required
      @input="$v.valor.$touch()"
      @blur="$v.valor.$touch()"
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Risco"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs6>
          <v-textarea
            name="input-7-1"
            :error-messages="participantsErrors"
            label="Participantes"
            v-model="participants"
            hint="Hint text"
          ></v-textarea>
        </v-flex>
      </v-layout>
    </v-container>

    <v-btn @click="submit">Enviar</v-btn>
    <v-btn @click="clear">Limpar</v-btn>
  </form>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email, numeric } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    valor: { required, numeric, maxLength: maxLength(50) },
    participants: { required, maxLength: maxLength(300) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: (vm) => ({
    name: "",
    valor: "",
    select: null,
    participants: "",
    items: ["0 - baixo", "1 - médio", "2 - alto"],
    checkbox: false,

    date: new Date().toISOString().substr(0, 10),
    date1: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push("Você deve concordar em continuar!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required &&
        errors.push("Você deve concordar em continuar!");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("O nome deve ter no máximo 10 caracteres");
      !this.$v.name.required &&
        errors.push("O nome do projeto é obrigatório..");
      return errors;
    },
    valorErrors() {
      const errors = [];
      if (!this.$v.valor.$dirty) return errors;
      !this.$v.valor.maxLength &&
        errors.push("Valor deve ter no máximo 50 caracteres");
      !this.$v.valor.numeric &&
        errors.push("Valor do Projeto deve ser numérico");
      !this.$v.valor.required && errors.push("Valor do Projeto é necessário.");
      return errors;
    },
    participantsErrors() {
      const errors = [];
      if (!this.$v.participants.$dirty) return errors;
      !this.$v.participants.maxLength &&
        errors.push("Participantes deve ter no máximo 300 caracteres");
      !this.$v.participants.required && errors.push("Participantes do Projeto é necessário.");
      return errors;
    },
    computedDateFormatted() {
      return this.formatDate(this.date1);
    },
  },

  methods: {
    submit() {
       this.select = this.select.split("-")
      const dados = {
        name: this.name,
        date: this.date,
        end_date: this.date1,
        project_value: this.valor,
        risk: this.select[0],
        participants: this.participants,
      };
      this.$store.dispatch("createProjects", dados);

      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.select = null;
      this.checkbox = false;
      this.valor = "";
      this.date = "";
      this.date1 = "";
    },

    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
</script>

<style>
</style>