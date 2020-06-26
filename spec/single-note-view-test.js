function takesNoteOnCreation () {
  var note = new Note("I'm a single note")
  var singleNote = new SingleNoteView(note)
  assert.isTrue(singleNote.note.receivesText() === "I'm a single note");
}

function singleNoteWrapTest () {
  var note = new Note("I live in a FUNction")
  var singleNote = new SingleNoteView(note)
  var divTag = '<div>I live in a FUNction</div>'
  assert.isTrue(singleNote.singleNoteWrap() === divTag);
}


takesNoteOnCreation()
singleNoteWrapTest()
