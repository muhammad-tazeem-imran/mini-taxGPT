'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { FiUser } from 'react-icons/fi'

const Header = () => {
  return (
    <header className='py-10 flex justify-center'>
      <nav
        className={clsx(
          'container',
          'flex',
          'items-center',
          'tracking-wider',
        )}
      >
        <div
          className={clsx(
            'z-10',
            'flex',
            'max-w-[90rem]',
            'w-full',
            'justify-between',
            'ml-auto',
            'mr-auto',
          )}
        >
          {/* Logo Image aspect ratio(w/h) for resizing: 2.61307901907 */}
          <Image
            src='/images/taxGPT-logo.png'
            width={183}
            height={70}
            alt='logo'
          />
          <h1 className='text-light inline-flex justify-between items-center text-3xl'>
            <FiUser />
            <p className='text-lg ml-3 mr-2'>user@taxgpt.com</p>
          </h1>
        </div>
      </nav>
    </header>
  )
}

export default Header