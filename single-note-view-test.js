function takesNoteOnCreation () {
  var note = new Note("I'm a single note")
  var singleNote = new SingleNoteView(note)
  assert.isTrue(singleNote.note.receivesText() === "I'm a single note");
}

takesNoteOnCreation()