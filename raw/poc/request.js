// npm install request
// to make a request to any server
let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
request("https://www.espncricinfo.com/series/icc-cricket-world-cup-2014-15-509587",dataReceiver);
function dataReceiver(err,res,html){  // error, response, html
    if(err == null && res.statusCode == 200){
        // console.log(res);
        // console.log(html);
        parsefile(html);
    }
    else if(res.statusCode == 404){
        console.log("Page not found");
    }else{
        console.log(err);
        console.log(res);
    }
} 
function parsefile(html){
    let $ = cheerio.load(html);
    // let list = $("ul.list-unstyled.mb-0");
    // let x = list.toString();
    // fs.writeFileSync("list.html",x);
    let a = $("li.widget-items.cta-link a").attr("href");
    // console.log(a);
    let fullLink = "https://www.espncricinfo.com" + a;
    // console.log(fullLink);
    // request(fullLink,matchPageHandler);
    // request(fullLink,results);
    request(fullLink,teamWise);
}

function teamWise(err,res,html){
    if(err == null && res.statusCode == 200){
        // console.log(res);
        // console.log(html);
        parseEachTeam(html);
    }
    else if(res.statusCode == 404){
        console.log("Page not found");
    }else{
        console.log(err);
        console.log(res);
    }
}

function parseEachTeam(html){
    let $ = cheerio.load(html);
    // full page ki info ke liye ye use hota hai
    let teamData = $(".col-md-8.col-16");
    // let z = teamData.toString();
    // fs.writeFileSync("teamData.html",z);

    for(let i=0;i<teamData.length;i++){
        // find -> find in element ke liye use hota hai
        let result = $(teamData[i]).find(".status-text").text();
        let detail = $(teamData[i]).find(".description").text();
        let allAnchors = $(teamData[i]).find(".match-cta-container a");
        let reportLink = $(allAnchors[0]).attr("href");
        console.log("#########################################");
        console.log(result);
        console.log(detail);
        console.log("https://www.espncricinfo.com" + reportLink);
        console.log("###########################################")
    }
}

function results(err,res,html){
    if(err == null && res.statusCode == 200){
        // console.log(res);
        // console.log(html);
        // parse1(html);
    }
    else if(res.statusCode == 404){
        console.log("Page not found");
    }else{
        console.log(err);
        console.log(res);
    }
}

function parse1(html){
    let $ = cheerio.load(html);
    let allResults = $("div.col-md-8.col-16");
    let y = allResults.toString();
    // fs.writeFileSync("allResults.html",y);
}

function matchPageHandler(err,res,html){
    if(err == null && res.statusCode == 200){
        // console.log(res);
        // console.log(html);
        // parseMatch(html);
    }
    else if(res.statusCode == 404){
        console.log("Page not found");
    }else{
        console.log(err);
        console.log(res);
    }
}

// function parseMatch(html){
//     // fs.writeFileSync("allMatches.html",html);
//     let $ = cheerio.load(html);
//     let allCards = $(".col-md-8.col-16");
//     console.log(allCards.length);
// }


