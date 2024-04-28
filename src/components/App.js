import React, { useState } from 'react';
import './styles/App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleChange}
        placeholder="Write markdown here..."
      ></textarea>
      <div className="preview">
        {markdown && (
          <>
            <h1>Markdown Preview</h1>
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: markdown }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
