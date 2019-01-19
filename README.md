# dMark
A self-hosted bookmark manager designed for developers and built for GitHub pages.

Requires no server side access, this is 100% front-end javascript.

[Demo](http://mzero.space/dMark/)

Uses:
* [Vue.js](https://vuejs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)

## Quick Start
This software was built to run on GitHub pages. You can use it yourself just by forking this project and enabling GitHub Pages in the project settings. All you need to do is modify the JSON in ```data.js```.

## Usage
1) Clone/Fork this repo
2) Change the data in ```data.js``` to contain your custom bookmark data
3) ???
4) Profit (not really)

Creating a new bookmark is easy, it's just simple [JSON](https://www.json.org/):
```JSON
{
    url:"https://example.com",
    name:"Example",
    desc:"Just an example",
    tags: ["tag","test-tag","example-tag"]
},  
```

## Theme Customization
The main Bootstrap theme is ```/css/bootstrap/theme.css```. You can replace this with any of the themes available on [Bootswatch](https://bootswatch.com/). NOTE: This technically runs on top of the standard bootstrap css theme to ensure compatibility (Standard Bootstrap is loaded first, then this).  

The secondary (overwriting) css theme is ```/css/custom.css```. Use this to make your own modifications as needed. 
