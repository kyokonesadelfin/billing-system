import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import '../App.css';



const ForMoreInfoButton = () => {

    useEffect(() => {
        $(document).ready(function () {
            $("#arrow-button").hover(function () {
                $(".arrow").stop().animate({ right: "20px" });
            }, function () {
                $(".arrow").stop().animate({ right: "10px" });
            });
        });
    }, []);

    return (

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button id="for-more-info-btn">For More Information<span class="arrow-icon">➜</span></Button>
        </div>
    )
};

export default ForMoreInfoButton;