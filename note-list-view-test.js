function htmlWrap() {
  var list = new NoteList();
  var noteListView = new NoteListView(list);
  noteListView.noteList.addNote('First Note');
  noteListView.noteList.addNote('Second Note');
  var text =
    '<ul><li><div>First Note</div></li><li><div>Second Note</div></li></ul>';
  assert.isTrue(noteListView.htmlWrap() === text);
}

function noNoteHtmlWrap() {
  var list = new NoteList();
  var noteListView = new NoteListView(list);
  assert.isTrue(noteListView.htmlWrap() === '<ul></ul>')
}

function onlyFirst20Chars() {
var list = new NoteList();
list.addNote("I'm a note that is over twenty characters long")
var noteListView = new NoteListView(list);
var shortenedNoteWrap = "<ul><li><div>I'm a note that is o</div></li></ul>"
assert.isTrue(noteListView.htmlWrap() === shortenedNoteWrap)

}

htmlWrap();
noNoteHtmlWrap();
onlyFirst20Chars();
