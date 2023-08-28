import { AppState } from "../AppState.js"
import { triviasService } from "../services/TriviasService.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawTriviasCards() {
    console.log('drawing questions')

    let trivias = AppState.trivias
    let content = ''
    trivias.forEach(trivia => content += trivia.TriviasCard)
    setHTML('trivias', content)

}

export class TriviasController {
    constructor() {
        console.log("this is the trivia's controller")
        this.getTrivias()
        AppState.on('trivias', _drawTriviasCards)
    }


    async getTrivias() {
        await triviasService.getTrivias()
    }

}

