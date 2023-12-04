"use client"

import clsx from 'clsx';
import { FiChevronsRight } from "react-icons/fi";
import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEvent,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import IconButton from "../IconButton";

type Props = {
  onClick: MouseEventHandler,
  onChange: ChangeEventHandler,
  loading: boolean,
  placeholder: string,
}

function SearchBar({
  onChange,
  onClick,
  loading,
  placeholder,
}: Props) {
  const [focused, setFocused] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      const newHeight = Math.min(event.target.scrollHeight, 104)
      if (newHeight == 104) {
        textAreaRef.current.style.height = `${newHeight}px`;
      } else {
        textAreaRef.current.style.height = `${newHeight + 8}px`;
      }
    }
    onChange(event)
  };

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
  };
  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current && event.target.value == '') {
      setFocused(false);
    }
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
          "h-20",
          "p-4",
          "py-6",
          "my-2",
          "pr-20",
          "bg-dark",
          "placeholder-tertiary",
          "break-words",
          "border-2",
          "border-primary",
          "rounded-lg",
          "outline-none",
          "resize-none",
        )}
        placeholder={placeholder}
        rows={1}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
          variant={focused ? 'Primary' : 'Secondary'}
        />
      </span>
    </div>
  )
}

export default SearchBar;