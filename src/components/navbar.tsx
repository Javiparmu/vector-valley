'use client'

import { useState } from 'react'
import { AppLogo } from './icons'
import Link from 'next/link'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  const onDarkModeChange = () => {
    document.documentElement.classList.toggle('dark')

    setDarkMode(!darkMode)
  }

  return (
    <nav className='flex justify-between items-center px-20 py-2'>
      <Link href='/'>
        <AppLogo className='w-14 h-14' color={'#EF4444'} />
      </Link>
      <Button onClick={onDarkModeChange} variant='ghost' size='icon'>
        {darkMode ? <Moon color='white' className='w-6 h-6' /> : <Sun className='w-6 h-6' />}
      </Button>
    </nav>
  )
}

export default Navbar