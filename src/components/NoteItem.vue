<template>
  <v-card
    :color="note.color"
    hover
    class="flex d-flex flex-column"
    @mouseenter="toggleEditIcon"
    @mouseleave="toggleEditIcon"
    @click="viewNote"
  >
    <v-card-title>
      {{ note.title }}
      <v-spacer></v-spacer>
      <v-btn icon >
        <v-icon v-if="showEditIcon">mdi-pencil-outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>{{ note.content }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["note"],
  data: () => ({
    showEditIcon: false,
  }),
  methods: {
    toggleEditIcon() {
      this.showEditIcon = !this.showEditIcon;
    },
    viewNote(){
        this.$store.dispatch('global/setShowNoteDialog', true)
        this.$store.dispatch('global/setSelectedNote', this.note)
    }
  },
});
</script>
