import React, { useState, useEffect } from 'react';


import './../styles/App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading process
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [markdown]);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <div className="textarea">
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <h1 dangerouslySetInnerHTML={{ __html: markdown }} />
        )}
      </div>
    </div>
  );
};

export default App;
