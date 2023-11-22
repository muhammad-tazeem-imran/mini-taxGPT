'use client'

import clsx from 'clsx';

import { FiAlignLeft } from 'react-icons/fi';
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { FiCopy } from 'react-icons/fi';
import { FiShare } from 'react-icons/fi';

import Chip from '@/components/Chip';
import Button from '@/components/Button';
import TypingAnimation from './typing';
import './styles.css';

const defaultTag = 'homeowner'

function Conversation({
  chat,
  tag = defaultTag,
}) {
  return (
    <>
      {chat.map(({ type, value }, index) => {
        if (type == 'question') {
          return (
            <div key={`question_${index}`}>
              <Chip label={tag} />
              <div className='text-light pt-2 pb-4'>
                {value}
              </div>
            </div>
          )
        } else {
          return (
            <div key={`answer_${index}`}>
              <h1 className='text-light inline-flex justify-between items-center text-2xl'>
                <FiAlignLeft />
                <p className='text-xl ml-3 mr-2'>Answer</p>
              </h1>
              <div className='text-tertiary pt-2 pb-4 innerText'>
                {(index == chat.length - 1) ? (
                  <TypingAnimation message={value} />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: value }} />
                )}
              </div>
                <div className={clsx('flex', 'mb-8')}>
                  <Button variant='Secondary' label='Like' iconEl={<FiThumbsUp />}/>
                  <Button variant='Secondary' label='Dislike' iconEl={<FiThumbsDown />}/>
                  <Button variant='Secondary' label='Copy' iconEl={<FiCopy />}/>
                  <Button variant='Secondary' label='Share' iconEl={<FiShare />}/>
                </div>
            </div>
          )
        }
      })}
    </>
  )
}

export default Conversation;