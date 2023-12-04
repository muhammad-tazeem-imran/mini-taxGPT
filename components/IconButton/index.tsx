import React, { MouseEvent, MouseEventHandler } from 'react';

import './styles.css';

interface Props {
  iconEl: React.JSX.Element;
  variant?: 'Primary' | 'Secondary';
  disabled?: Boolean,
  onClick: MouseEventHandler,
  loading: boolean,
}

interface ButtonStyles {
  button: string;
  icon: string;
}

const variantStyles = {
  Primary: {
    button: 'bg-primary',
    icon: '',
  },
  Secondary: {
    button: 'bg-secondary',
    icon: 'text-tertiary',
  },
}

const defaultStyles = {
  button: 'font-semibold rounded-full cursor-pointer p-1',
  icon: 'text-3xl font-light text-dark',
}

function IconButton({
  variant = 'Primary',
  iconEl,
  onClick,
  loading,
}: Props) {
  const styles: ButtonStyles = variantStyles[variant];

  const handleClick = (event: MouseEvent) => {
    if (!loading) {
      onClick(event)
    }
  }

  return (
    <button className={`component_IconBtn ${styles.button} ${defaultStyles.button}`} onClick={handleClick}>
      <span className={`${styles.icon} ${defaultStyles.icon}`}>
        {loading ? <div className='loader' /> : iconEl}
      </span>
    </button>
  )
}

export default IconButton;