let range = n => Array.from(Array(n).keys())
const waitFor = (ms) => new Promise(r => setTimeout(r.bind(null, ms), ms));

const nums = range(100); // 0,..,19
// use async function in .forEach callback
nums.forEach(async(num) => {
    let timeout_ms = Math.floor(5000 * Math.random());
    // console.log(`timeout: ${timeout_ms}`);
    const ret = await waitFor(timeout_ms);
    console.log(`${num}, \tplan(ms): ${timeout_ms} \ttaken(ms): ${ret}`);
});
console.log('Done');