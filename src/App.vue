<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>VueKeep</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Create />

        <div class="text-center mt-2" v-if="loading">
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>

        <Notes v-else />

        <NoteModal />

        <v-snackbar v-model="snackbar.open" :color="snackbar.color">{{ snackbar.text }}</v-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Create from './components/Create.vue'
import Notes from './components/Notes.vue'
import NoteModal from './components/NoteModal.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Create,
    Notes,
    NoteModal
  },

  data: () => ({
    loading: false,
    // refreshLoading: false
  }),
  methods: {
    refresh(){
      // this.loading = true
    }
  },
  computed:{
    snackbar(){
      return this.$store.getters['global/showSnackbar']
    }
  }
});
</script>
