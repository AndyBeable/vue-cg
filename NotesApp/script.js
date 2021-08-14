const app = Vue.createApp({
  data() {
    return {
      enteredNoteValue: '',
      notes: [],
    };
  },
  methods: {
    addNote() {
      this.notes.push(this.enteredNoteValue);
      this.enteredNoteValue = '';
    },
  },
});

app.mount('#app');
