
function getPortfolio(){
    axios
    .get(`https://ironrest.herkuapp.com/mia-aug2020-webdevs`)
    .then((res)=> {
        console.log(res.data)
        for (let i=0; i < res.data.length; i++) {
            console.log(res.data[i])
        
//document.querySelector("#classmates").innerHTML += `<li><a href=" ${res.data.website}"></a></a></li>`

        }
    })
    
}
getPortfolio()
console.log("test")

document.querySelector('#classmates').onclick = getPortfolio()