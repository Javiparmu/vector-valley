'use client'

import { ChevronDown } from 'lucide-react'

const ScrollDownButton = () => {
    const scrollDown = () => {
        const repositoryElement = document.getElementById('icon-repository')

        repositoryElement?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <button onClick={() => scrollDown()} className="mt-20 cursor-pointer">
            <ChevronDown className='text-gray-900 dark:text-white mt-20' size={100} />
        </button>
    )
}

export default ScrollDownButton