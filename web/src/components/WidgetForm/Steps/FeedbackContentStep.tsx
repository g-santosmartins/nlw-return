import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
}
export function FeedbackContentStep({feedbackType} : FeedbackContentStepProps) {

    // only about the choosen option
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    return (
        <>
            <header>
                <button type="button"></button>
                <span className='text-xl leading-6 flex items-center gap-2'>
                    <img 
                    src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} 
                    className="h-6 w-6"
                    />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full"
            >
               
            </div>
        </>
    )
}