import React, { useState, useEffect } from 'react';
import '../App.css';

const SearchForm = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleBlur = () => setShowInput(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div style={{ display: 'inline-block' }}>
      {showInput ? (
        <input
          type='text'
          placeholder='Search'
          onBlur={handleBlur}
          className='me-3'
          style={{opacity: '0.7', padding: "5px", border : "none"}}
        />
      ) : (
        <i
          className='fa fa-search fa-lg me-3'
          onClick={() => setShowInput(true)}
          style={{ cursor: 'pointer',  
          color: scrolled ? "#010909" : "#F8FCFC"
          }}
        />
      )}
    </div>
  );
};

export default SearchForm;