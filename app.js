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
    let convertedToHtml = loopOverFileData(obj)
    $('#htmlLoad').text('').append(convertedToHtml);
  }

  reader.readAsText(output)
}

function loopOverFileData(array) {
  let finalOutput = []
  array.forEach(htmlObjElement => {
    finalOutput.push(recursiveJsonRead(htmlObjElement))
  })
  return finalOutput.join('');
}

function recursiveJsonRead(obj){
  if (Array.isArray(obj.content)) {
    return `<${obj.tag}>` + obj.content.reduce((a,b) => {
      return a + recursiveJsonRead(b)
    },``) + `</${obj.tag}>`
  }else if (typeof obj.content === 'object') {
    // obj = obj.content
    return `<${obj.tag}>` + recursiveJsonRead(obj.content) + `</${obj.tag}>`
  } else {
    return `<${obj.tag}> ${obj.content} </${obj.tag}>`
  }
  return results;
}
