import React, { useState } from 'react';
import DottedArrow from '../../icons/DottedArrow';
import { StyledButton } from './style';
import { AnimatedButtonProps, ISquarePosition } from './model';

export default function AnimatedButton({
  text,
  buttonWidth
}: AnimatedButtonProps) {

  const [isHovered, setIsHovered] = useState(false);

  const getRandomPositions = (buttonHeight: number): ISquarePosition[] => {
    const positions: ISquarePosition[] = [];
    const squareSize = 20;
    const columns = Math.floor(buttonWidth / squareSize);
    const rows = Math.floor(buttonHeight / squareSize);
    const totalSquares = rows * columns;

    while (positions.length < totalSquares) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * columns);

      const position = {
        top: `${row * squareSize}px`,
        left: `${col * squareSize}px`,
        delay: Math.random() * 0.3,
      };

      if (!positions.some(pos => pos.top === position.top && pos.left === position.left)) {
        positions.push(position);
      }
    }

    return positions;
  };

  const buttonHeight = 60;
  const positions = getRandomPositions(buttonHeight);

  return (
    <StyledButton
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      buttonWidth={buttonWidth} /* Passa buttonWidth para StyledButton */
    >
      <span>{text}</span>
      <DottedArrow isHovered={isHovered} />
      {positions.map((pos, index) => (
        <div
          key={index}
          className="square"
          style={{
            top: pos.top,
            left: pos.left,
            width: '20px',
            height: '20px',
            animationDelay: `${pos.delay}s`,
          }}
        />
      ))}
    </StyledButton>
  );
}
