
// console.log('JS connected')
// document.querySelector().onscroll=function(event)
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
// document.querySelector('.emojiBtn').onclick = getEmoji
// function getEmoji(){
//     const emojikey = access_key=123412341234
//     axios
//     .get(`https://emoji-api.com/emojis/grinning-squinting-face`)
//     .then((res)=>{
//         document.querySelector("popGoesHere").innerHTML +=

//         `<img src"${res.data.message}" />`
//     })
// }