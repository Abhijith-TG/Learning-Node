import {URL} from 'url';

const myUrl = new URL("https://www.mywebsite.in:8080/home/datas?query=string#hash");


console.log(myUrl.hash);
console.log(myUrl.hostname);
console.log(myUrl.port);
console.log(myUrl.href);
console.log(myUrl.host);




