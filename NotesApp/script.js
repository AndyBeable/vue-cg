const app = Vue.createApp({
  data() {
    return {
      enteredNoteValue: '',
      notes: [],
      notesListIsVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.notesListIsVisible ? 'Hide' : 'Show';
    },
  },
  methods: {
    addNote() {
      this.notes.push(this.enteredNoteValue);
      this.enteredNoteValue = '';
    },
    toggleNotesList() {
      this.notesListIsVisible = !this.notesListIsVisible;
    },
  },
});

app.mount('#app');
