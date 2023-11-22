"use client"

import clsx from 'clsx';
import { FiChevronsRight } from "react-icons/fi";
import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useRef,
} from "react";
import IconButton from "../IconButton";

type Props = {
  variant?: 'Primary' | 'Secondary';
  onClick: MouseEventHandler,
  onChange: ChangeEventHandler,
  loading: boolean,
}

function SearchBar({
  onChange,
  onClick,
  loading,
}: Props) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      const newHeight = Math.min(event.target.scrollHeight, 104)
      textAreaRef.current.style.height = `${newHeight}px` ;
    }
    onChange(event)
  }

  return (
    <div className={clsx(
      "relative",
      "flex",
      "w-full",
    )}>
      <textarea
        ref={textAreaRef}
        className={clsx(
          "block",
          "w-full",
          "p-4",
          "my-2",
          "pr-20",
          "bg-dark",
          "placeholder-tertiary",
          "text-sm",
          "text-light",
          "break-words",
          "border-2",
          "border-primary",
          "rounded-lg",
          "outline-none",
          "resize-none",
        )}
        placeholder="Ask your test questions...."
        rows={1}
        onChange={handleChange}
      />

      <span
        className={clsx(
          "text-white",
          "absolute",
          "end-2",
          "self-center",
          "outline-none",
          "px-4",
          "py-2",
        )}
      >
        <IconButton
          iconEl={<FiChevronsRight />}
          onClick={onClick}
          loading={loading}
        />
      </span>
    </div>
  )
}

export default SearchBar;