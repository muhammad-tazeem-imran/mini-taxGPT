// import React, { useState, useEffect } from 'react';

// const TypingAnimation = ({ message }) => {
//   const [currentText, setCurrentText] = useState('');
//   const [isTyping, setIsTyping] = useState(true);

//   useEffect(() => {
//     let textIndex = 0;
//     let timeout;

//     const type = () => {
//       if (textIndex < message.length - 1 && isTyping) {
//         setCurrentText(prevText => prevText + message[textIndex]);
//         textIndex++;
//         timeout = setTimeout(type, 25);
//       } else {
//         setIsTyping(false);
//         clearTimeout(timeout);
//       }
//     };

//     type();

//     return () => clearTimeout(timeout);
//   }, [isTyping, message]);

//   return (
//     <div className="typing-animation">
//       <div dangerouslySetInnerHTML={{ __html: currentText }} />
//       <span className="blink-caret">{isTyping ? '|' : ''}</span>
//       {/* {isTyping && <span className="blink-caret">|</span>} */}
//     </div>
//   );
// };

// export default TypingAnimation;
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const TypingAnimation = ({ message, completeInstantly }) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const instantCompleteRef = useRef(false);

  useEffect(() => {
    let textIndex = 0;
    let timeout;

    const type = () => {
      if ((completeInstantly || instantCompleteRef.current) && textIndex < message.length) {
        setCurrentText(message);
        setIsTyping(false);
        clearTimeout(timeout);
      } else if (textIndex < message.length - 1 && isTyping) {
        setCurrentText(prevText => prevText + message[textIndex]);
        textIndex++;
        timeout = setTimeout(type, 50); // Adjust typing speed here (milliseconds)
      } else {
        setIsTyping(false);
        clearTimeout(timeout);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [isTyping, message, completeInstantly]);

  useEffect(() => {
    if (completeInstantly) {
      instantCompleteRef.current = true;
    }
  }, [completeInstantly]);

  return (
    <div className="typing-animation">
      <div className='innerText' dangerouslySetInnerHTML={{ __html: currentText }} />
      <span className="blink-caret">{isTyping ? '|' : ''}</span>
    </div>
  );
};

export default TypingAnimation;