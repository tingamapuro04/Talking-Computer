const playButton = document.getElementById("one")
const pauseButton = document.getElementById("two")
const stopButton = document.getElementById("three")
const speedInput = document.getElementById("speed")
const textInput = document.getElementById("text")

playButton.addEventListener("click", () => {
    playText(textInput.value)
})

pauseButton.addEventListener("click", pauseText )

stopButton.addEventListener("click", stopText)

function playText(text){
    if (speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speedInput.value || 1
    textInput.disabled = true
    utterance.addEventListener("end", ()=>{
        textInput.disabled = false
    })
    speechSynthesis.speak(utterance)
}

function pauseText(){
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText(){
    speechSynthesis.resume()
    speechSynthesis.cancel()
}