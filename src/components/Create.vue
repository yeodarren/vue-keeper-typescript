<template>
  <v-row justify="center">
    <v-col md="8" lg="6" xl="4" v-click-outside="onClickOutside">
      <v-card :color="note.color">
        <div>
          <v-text-field
            v-model="note.title"
            v-if="titleFieldVisible"
            label="Title"
            single-line
            flat
            solo
            background-color="transparent"
            maxlength="30"
            counter
          ></v-text-field>
          <v-textarea
            v-model="note.content"
            @focus="showTitleAndActions"
            rows="3"
            label="Take a note..."
            single-line
            flat
            solo
            background-color="transparent"
            auto-grow
            maxLength="100"
            counter
          ></v-textarea>
        </div>
        <v-card-actions v-if="actionsVisible">
          <ColorPickerMenu @color-selected="colorSelected" :selected="note.color" />
          <v-spacer></v-spacer>
          <v-btn text @click="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import ColorPickerMenu from './ColorPickerMenu.vue';
import { CardColorTypes } from '../store/enums'
import { CardColors } from '../store/model' 
import { SnackbarColorTypes } from "@/store/enums";
export default Vue.extend({
  components: {
    ColorPickerMenu,
  },
  data: () => ({
    note: {
      title: "",
      content: "",
      color: CardColorTypes.Default
    },
    titleFieldVisible: false,
    actionsVisible: false,
  }),
  methods: {
    showTitleAndActions() {
      this.titleFieldVisible = true;
      this.actionsVisible = true;
    },
    hideTitleandActions() {
      this.titleFieldVisible = false;
      this.actionsVisible = false;
    },
    colorSelected(color: CardColors){
        return this.note.color = CardColorTypes[color]
    },
    onClickOutside() {
        if(!this.colorMenuOpen){
            this.close();
        }
    },
    close() {
      this.hideTitleandActions();

      if (this.note.title || this.note.content) {
        this.$store.dispatch("notes/addNote", this.note);
        this.$store.dispatch("global/showSnackbar", {
          open: true,
          text: 'Note saved',
          color: SnackbarColorTypes.Success
        })
      }

      this.note = {
        title: "",
        content: "",
        color: CardColorTypes.Default
      };
    },
  },
  computed: {
      colorMenuOpen(){
        return this.$store.getters['global/colorMenuOpen']
      }
  }
});
</script>
