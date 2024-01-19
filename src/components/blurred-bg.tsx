import React from 'react'

const BlurredBg = () => {
  return (
    <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 -top-1 -z-10 transform-gpu overflow-hidden blur-3xl'>
        <div
            style={{
            clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[50%] aspect-[1200/700] w-[36rem] -translate-x-1/2 rotate-[35deg] bg-gradient-to-tr from-red-500 dark:from-indigo-500 to-indigo-500 dark:to-red-500 opacity-20 dark:opacity-10 sm:w-[72rem]'
        />
    </div>
  )
}

export default BlurredBg