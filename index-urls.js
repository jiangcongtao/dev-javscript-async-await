const fetch = require('node-fetch');
const urls = [
    "https://www.baidu.com",
    "https://www.bing.com",
    "https://github.com",
    "https://stackoverflow.com",
    "https://codeburst.io",
    "https://www.taobao.com/",
    "https://www.npmjs.com/"
];
let range = n => Array.from(Array(n).keys());

range(5).forEach(num => {
    urls.forEach(async(url) => {
        try {
            let response = await fetch(url, { timeout: 5000 });
            console.log(`${num} : ${response.statusText}, ${response.status}, ${url}`);
        } catch (error) {
            console.log(`${num} : Failed, ${url}`)
        }
    });
});



console.log('Program main path completed')