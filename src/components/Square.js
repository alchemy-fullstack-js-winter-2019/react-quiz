import React from 'react';

const Square({ text, textControl, color  }) {
  return (
    <>
    <div>
      <span value={text} onChange={textControl} color={color} />
    </div>
    </>
  );
}
export default Square;
