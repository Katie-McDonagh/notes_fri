(function (exports) {

  var idcounter = 0;

  function Note(text) {
    this._text = text;
    this.id = idcounter++;
  }

  Note.prototype.receivesText = function () {
    return this._text;
  };

  

  exports.Note = Note;
})(this);
