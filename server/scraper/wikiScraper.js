const axios = require('axios');
const cheerio = require('cheerio');

async function getAllLinks(url){
    const selector = '#mw-content-text > div > p > a'
    try {
        let response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const urlList = $(selector);
        return urlList;
    }catch(err){
        return null; 
    }
    
}

async function validateLinks(url , links, path){
    try {
        let response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const html = $('#mw-content-text > div > p')
    const text = html.text();
    for(let i = 0; i < links.length; i++){
        let link = links[i].attribs.href;
        
        let title = links[i].attribs.title;
        let linkValid;
        if (link) { 
            linkValid = link.indexOf('Help:') === -1 &&
                link.indexOf('File:') === -1 && 
                link.indexOf('Wikipedia:') === -1 && 
                link.indexOf('wiktionary.org/') === -1 && 
                link.indexOf('/wiki/') !== -1 &&
                path.indexOf('https://en.wikipedia.org' + link) === -1;
        } else
            linkValid = false;
        if(linkValid){
            let regex = /\(([^()]*)\)/g; //Matches for parentheses
            let matches = text.match(regex);
            if(matches){
                for(let j = 0; j < matches.length; j++){
                    if(matches[j].indexOf(title) > -1){
                        linkValid = false;
                    }
                }
            }
        }
        if(linkValid){
              linkValid = html.parents('i').length === 0;  
        }

        if(linkValid){
            return 'https://en.wikipedia.org' + link;
        }
    }
    } catch (error) {
        return null;
    }
}

async function followLink(url, steps, path, successfulCallback, failureCallback){
    try {
        const maxSteps = 100;
        path.push(url)
        let listOfLinks = await getAllLinks(url);
        
        let link = await validateLinks(url,listOfLinks, path);

        if (!link) {
            let failObj = {
                path: null, 
                steps: null, 
                error: true
            }
            failureCallback(failObj);
        }
        if (steps > maxSteps){
            let failObj = {
                path: null, 
                steps: null, 
                error: true
            }
            failureCallback(failObj);
        }
        if(link === 'https://en.wikipedia.org/wiki/Philosophy'){
            path.push('https://en.wikipedia.org/wiki/Philosophy')
            let successObj = {
                path: path,
                steps: path.length, 
                error: false
            }
            successfulCallback(successObj);
        }else{
            followLink(link, steps++, path, successfulCallback, failureCallback);
        }
        steps++;
        
    }catch (error){
        return null;
    }
} 

async function start(url, steps, path, successfulCallback, failureCallback){
    return await followLink(url, steps, path, successfulCallback, failureCallback)
}

module.exports = start;