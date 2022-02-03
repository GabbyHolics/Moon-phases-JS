import   { moonPhases }  from './utils.js';
const container = document.querySelector('.container');
const itemsMoonPhases = moonPhases

const data = (data) => {
    data.forEach(item =>{
        
        let name = document.createElement('h2');
        name.className = 'title'
        name.innerHTML = item.title;
        
        let image = document.createElement("img");
        image.src = item.img
        container.appendChild(image);
        container.appendChild(name)
    })
    

}


data(itemsMoonPhases)
 const sort = itemsMoonPhases.sort((a,b) => a.title > b.title ? 1 : -1)

console.log(sort)