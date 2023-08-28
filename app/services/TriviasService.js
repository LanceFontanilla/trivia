import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"


class TriviasService {

    async getTrivias() {
        console.log('this is the trivia service')
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=15')
        const response_code = await response.json()

        console.log(response_code)
        let newTrivias = response_code.results.map(trivia => new Trivia(trivia))
        AppState.trivias = newTrivias
    }


}

export const triviasService = new TriviasService()