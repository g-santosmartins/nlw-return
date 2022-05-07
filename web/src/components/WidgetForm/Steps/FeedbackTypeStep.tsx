import { useState } from "react"
import { FeedbackType, feedbackTypes } from "../"
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeStepProps {

    // receives a feedbacktype type as a func
    onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <>
            <header>

                <span className='text-xl leading-6'>Deixe seu feedback</span>

                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full"
            >
                {/* destructiing array */}
                {Object.entries(feedbackTypes).map(([key, value], index) => {

                    console.log(key, value)
                    return (
                        <button
                            key={index}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2
                 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:"
                            onClick={() => { onFeedbackTypeChanged(key as FeedbackType) }}
                            type="button"

                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <button>{value.title}</button>
                        </button>
                    )
                })}
            </div>
        </>

    )
}