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
      html_array.push(`<a href= "#${text_array[i].id}" id="${text_array[i].id}">`)
      html_array.push(text_array[i].receivesText().slice(0,20));
      html_array.push('</a></div></li>');
    }
    html_array.push('</ul>');

    return html_array.join('');
  };

  exports.NoteListView = NoteListView;
})(this);

//<a href="#0" id="0">text of note </a>
