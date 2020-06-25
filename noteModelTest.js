function storesText() {
  var note = new Note('test note');
  assert.isTrue(note._text === 'test note');
}

function hasAnId() {
  var note = new Note("Where's my ID?")
  assert.isTrue(note.id === 1)
} 

function hasUniqueId() {
  var note1 = new Note("Where's my ID?")
  var note2 = new Note("I found it!")
  assert.isTrue(note2.id === 3)
}

function returnsText() {
  var note = new Note("test note");
  var text = note.receivesText();
  assert.isTrue(text === 'test note');
}



storesText();
hasAnId();
hasUniqueId();
returnsText();
 

