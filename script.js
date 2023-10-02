// console.log("helol")

let questions = [{
    question: 'Who played Witcher?',
    answer: 'Henry Cavill'
},
{
    question: 'What is the name of Witcher?',
    answer: 'Geralt of Rivia'
},
{
    question: 'Who is the main antagonist?',
    answer: 'Dracula'
}, 
{
    question: 'Who played Yennefer?',
    answer: 'Ana de Armas'
}, 
{
    question: 'What was the name of Witcher Horse?',
    answer: 'Roach'
}]

let resultBtn = document.getElementById("showFinal")
let nameArea = document.getElementById("nameArea")
let draculaCheck = document.getElementById("draculacheck")
let witchCheck = document.getElementById("witchcheck")
let witcherCheck = document.getElementById("witcher")
let startBtn = document.getElementById("start")
let firstArea = document.querySelector(".first")
let welcomeText = document.getElementById('welcome')
let questionText = document.getElementById('question')
let answerArea = document.getElementById('answerArea')
let nextBtn = document.getElementById('next')
let finalRes = document.getElementById('finalResult')
let villians = ['Dracula', 'Witch', 'Witcher']
let retryButton = document.getElementById('retry')
let finalScr = document.getElementById('finalScore')
let i = 1
let score = 0

function handleDracula(){
    if(draculaCheck.checked){
        if(nameArea.value == ''){
            firstArea.style.display = "none"
            questionText.innerHTML = `You cannot play as a stranger, SORRY :(`
            retryButton.style.display = "block"
            process.exit()
        }

        if(draculaCheck.value){
            firstArea.style.display = "none"
            welcomeText.innerHTML = `Welcome ${nameArea.value}, to the world of Dracula`
            setTimeout(()=>{
                welcomeText.style.display = "none"
                questionText.innerHTML = `${questions[0].question}`
                nextBtn.style.display = "block"
                answerArea.style.display = "block"
            },1000)
        }

        nextBtn.addEventListener("click", ()=>{
           if(i < questions.length){
            let userAnswer = answerArea.value.trim().toLowerCase()
            let correctAnswer = questions[i - 1].answer.toLowerCase()
            if(userAnswer == correctAnswer){
                score++
                answerArea.value = ''
            }else{
                answerArea.value = ''
            }
            i++
            questionText.innerHTML = `${questions[i - 1].question}`
               if(i == questions.length){
                   nextBtn.style.display = "none"
                   resultBtn.style.display = "block" 
               }
           }
        })
    }
}



function handleWitch(){
    if(witchCheck.checked){
        if(nameArea.value == ''){
            firstArea.style.display = "none"
            questionText.innerHTML = `You cannot play as a stranger, SORRY :(`
            retryButton.style.display = "block"
            process.exit()
        }

        if(witchCheck.value){
            firstArea.style.display = "none"
            welcomeText.innerHTML = `Welcome ${nameArea.value}, to the world of Witch`
            setTimeout(()=>{
                welcomeText.style.display = "none"
                questionText.innerHTML = `${questions[0].question}`
                nextBtn.style.display = "block"
                answerArea.style.display = "block"
            },1000)
        }

        nextBtn.addEventListener("click", ()=>{
           if(i < questions.length){
            let userAnswer = answerArea.value.trim().toLowerCase()
            let correctAnswer = questions[i - 1].answer.toLowerCase()
            if(userAnswer == correctAnswer){
                score++
                answerArea.value = ''
            }else{
                answerArea.value = ''
            }
            i++
            questionText.innerHTML = `${questions[i - 1].question}`
               if(i == questions.length){
                   nextBtn.style.display = "none"
                   resultBtn.style.display = "block" 
               }
           }
        })
    }
}


function handleWitcher(){
    if(witcherCheck.checked){
        if(nameArea.value == ''){
            firstArea.style.display = "none"
            questionText.innerHTML = `You cannot play as a stranger, SORRY :(`
            retryButton.style.display = "block"
            process.exit()
        }

        if(witcherCheck.value){
            firstArea.style.display = "none"
            welcomeText.innerHTML = `Welcome ${nameArea.value}, to the world of Witcher`
            setTimeout(()=>{
                welcomeText.style.display = "none"
                questionText.innerHTML = `${questions[0].question}`
                nextBtn.style.display = "block"
                answerArea.style.display = "block"
            },1000)
        }

        nextBtn.addEventListener("click", ()=>{
           if(i < questions.length){
            let userAnswer = answerArea.value.trim().toLowerCase()
            let correctAnswer = questions[i - 1].answer.toLowerCase()
            if(userAnswer == correctAnswer){
                score++
                answerArea.value = ''
            }else{
                answerArea.value = ''
            }
            i++
            questionText.innerHTML = `${questions[i - 1].question}`
               if(i == questions.length){
                   nextBtn.style.display = "none"
                   resultBtn.style.display = "block" 
               }
           }
        })
    }
}

resultBtn.addEventListener('click', () => {
    questionText.style.display = "none"
    answerArea.style.display = "none"
    showFinalRes(score)
    resultBtn.style.display = "none"
    finalScr.innerHTML = `Your final score is ${score}`
    retryButton.style.display = "block"
})


retryButton.addEventListener('click', () => {
    location.reload()
})


function showFinalRes(scr){
    if(scr >= 3){
        finalRes.innerHTML = `You won, Congratulations!`
       }else{
        finalRes.innerHTML = `You lost, Try again!`
       }
}












startBtn.addEventListener("click", ()=>{
    handleDracula()
    handleWitch()
    handleWitcher()
})