(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.htmlWrap = function () {
    var text_array = this.noteList.returnList();
    var html_array = ['<ul>'];
    var i;
    for (i = 0; i < text_array.length; i++) {
      html_array.push('<li><div>');
      html_array.push(text_array[i].receivesText());
      html_array.push('</div></li>');
    }
    html_array.push('</ul>');

    return html_array.join('');
  };

  exports.NoteListView = NoteListView;
})(this);
