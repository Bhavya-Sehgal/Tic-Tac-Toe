import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  //console.log(props);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      } square`}
    >
      {value}
    </button>
  );
};

export default Square;
