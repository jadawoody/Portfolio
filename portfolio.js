
function getPortfolio(){
    axios
    .get(`https://ironrest.herokuapp.com/mia-aug2020-webdevs`)
    .then((res)=> {
        console.log(res.data)
        for (let i=0; i < res.data.length; i++) {
            //console.log(res.data[i])
        
document.querySelector("#classmates").innerHTML += `<li><a href=" ${res.data[i].website}" target="blank">${res.data[i].first_name}</a></li>`

        }
    })
    
}
getPortfolio()

// document.querySelector('#classmates').onclick = getPortfolio()