
import { useState } from 'react'


import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react'
import { CloseButton } from '../CloseButton'
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: "Imagem de um lâmpada"
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um pensamento"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

     const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        // bringing position, and using cal() inside the tailwind css
        //w-[calc(100vw-2rem)] and with tablets md: wd:w-auto
        <div className='bg-zinc-900 p-4 relative rounded-2xl
         mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)]
          md:w-auto'>

            <header>

                <span className='text-xl leading-6'>Deixe seu feedback</span>

                <CloseButton />
            </header>
            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                // feedback type component goes here
           ): (
                <p>Hello World</p>
            )}

            <footer className='text-xs text-neutral-400'>
                Feito com ♥ pela <a className='underline underline-offset-2' href='https://rocketseat.com.br'> Rocketseat</a>
            </footer>
        </div>
    )

}