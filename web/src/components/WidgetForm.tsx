
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { CloseButton } from './CloseButton'


const feedbackTypes = {
    BUG: {
        title: 'Problema'
    },
    IDEA:  {
        title: 'Ideia'

    },
    OTHER: {
        title: 'Outro'
    }
}

export function WidgetForm() {

    // first day finished
    return (
        // bringing position, and using cal() inside the tailwind css
        //w-[calc(100vw-2rem)] and with tablets md: wd:w-auto
        <div className='bg-zinc-900 p-4 relative rounded-2xl
         mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)]
          md:w-auto'>

            <header>

                <span className='text-xl leading-6'>Deixe seu feedback</span>

                <CloseButton/>
            </header>

            <div className="flex py-8 gap-2 w-full"
            >
                <button></button>
            </div>

            <footer className='text-xs text-neutral-400'>
                Feito com ♥ pela <a className='underline underline-offset-2' href='https://rocketseat.com.br'> Rocketseat</a>
            </footer>
        </div>
    )

}