import React from 'react';

export default function Letter({ boardLetter }) {
  return (
      <div class="letter">
        <span>{boardLetter.toUpperCase()}</span>
      </div>
  );
}