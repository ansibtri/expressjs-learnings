// import url from 'url'

const myurl = new URL("https://example.org:8080");
myurl.search="?foo=bar";
myurl.username = "anish";
myurl.hash = "#herosection";
console.log(myurl);