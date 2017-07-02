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

let sampleData = [
  {
    "tag": "section",
    "content": {
      "tag": "h2",
      "content": "Welcome to My Page!"
    }
  },
  {
    "tag": "section",
    "content": [
      {
        "tag": "h3",
        "content": "My Favorite Things"
      },
      {
        "tag": "ul",
        "content": [
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/200/200'/>"
          },
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/201/200'/>"
          },
          {
            "tag": "li",
            "content": "<img src='http://placekitten.com/g/200/201'/>"
          }
        ]
      },
      {
        "tag": "p",
        "content": [
          {
            "tag": "span",
            "content": "In short, I "
          },
          {
            "tag": "strong",
            "content": "just love"
          },
          {
            "tag": "span",
            "content": " kittens!"
          }
        ]
      }
    ]
  }
]


function loopOverFileData(array) {
  let finalOutput = []
  array.forEach(htmlObjElement => {
    finalOutput.push(recursiveJsonRead(htmlObjElement))
  })
  return finalOutput.join('');
}

function recursiveJsonRead(obj){
  console.log(obj);
  if (Array.isArray(obj.content)) {
    return obj.content.reduce((a,b) => {
      return a + recursiveJsonRead(b)
    },``)
  }else if (typeof obj.content === 'object') {
    // obj = obj.content
    return `<${obj.tag}>` + recursiveJsonRead(obj.content) + `</${obj.tag}>`
  } else {
    return `<${obj.tag}> ${obj.content} </${obj.tag}>`
  }
  console.log("results", results);
  return results;
}


console.log("LOOP",loopOverFileData(sampleData));
// console.log("SINGLE", recursiveJsonRead(sampleData[1]));





















//hi
