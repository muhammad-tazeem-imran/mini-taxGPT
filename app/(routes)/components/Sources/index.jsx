'use client'

import clsx from 'clsx';
import { FiList } from 'react-icons/fi';

import styles from './styles.module.css';

function Sources({
  sources,
}) {
  const sourcesWithExternalLinks = sources.replace('<a ', '<a target="_blank" rel="noopener noreferrer" ')
  const pages = [1, 2, 3, 4, 5];
  const selected = 0;
  return (
    <>
      <h1
        className={clsx(
          'inline-flex',
          'justify-between',
          'item-center',
          'text-2xl',
          'mb-5',
        )}
      >
        <FiList />
        <p className='text-xl ml-3 mr-2 font-onest'>Sources</p>
      </h1>
      <div className={styles.sourcesHTML}>
        <div dangerouslySetInnerHTML={{ __html: sourcesWithExternalLinks }} />
      </div>
      <div
        className={clsx(
          'bg-secondary',
          'flex',
          'justify-center',
          'items-center',
          'gap-2',
          'py-3',
          'px-6',
          'w-fit',
          'rounded-md',
          'mt-6',
          'mx-auto',
          'text-tertiary',
        )}
      >
        {pages.map((page, index) => (
          <>
            <p
              className={clsx(
                index == selected ? 'text-primary' : '',
              )}
            >
              {page}
            </p>
            {index != pages.length - 1 ? '|' : ''}
          </>
        ))}
      </div>
    </>
  )
}

export default Sources;