import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypewriterText({ text, speed = 35, className = '' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let index = 0;
    const timer = window.setInterval(() => {
      setDisplayText((value) => value + text[index]);
      index += 1;
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed]);

  return <p className={`whitespace-pre-wrap text-slate-100 ${className}`}>{displayText}</p>;
}
