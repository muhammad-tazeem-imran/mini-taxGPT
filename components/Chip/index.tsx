import clsx from "clsx";

type Props = { label: string }

function Chip({ label }: Props) {
  return (
    <div
      className={clsx(
        'bg-secondary',
        'text-tertiary',
        'rounded',
        'text-sm',
        'p-1.5',
        'w-fit',
        'capitalize',
        'font-onest',
      )}
    >
      {label}
    </div>
  )
}

export default Chip;