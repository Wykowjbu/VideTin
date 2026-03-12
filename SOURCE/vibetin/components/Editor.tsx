import React, { useState } from 'react';

export default function LegoEditor() {
  const [content, setContent] = useState<any[]>([]);

  const addBlock = (type: string) => {
    setContent([...content, { type, data: '' }]);
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl mb-4">Lego Editor</h2>
      <div className="flex gap-2 mb-4">
        <button onClick={() => addBlock('paragraph')} className="bg-gray-200 px-2 py-1 rounded">Paragraph</button>
        <button onClick={() => addBlock('image')} className="bg-gray-200 px-2 py-1 rounded">Image</button>
      </div>
      <div>
        {content.map((block, index) => (
          <div key={index} className="p-2 mb-2 border">{block.type} block</div>
        ))}
      </div>
    </div>
  );
}
