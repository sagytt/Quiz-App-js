
const form = document.getElementById('quiz-form')
const answers = Array.from(document.querySelectorAll('.answer'))
const questionItems = document.querySelectorAll(".question-item")
const alert = document.querySelector('#alert')

form.addEventListener("submit", e => {
    e.preventDefault()

    //to mark evrything as incorrect
    questionItems.forEach(questionItem =>{
        questionItem.classList.add('incorrect')
        questionItem.classList.remove('correct')
    })
//    Get all selected answers
const checkedAnswers = answers.filter(answer => answer.checked)
    console.log(checkedAnswers)

//Checking if answers are correct with loop
checkedAnswers.forEach(answer => {
    const isCorrect = answer.value === 'true'
    const qeustionItem = answer.closest('.question-item')

    //If correct answer add class 'correct to the parent with the class 'question-item'
    //and remove the 'incorrect'.
    if(isCorrect){
        qeustionItem.classList.add('correct')
        qeustionItem.classList.remove('incorrect')
    }else{
        qeustionItem.classList.add('incorrect')
        qeustionItem.classList.remove('correct')
    }

    const allTrue = checkedAnswers.every(answer => answer.value === 'true')
    const allAnswered = checkedAnswers.length === questionItems.length
    if(allTrue && allAnswered){
        alert.classList.add(".active");
        setTimeout(() =>{
            alert.classList.remove(".active")
        },1000)
    }
})
})
