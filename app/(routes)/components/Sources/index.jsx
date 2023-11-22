'use client'

import clsx from 'clsx';
import { FiList } from 'react-icons/fi';

import styles from './styles.module.css';

function Sources({
  sources,
}) {
  const sourcesWithExternalLinks = sources.replace('<a ', '<a target="_blank" rel="noopener noreferrer" ')
  return (
    <>
      <h1
        className={clsx(
          'inline-flex',
          'justify-between',
          'text-2xl',
          '-ml-5',
          'mb-5',
        )}
      >
        <FiList />
        <p className='text-xl ml-3 mr-2'>Sources</p>
      </h1>
      <div className={styles.sourcesHTML}>
        <div dangerouslySetInnerHTML={{ __html: sourcesWithExternalLinks }} />
      </div>
    </>
  )
}

export default Sources;