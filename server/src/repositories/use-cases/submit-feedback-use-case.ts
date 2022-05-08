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
    ) {}


    async execute(request: SubmitFeedBackUseCaseRequest) {
        const {type, comment, screenshot} = request

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })   
    }
}