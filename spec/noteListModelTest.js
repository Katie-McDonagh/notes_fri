function arraySetup() {
  var notelist;
  notelist = new NoteList();
  assert.isTrue(Array.isArray(notelist._list) === true);
  assert.isTrue(notelist._list.length === 0);
}

function createsNote() {
  var notelist = new NoteList();
  var text = 'Favourite drink: seltzer';
  var noteText = notelist.addNote(text);
  assert.isTrue(notelist._list[0].receivesText() === text);
  assert.isTrue(notelist._list.length === 1);
}

function returnsNotes() {
  var notelist = new NoteList();
  var note1 = notelist.addNote('First');
  var note2 = notelist.addNote('second');
  assert.isTrue(notelist.returnList()[0] instanceof Note);
  assert.isTrue(notelist.returnList()[1] instanceof Note);
  assert.isTrue(notelist.returnList().length === 2);
  assert.isTrue(typeof notelist.returnList()[0] === 'object');
}



arraySetup();
createsNote();
returnsNotes();
