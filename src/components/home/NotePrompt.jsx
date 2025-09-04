import React, { useState } from 'react';
import ButtonBlue from '../../components/common/ButtonBlue';

const NotePrompt = ({ note, onSave, onClose }) => {
  const [title, setTitle] = useState(note ? note.title : '');
  const [body, setBody] = useState(note ? note.body : '');

  const handleSave = () => {
    onClose()
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center absolute z-50 noteprompt font-medium'>
      <div className="w-1/4 h-4/5 mx-auto rounded-xl bg-white font-black shadow-xl p-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-400 font-medium"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          className="w-full p-2 mb-4 border border-gray-400 h-64 font-medium"
        />
        <ButtonBlue label="Save" sizeClass="btn-sm" clickHandler={handleSave} />
      </div>
    </div>
  );
};

export default NotePrompt;
