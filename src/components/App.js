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
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleChange}
        placeholder="Write markdown here..."
      ></textarea>
      <h2
        className="preview"
        dangerouslySetInnerHTML={convertToHTML(markdown)}
      ></h2>
    </div>
  );
};

export default App;
