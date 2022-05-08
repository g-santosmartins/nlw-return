import { MailAdapter } from "../../adapters/mail-adapter"
import { FeedbacksRepository } from "../feedbacks-repository"


// bis rule app layer
interface SubmitFeedBackUseCaseRequest {
    type: string,
    comment: string,
    screenshot?: string
}   

export class SubmitFeedbackUseCase {
    // dependcy inversion 
    constructor(
       private feedbacksRepository: FeedbacksRepository,
       private mailAdapter: MailAdapter,
    ) {}


    async execute(request: SubmitFeedBackUseCaseRequest) {
        const {type, comment, screenshot} = request

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })   
        await this.mailAdapter.sendMail({
            subject: "Novo feedback",
            body:[
                `<div style="font-family: sans-serif; font-size:16px color: #111">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`,

            ].join('\n')
        })
    }

}