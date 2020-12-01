<template>
  <v-row>
    <v-col
      sm="6"
      md="4"
      lg="3"
      xl="2"
      v-for="(note) in retrievedNotes"
      :key="note.id"
    >
      <NoteItem :note="note" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import NoteItem from "./NoteItem.vue";

export default Vue.extend({
  components: {
    NoteItem,
  },
  computed: {
      retrievedNotes(){
          const notes = this.$store.getters["notes/notes"];
          return notes
      }
  },
});
</script>
