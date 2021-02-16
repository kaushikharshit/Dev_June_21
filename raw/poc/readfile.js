let fs = require("fs");
// npm instal cheerio
//cheerio module require
let cheerio = require("cheerio");
let html = fs.readFileSync("../facts/index.html","utf-8");
// console.log(html);
let $ = cheerio.load(html);
//to select h1 element from the page
// let h1 = $("h1");
// to get text
// let h1kadata = h1.text();
// console.log(h1kadata);

// return array of all the elements
// let a = $("a");
// print the content of all anchors
// console.log(a.text());

// select element that is inside another element
// let ulkap = $("ul p");
// console.log(ulkap.text())

//select a class
// let classElem = $(".first-para");
// console.log(classElem.text());

// select all elements of para class
// let allElem = $(".para");
// console.log(allElem.text());

// select a element with both classes in it
// let combineElem = $(".para.first-para");
// console.log(combineElem.text());

let myName = $("#unique");
console.log(myName.text());
