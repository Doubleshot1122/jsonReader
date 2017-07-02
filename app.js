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
  {
    "tag": "section",
    "content": {
      "tag": "h2",
      "content": "This file is a bit more complicated because:"
    }
  },{"tag":"li", "content": "list item1"},
  {
    "tag": "section",
    "content": {
      "tag": "ol",
      "content": [
        {
          "tag": "li",
          "content": "There are multiple levels of nesting."
        },
        {
          "tag": "li",
          "content": "Some keys are at the same level."
        },
        {
          "tag": "li",
          "content": "The data types are mixed!"
        }
      ]
    }
  }
]

function flattenHtmlIndex(index) {
  index
}

function loopOverFileData(array) {
  let finalOutput = []
  array.forEach(htmlObjElement => {
    // console.log(htmlObjElement);
    finalOutput.push(recursiveJsonRead(htmlObjElement))
  })
  console.log("finalOutput",finalOutput);
  return finalOutput;
}

function recursiveJsonRead(obj){
  if (typeof obj.content === 'object') {
    // obj = obj.content
    return `<${obj.tag}>` + recursiveJsonRead(obj.content) + `</${obj.tag}>`

  } else if (Array.isArray(obj.content)) {
    loopOverFileData(obj.content, results)
  }
  else {
    return `<${obj.tag}> ${obj.content} </${obj.tag}>`
    // results.splice(middle, 0, `</${obj.tag}>`)
    // results.splice(middle, 0, `${obj.content}`)
    // results.splice(middle, 0, `<${obj.tag}>`)
  }
  console.log("results", results);
  return results;
}

// console.log("LOOP",loopOverFileData(sampleData));
console.log("SINGLE", recursiveJsonRead(sampleData[2]));
