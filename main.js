const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime =  (totalTime / 5) * 2
const holdTime = totalTime/5 

breatheAnimation()

function breatheAnimation (){
    text.innerHTML = "INHALE!"
    container.className = 'container grow'

    setTimeout(()=> {
        text.innerText = 'HOOOOOLD IT!'

        setTimeout(() => {
            text.innerText = 'EXHALE! :)'
            container.className = 'container shrink'

        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)