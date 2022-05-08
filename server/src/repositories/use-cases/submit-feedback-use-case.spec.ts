import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// Spy to know when the func is called
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn()

const submitFeedbak = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {

        await expect(submitFeedbak.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "data:image/png;base64,erwerqwerqwerqwer"
        })).resolves.not.toThrow();


        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should be able to submit a feedback without a type', async () => {

        await expect(submitFeedbak.execute({
            type: "",
            comment: "example comment",
            screenshot: "data:image/png;base64,erwerqwerqwerqwer"
        })).rejects.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should be able to submit a feedback with an invalid screenshot format', async () => {

        await expect(submitFeedbak.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "12431234124123"
        })).rejects.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })


    it('should be able to submit a feedback without a comment', async () => {

        await expect(submitFeedbak.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64,erwerqwerqwerqwer"
        })).rejects.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })
})