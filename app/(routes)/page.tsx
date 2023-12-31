"use client"

import clsx from "clsx";
import { ChangeEvent, useState } from "react";

import {
  HOMEOWNER,
  FOREIGN_INVESTMENTS,
  SELF_EMPLOYMENT,
  STUDENT_LOANS,
  DONATIONS,
} from '@/app/constants/queryTags';
import Conversation from "./components/Conversation";
// import Sources from "./components/Sources";
import SearchBar from '@/components/SearchBar';
import Dropdown from "@/components/Dropdown";

type ChatType = {
  type: 'answer' | 'question';
  value: string;
}

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [chat, setChat] = useState<ChatType[]>([]);
  const [sources, setSources] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleQueryAsked = async () => {
    setLoading(true);

    const endpoint = '/api/gpt';
    try {
      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      const question = {
        type: 'question' as const,
        value: query,
      }
      const answer = {
        type: 'answer' as const,
        value: data.contentHtml,
        sources: data.sources,
      }
      console.log(data)
      setChat([
        ...chat,
        question,
        answer,
      ])
      setSources(data.sources)
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  if (!chat.length) {
    return (
      <div
        id='route-root'
        className={clsx(
          'z-10',
          'max-w-[800px]',
          'w-full',
          'lg:flex',
          'flex-col',
        )}
      >
        <div className='-translate-y-12'>
          <h1 className='text-[40px] font-semibold text-center mb-2 font-onest '>Your tax questions answered by TaxGPT</h1>
          <SearchBar
            onChange={handleQueryChange}
            onClick={handleQueryAsked}
            loading={loading}
            placeholder="Ask your test questions...."
          />
          <h4 className='my-2'>Try asking about</h4>
          <div className={clsx('flex gap-4 flex-wrap')}>
            <Dropdown label={HOMEOWNER} />
            <Dropdown label={FOREIGN_INVESTMENTS} />
            <Dropdown label={SELF_EMPLOYMENT} />
            <Dropdown label={STUDENT_LOANS} />
            <Dropdown label={DONATIONS} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      id='route-root'
      className={clsx(
        'z-10',
        'max-w-[90rem]',
        'w-full',
        'lg:flex',
        'flex-col',
        'flex-1',
      )}
    >
      <div
        className={clsx(
          'query',
          'relative',
          'w-full',
          'justify-between',
          'flex-1',
        )}
      >
        <div
          className={clsx(
            'text-light',
            'outline-none',
            'flex',
            'flex-1',
            'flex-col',
            'align-between',
            'justify-between',
            'pt-2',
            'pb-10',
          )}
        >
          <div
            className={clsx(
              'mb-10',
              'overflow-y-hidden',
            )}
          >
            <Conversation chat={chat} />
          </div>
          <div
            className={clsx(
              'max-w-[800px]',
            )}
          >
            <SearchBar
              onChange={handleQueryChange}
              onClick={handleQueryAsked}
              loading={loading}
              placeholder="Ask your follow-up questions...."
            />
          </div>
        </div>

        <div
          className={clsx(
            'text-light',
            'self-center',
            'outline-none',
            'px-4',
            'py-2',
          )}
        >
        </div>
      </div>


    </div>
  )
}
