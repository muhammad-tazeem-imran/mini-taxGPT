import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import typingStyles from './typingAnimation.module.css'

const TypingAnimation = ({ message }) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let textIndex = 0;
    let timeout;

    const type = () => {
      if (textIndex < message.length - 1 && isTyping) {
        setCurrentText(prevText => prevText + message[textIndex]);
        textIndex++;
        timeout = setTimeout(type, 35);
      } else {
        setCurrentText(prevText => prevText.slice(0, -1));
        setIsTyping(false);
        clearTimeout(timeout);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [isTyping, message]);

  return (
    <div className={typingStyles.typingAnimation}>
      <span className={styles.typingContent}>
        <span
          className={`${typingStyles.textContent} ${styles.conversationHTML}`}
          dangerouslySetInnerHTML={{ __html: currentText }}
        />
      </span>
    </div>
  );
};

export default TypingAnimation;