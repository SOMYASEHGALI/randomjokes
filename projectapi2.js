let url="https://v2.jokeapi.dev/joke/Any?type=single";
let h1=document.querySelector("h1");
let button=document.querySelector("button");
button.addEventListener("click",async()=>{
    let joke=await get();
    h1.innerText=joke;
    console.log("button")
});
async function get(){
    try{
        let res=await axios.get(url);
        return (res.data.joke)
    }
    catch(e){
        console.log("error is",e)
    }
}
let but=document.querySelector(".read")
but.addEventListener("click",speaks)
function speaks() {
    // Get the input text from the input element
    var inputText = h1.innerText;

    // Create a SpeechSynthesisUtterance object with the input text
    var utterance = new SpeechSynthesisUtterance(inputText);

    // Use the SpeechSynthesis API to speak the text
    speechSynthesis.speak(utterance);}