(function(exports){
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.singleNoteWrap = function () {
    var oneNote = this.note.receivesText();
    
    return`<div>${oneNote}</div>`;
  }

exports.SingleNoteView = SingleNoteView;
})(this);