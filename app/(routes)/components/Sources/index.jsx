'use client'

import clsx from 'clsx';
import { FiList } from 'react-icons/fi';

import { FiExternalLink } from "react-icons/fi";

function Sources({
  sources,
}) {
  return (
    <>
      <h1
        className={clsx(
          'inline-flex',
          'justify-between',
          'items-center',
          'text-2xl',
          '-ml-5',
          'mb-5',
        )}
      >
        <FiList />
        <p className='text-xl ml-3 mr-2'>Sources</p>
      </h1>
      <ol>
        {sources.map(({ link, heading, text }) => (
          <>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'mt-2',
                'underline',
                'decoration-solid',
                'decoration-info',
                'text-info',
              )}
            >
              <li className='list-decimal'>
                {heading}
                <FiExternalLink />
              </li>
            </a>
            <ul className={clsx('mb-4')}>{text}</ul>
          </>
        ))}
      </ol>
    </>
  )
}

export default Sources;