import React from 'react'
import SearchBar from './search-bar'
import IconList from './icon-list'

const IconRepository = () => {
  return (
    <section>
        <h2 className='text-6xl text-center mt-20 font-semibold text-gray-900 dark:text-white'>Explore our icons repository</h2>
        <p className='text-center text-xl mt-10 text-gray-500 dark:text-white'>Search for your favorite icons, logos, and more.</p>
        <SearchBar />
        <IconList />
    </section>

  )
}

export default IconRepository