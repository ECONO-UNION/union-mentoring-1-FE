const questionerView = `
<div class="game-start-box">
    <input id="answer-input">
    <button id="game-start-btn">시작하기 </button>
</div>`

const renderAnswerView = (opp,element) =>`
<div class="answerer-box">
<span id="opportunity-text"> 남은기회 : ${opp}</span>
<div>
 ${element}
</div>
</div>
`

const alphabetMarker = (v) =>  `<span class="alphabet-marker">${v}</span>`
const blank = ` <div class="blank"></div>`


let viewState

const initState = () => {
    const state = localStorage.getItem("viewState")
    if(!state) {
        viewState = false;
        localStorage.setItem("viewState", JSON.stringify({state: false}))
        return;
    }
    const parseValue = JSON.parse(state)
    viewState = parseValue.state
}

const initOpportunity = () => {
    const opportunity = localStorage.getItem("opp")
    if(!opportunity){
        localStorage.setItem("opp", JSON.stringify({opp: 5}))
        return;
    }
}

const changeViewState = (state) => {
    if(!state && state !== false) return;
    localStorage.setItem("viewState", JSON.stringify({state}))
    viewState = state
}

const decreaseOpportunity = () => {
    const opportunity = JSON.parse(localStorage.getItem("opp"));
    if(opportunity.opp-1 < 1) alert("실패")
    localStorage.setItem("opp", JSON.stringify({opp:opportunity.opp-1}))
}

const setInputAsnwer = (value) => {
    const inputAnswer = localStorage.getItem("inputAnswer")
    if(inputAnswer === undefined || inputAnswer === null){
        return localStorage.setItem("inputAnswer", JSON.stringify([]));
    }
    let list = JSON.parse(inputAnswer)
    if(list.find(v=> v == value)) return;
    list.push(value)
    localStorage.setItem("inputAnswer", JSON.stringify(list));
}

initState()

const App = document.getElementById("app");

const render = () => {
    App.innerHTML = viewState ? (function (){
        const opportunity = JSON.parse(localStorage.getItem("opp"))
        const answer = JSON.parse(localStorage.getItem("answer"))
        let inputAnswer = localStorage.getItem("inputAnswer")
        if(!inputAnswer) inputAnswer = [];
        else inputAnswer = JSON.parse(inputAnswer)
        let count = 0;
        const value = renderAnswerView(opportunity.opp,answer.answer.split("").map((v)=> {

            if( /[a-z]/.test(v)) {
                if(inputAnswer.find(i => i == v)) {
                    count++
                    return alphabetMarker(v)
                }
                return alphabetMarker("")
            }
            return blank
        }).join(""));
        if(count === answer.answer.trim().length) alert("성공")
        return value;
    })() : questionerView
}
render()



const gameManager = () => {
    if(!viewState){
        const button = document.getElementById("game-start-btn");
        const startGame = () => {
            const input = document.getElementById("answer-input");
            localStorage.setItem("answer",JSON.stringify({answer: input.value}))
            localStorage.setItem("inputAnswer", JSON.stringify([]));
            initOpportunity()
            changeViewState(!viewState);
            button.removeEventListener("click",startGame)
            render()
            gameManager()
        }
        button.addEventListener("click", startGame)
    }else{
        const answer = JSON.parse(localStorage.getItem("answer"))
        let inputAnswer = JSON.parse(localStorage.getItem("inputAnswer"))
        render()
        window.addEventListener("keydown", (event) => {
            if(!/[a-z]/.test(event.key)) return alert("잘못된 키를 입력중입니다.")
            if(answer.answer.includes(event.key)) {
                setInputAsnwer(event.key)
                inputAnswer = JSON.parse(localStorage.getItem("inputAnswer"))
                render()
            }
            else {
                decreaseOpportunity()
                render()
            }
        })
    }
}

gameManager()


