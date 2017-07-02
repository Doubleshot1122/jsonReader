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
  },
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
  let results = []
  array.forEach(el => {
    console.log(el);
    return recursiveJsonRead(el, results);
  })
  // console.log("RESULTS", results);
  return results;
}

function recursiveJsonRead(obj, results){
  let middle = Math.round(results.length/2)
  if (typeof obj.content === 'object') {
    results.splice(middle, 0, `</${obj.tag}>`)
    results.splice(middle, 0, `<${obj.tag}>`)
    obj = obj.content
    recursiveJsonRead(obj, results)
  } else if (Array.isArray(obj.content)) {
    loopOverFileData(obj.content, results)
  }
  else {
    results.splice(middle, 0, `</${obj.tag}>`)
    results.splice(middle, 0, `${obj.content}`)
    results.splice(middle, 0, `<${obj.tag}>`)
  }
  return results.join('');
}

// console.log("LOOP",loopOverFileData(sampleData));
loopOverFileData(sampleData)
// console.log("RECUR",recursiveJsonRead(sampleData[0]));
