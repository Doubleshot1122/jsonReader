# jsonReader

See it in action: http://json-reader.surge.sh/

a simple web page that allows the user to load a .json file that follows a certain syntax but is arbitrarily nested. When that file is loaded, the site will generate HTML based on the nested structure and display that HTML on the page.


#### Sample Data 1
```json
[
  {
    "tag": "section",
    "content": {
      "tag": "p",
      "content": "Hello world!"
    }
  }
]
```
#### Sample Data 2
```json
[
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
```
#### Sample Data 3
```json
[
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
```

Technologies used:
* HTML
* JaveScript
* Surge (deployment)

Project Members:
* Donny Barclay

Installation instructions:

1. Fork and clone this repo
2. Open index.html with a browser
