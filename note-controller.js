(function (exports) {
  function NoteController(noteListModel) {
      this.noteListModel = noteListModel;
      this.view = new NoteListView(this.noteListModel);
  };

  NoteController.prototype.renderHtml = function() {
    var test = document.getElementById('app');
    test.innerHTML = this.view.htmlWrap();
  }
  exports.NoteController = NoteController;
})(this);
    
document.addEventListener('DOMContentLoaded', function (event) {
  var list = new NoteList
  list.addNote("im a note")
  var controller = new NoteController(list)
  controller.renderHtml();
  });   




