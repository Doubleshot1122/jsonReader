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
    let convertedToHtml = recursiveJsonRead(obj[0])
    $('#htmlLoad').text('').append(convertedToHtml);
  }

  reader.readAsText(output)
}

let sampleData = [
  {"tag":"section",
    "content":{"tag":"p","content":"Hello world!"}
  }
]

function recursiveJsonRead(obj, results=[]){
  // console.log("obj", typeof obj.content);
  let middle = Math.round(results.length/2)
  if (typeof obj.content === 'object') {
    results.splice(middle, 0, `</${obj.tag}>`)
    results.splice(middle, 0, `<${obj.tag}>`)
    obj = obj.content
    recursiveJsonRead(obj, results)
  } else {
    results.splice(middle, 0, `</${obj.tag}>`)
    results.splice(middle, 0, `${obj.content}`)
    results.splice(middle, 0, `<${obj.tag}>`)
  }
  return results.join('');
}

// recursiveJsonRead(sampleData[0])
