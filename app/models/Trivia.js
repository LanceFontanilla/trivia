
export class Trivia {
    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswer = incorrect_answers

    }

    get TriviasCard() {
        return `
        
        <div class="row p-3">
          <div class="col-4 questionCard ">
            <h5 class="text-center fw-bold text-primary">${this.question}</h5>
            <div class="row p-3 d-flex justify-content-evenly">
              <p class="col-5 answerCard text-center fw-bold p-1">${this.correctAnswer}</p>
              <p class="col-5 answerCard text-center fw-bold p-1">${this.incorrectAnswer}</p>
            </div>
          </div>
        </div>

        `
    }
}