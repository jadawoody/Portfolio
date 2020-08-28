
// console.log('JS connected')
// document.querySelector().onscroll=function(event)

// alert("Entering Jada's Portfolio! Welcome!")


document.querySelector('.emojiBtn').onclick = getDwight
function getDwight(){
    axios
    .get(`https://api.giphy.com/v1/gifs/search?api_key=yb149luAHTTk93BHeVERsDqNUUxcgJEC&q=the office&limit=25&offset=0&rating=g&lang=en`)
    .then((res)=> {
        console.log(res)
        let gifs=res.data.data;
        console.log(gifs)
        let randomnum=Math.floor(Math.random()*gifs.length)
        console.log(randomnum)
        let gif= gifs[randomnum].embed_url
        console.log(gif)

        document.querySelector(".popGoesHere").innerHTML += `<iframe src="${gif}" width="480" height="380" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`
        
    })
}


document.querySelector('.btn').onclick = getStats
function getStats(){
    axios
        .get(`https://dog.ceo/api/breeds/image/random`)
        .then((res)=> {
            //console.log(res.data)
            document.querySelector(".powGoesHere").innerHTML +=
            
            `<img src="${res.data.message}" />`

        })
}


