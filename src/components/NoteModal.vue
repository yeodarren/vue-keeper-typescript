<template>
  <v-dialog v-model="showNoteDialog" persistent max-width="500">
    <v-card :color="selectedNote.color">
      <div>
        <v-text-field
          label="Title"
          single-line
          flat
          solo
          :value="selectedNote.title"
          @input="updateTitle($event)"
          maxlength="30"
          counter
          background-color="transparent"
        ></v-text-field>
        <v-textarea
          label="Take a note..."
          single-line
          flat
          solo
          auto-grow
          :value="selectedNote.content"
          @input="updateContent($event)"
          maxlength="100"
          counter
          background-color="transparent"
        ></v-textarea>
      </div>
      <v-card-actions>
        <v-btn icon @click="deleteNote">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
        <ColorPickerMenu @color-selected="colorSelected"/>
        <v-spacer></v-spacer>
        <v-btn text @click="close">Close</v-btn>
        <v-btn text @click="saveNote">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import ColorPickerMenu from "./ColorPickerMenu.vue";
import { CardColorTypes, SnackbarColorTypes } from "../store/enums";
import { CardColors } from "../store/enums";
export default Vue.extend({
  components: {
    ColorPickerMenu,
  },
  data: () => ({
    loading: false,
    deleteLoading: false,
  }),
  methods: {
    saveNote() {
      this.$store.dispatch("notes/updateNote", this.selectedNote);
      this.$store.dispatch("global/showSnackbar", {
          open: true,
          text: 'Note updated',
          color: SnackbarColorTypes.Success
      })
      this.close()
    },
    deleteNote() {
      this.$store.dispatch("notes/deleteNote", this.selectedNote);
      this.$store.dispatch("global/showSnackbar", {
          open: true,
          text: 'Note removed',
          color: SnackbarColorTypes.Success
      })
      this.close()
    },
    close() {
      this.$store.dispatch("global/setShowNoteDialog", false);
    },
    updateTitle(event: Event) {
      this.$store.dispatch("global/setNoteField", {
        name: "title",
        value: event
      });
    },
    updateContent(event: Event) {
      this.$store.dispatch("global/setNoteField", {
        name: "content",
        value: event
      });
    },
    colorSelected(color: CardColors) {
      this.$store.dispatch("global/setNoteField", {
        name: "color",
        value: CardColorTypes[color],
      });
    },
  },
  computed: {
    showNoteDialog() {
      return this.$store.getters["global/showNoteDialog"];
    },
    selectedNote() {
      return this.$store.getters["global/selectedNote"];
    },
  },
});
</script>
