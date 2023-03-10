import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import '../App.css';

const ForyourButton = () => {

  useEffect(() => {
    $(document).ready(function() {
      $("#arrow-button").hover(function() {
        $(".arrow").stop().animate({ right: "20px" });
      }, function() {
        $(".arrow").stop().animate({ right: "10px" });
      });
    });
  }, []);

  return (
    <Button id="arrow-button">For Company Profile<span class="arrow">➜</span></Button>
  )
};

export default ForyourButton;