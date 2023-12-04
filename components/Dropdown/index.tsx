import clsx from "clsx";
import { FiChevronDown } from "react-icons/fi";

type Props = {
  label: string;
  selection?: string[];
}

function Dropdown({ label }: Props) {
  return (
    <div
      className={clsx(
        'bg-dark',
        'font-onest',
        'text-tertiary',
        'border',
        'border-tertiary',
        'rounded',
        'text-sm',
        'p-1.5',
        'w-fit',
        'capitalize',
        'cursor-pointer',
        'px-2',
        'py-1',
        // Hover
        'hover:bg-secondary'
      )}
    >
      <span className={clsx('inline-flex items-center justify-between')}>
        {label}
        <FiChevronDown className={clsx('ml-1.5')}/>
      </span>
    </div>
  )
}

export default Dropdown;