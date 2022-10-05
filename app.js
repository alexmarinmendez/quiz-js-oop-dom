// alert(`Welcome to the NO OOP Quiz!\nYou will see 3 questions.`)
function Quiz() {
    this.questions = []
    this.counter = 0
    this.addQuestion = function(question) {
        this.questions.push(question)
    }
    this.launch = function() {
        for (let i=0; i<this.questions.length; i++) {
            let userResponse = prompt(this.questions[i].getBody())
            if (this.questions[i].isCorrectAnswer(userResponse)) {
                console.log('You are right! 🥳')
                this.counter++
            } else {
                console.log('You are wrong! 😔')
            }
        }
        this.showResults()
    }
    this.showResults = function() {
        alert(`You got ${this.counter} points!`)
    }
}

function Question(title, answers, correctAnswer) {
    this.title = title
    this.answers = answers
    this.correctAnswer = correctAnswer
    this.getBody = function() {
        let body = this.title.toUpperCase() + '\n'
        for (let i=0; i<this.answers.length; i++) {
             body += (i+1) + '. ' + this.answers[i] + '\n'
        }
        return body
    }
    this.addAnswer = function(answer) {
        // this.answers[this.answers.length] = answer
        this.answers.push(answer)
    }
    this.isCorrectAnswer = function(userAnswer) {
        if (this.correctAnswer == userAnswer) return true
        else return false
    }
}

let question1 = new Question('What is the only thing that computers understand?', ["Machine Code", "High Level Languages", "Low Level Languages", "Algorithms"], 1)
let question2 = new Question('A list of instructions that enable a computer to perform a specific task is a...', ['Computer Program', 'Machine Code', 'Algorithm', 'Binary Code'], 3)
let question3 = new Question('Before a computer can understand a program it must be...', ['Translated into its machine code', 'Translated into a low level language', 'Translated into a high level language'], 1)

let quiz = new Quiz()
quiz.addQuestion(question1)
quiz.addQuestion(question2)
quiz.addQuestion(question3)
quiz.launch()


