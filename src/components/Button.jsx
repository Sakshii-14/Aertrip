import React from 'react';

function Button({ text, onClick }) {
  return (
    <button 
      className="font-bold flex items-center justify-center gap-2 text-slate-700 hover:bg-slate-400 bg-slate-200 px-2 py-1 rounded-full transition-all duration-200"
      onClick={onClick} 
    >
      {text}
      <p className='text-[0.7rem]'>&#9660;</p>
    </button>
  );
}

export default Button;
