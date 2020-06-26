function instantiateNoteController() {
  var list = new NoteList;
  var controller = new NoteController(list);
  assert.isTrue(controller.noteListModel instanceof NoteList);
}

function innnerHTMLContainsPassedFavourite() {
  var list = new NoteList;
  list.addNote("Pesto")
  var controller = new NoteController(list);
  controller.renderHtml();
  var html = '<ul><li><div>Pesto</div></li></ul>';
  assert.isTrue(document.getElementById("app").innerHTML === html)
}

instantiateNoteController();
innnerHTMLContainsPassedFavourite();