//Check to see if various File APIs are supported
if (window.File && window.FileReader && window.FileList && window.Blob) {
  console.log("Ready to read files");
} else {
  alert('File APIs are not fully supported on this browser')
}

$('#files').change(getUploadedFile)

function getUploadedFile(evt) {
  var files = evt.target.files;

  let output = files[0]

  var reader = new FileReader();

  console.log(evt);
  console.log(output);
  console.log(reader);

  reader.onload = function(e) {
    console.dir(JSON.parse(reader.result), {depth:null});
    $('#htmlLoad').text(reader.result)
  }

  reader.readAsText(output)
}
