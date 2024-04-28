// App.js
import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  const convertToHTML = (markdownText) => {
    return { __html: markdownText.replace(/(?:\r\n|\r|\n)/g, '<br>') };
  };

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
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
  );
};

export default App;
