//Check to see if various File APIs are supported
if (window.File && window.FileReader && window.FileList && window.Blob) {
  console.log("Ready to read files");
} else {
  alert('File APIs are not fully supported on this browser')
}

$('#files').change(getUploadedFile)
let htmlData = []

function getUploadedFile(evt) {
  var files = evt.target.files;

  let output = files[0]

  var reader = new FileReader();

  reader.onload = function(e) {
    let obj = JSON.parse(reader.result);
    console.log(obj[0].content.content);
    $('#htmlLoad').text(JSON.stringify(obj));
  }

  reader.readAsText(output)
}

let sampleData = [
  {"tag":"section",
    "content":{"tag":"p","content":"Hello world!"}
  }
]

function recursiveJsonRead(obj, results=[]) {
  if (typeof obj.content === 'object') {
    results.push(obj.tag)
    obj = obj.content
    recursiveJsonRead(obj, results)
  } else {
    results.push(obj.tag)
    results.push(obj.content)
    console.log(results);
  }
}

// console.log(sampleData[0].content);
// console.log(typeof sampleData[0].content.content);
recursiveJsonRead(sampleData[0])









// hh
