// Get the document and body
var doc = DocumentApp.getActiveDocument();
var body = DocumentApp.getActiveDocument().getBody();

// Add the custom menu
function onOpen() {
  var ui = DocumentApp.getUi();
  
  ui.createMenu("Convert to Inline Notes")
    .addItem('Convert to inline', 'replaceNotes')
    .addSeparator()
    .addItem('Clear footnotes', 'deleteNotes')
    .addToUi();
}

// Replaces note superscript where the old footnote was located.
function replaceNotes() {
  var notes = DocumentApp.getActiveDocument().getFootnotes();
  var note = 1;
  for(var i = 0; i < notes.length; i++){
    var getNote = notes[i].getPreviousSibling().editAsText();
    var getNoteContent = notes[i].getFootnoteContents().copy().getText();
    var length = notes[i].getPreviousSibling().editAsText().getText().length;
    getNote.insertText(length, "[note]" + getNoteContent + "[/note]" );  
  }
}

// Clears footnotes from the document.
function deleteNotes(){  
  var body = DocumentApp.getActiveDocument().getBody();
  var footnote = DocumentApp.getActiveDocument().getFootnotes();
  
  for(var i in footnote){
    footnote[i].removeFromParent();
  }
}
