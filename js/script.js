// console.log(1000);

// for (let i = 0; i <= 6; i++) {
//     console.log(i);
// }
const student = { name: 'Kismot Khan', age: 29, height: 60 };
const blogTitles = document.getElementsByTagName('h3');
for (const h3 of blogTitles) {
    // console.log(h3.innerText);
}

const blogDetails = document.getElementsByTagName('p');
for (const p of blogDetails) {
    // console.log(p.innerText);
}

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
const blogs = document.getElementById('blogs');
blogs.style.backgroundColor = 'red';
blogs.style.padding = '20px';
blogs.style.color = 'white';
blogs.style.fontWeight = 'bold';
blogs.style.fontFamily = 'sans-serif';
blogs.style.lineHeight = '20px';