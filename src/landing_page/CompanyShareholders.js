import React, { useEffect } from 'react';
import $ from 'jquery';
import '../App.css';


const CompanyShareholders = () => {

    useEffect(() => {
        $(document).ready(function() {
            $('.hover-image').hover(function() {
              $(this).animate({
                opacity: 2,
                width: '800px',
                height: '500px'
              }, 500);
            }, function() {
              $(this).animate({
                opacity: 0.7,
                width: '500px',
                height: '300px'
              }, 500);
            });
          });
      }, []);

      return (
    
             <img className='companyshareholders-image' src='/assets/shareholders.jpg' alt='partner-logo'/>

      );
};

export default CompanyShareholders