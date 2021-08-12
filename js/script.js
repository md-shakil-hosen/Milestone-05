// console.log(1000);

// for (let i = 0; i <= 6; i++) {
//     console.log(i);
// }
// // const student = { name: 'Kismot Khan', age: 29, height: 60 };
// // const blogTitles = document.getElementsByTagName('h3');
// // for (const h3 of blogTitles) {
// //     // console.log(h3.innerText);
// }

const blogDetails = document.getElementsByTagName('p');
for (const p of blogDetails) {
    // console.log(p.innerText);
}

// heading 
const headingTitle = document.getElementById('headingTitle');
headingTitle.style.textAlign = 'center';
headingTitle.style.fontFamily = 'sans-serif';
headingTitle.style.color = 'purple';
headingTitle.style.textTransform = 'uppercase';
headingTitle.style.border = '2px solid black';
headingTitle.style.padding = '10px'
headingTitle.style.marginLeft = '25%';
headingTitle.style.marginRight = '25%';
headingTitle.style.borderRadius = '30px';
// one Blog 
const blogs = document.getElementById('blogs');
blogs.style.backgroundColor = 'red';
blogs.style.padding = '20px';
blogs.style.color = 'white';
blogs.style.fontWeight = 'bold';
blogs.style.fontFamily = 'sans-serif';
blogs.style.lineHeight = '20px';

// getElementsByClassName 
const articles = document.getElementsByClassName('article');
for (const article of articles) {
    article.style.backgroundColor = 'red';
    article.style.padding = '20px';
    article.style.color = 'white';
    article.style.fontWeight = 'bold';
    article.style.lineHeight = '20px';
    article.style.margin = '5px';
    article.style.borderRadius = '10px';
}

const blogTitles = document.getElementsByClassName('blogTitle');
for (const blogTitle of blogTitles) {
    blogTitle.style.textAlign = 'center';
}
