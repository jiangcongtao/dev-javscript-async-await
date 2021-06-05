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

const start = async() => {
    urls.forEach(async(url) => {
        try {
            let response = await fetch(url, { timeout: 5000 });
            console.log(`${response.statusText}, ${response.status}, ${url}`);
        } catch (error) {
            console.log(`Failed, ${url}`)
        }
    });
};

start();

console.log('Program main path completed')