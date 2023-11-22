import React from 'react';
import clsx from 'clsx';

interface Props {
  iconEl?: React.JSX.Element;
  variant?: 'Primary' | 'Secondary';
  label?: string;
  disabled?: boolean,
}

interface ButtonStyles {
  button: string;
  icon: string;
}

const variantStyles = {
  Primary: {
    button: clsx(
      'bg-primary text-dark',
      'hover:bg-primary/25',
    ),
    icon: '',
  },
  Secondary: {
    button: clsx(
      'bg-secondary text-tertiary',
      'hover:bg-secondary/50',
    ),
    icon: '',
  },
}

const defaultStyles = {
  button: clsx(
    'm-1 px-3 py-1.5 font-normals rounded-md cursor-pointer inline-flex justify-around items-center',
    // Hover
    'transition hover:shadow-md',
    // Disabled
    'disabled:cursor-not-allowed'
  ),
  icon: 'text-lg font-light pr-2',
}

function Button({
    variant = 'Primary',
    label,
    iconEl,
    disabled = false,
}: Props) {
  const styles: ButtonStyles = variantStyles[variant];
  return (
    <button
      disabled={disabled}
      className={clsx(
        styles.button,
        defaultStyles.button
      )}
    >
      <span
        className={clsx(
          styles.icon,
          defaultStyles.icon
        )}
      >
        {iconEl}
      </span>
      {label && label}
    </button>
  )
}

export default Button;