"use strict";
$(document).ready(() => {
    const slider = $("#image_list"); // fetching my ul list as slider
    // right button click event
    $("#right_button").click(() => {
        // get the value of the left property
        const leftProperty = parseInt(slider.css("left"));
        // move to the nest value of the left property
        let newLeftProperty = 0;
        /*
            If the user clicks on te right button, and it is not the last image,
            substract the display frame value (300) to it so that the image on the right is displayed.
        */
        if (leftProperty - 300 > -1800) {
            newLeftProperty = leftProperty - 300;
        }
        // change the left property
        slider.animate(
            { left: newLeftProperty },
            1000
        );
    });
    // left button click event
    $("#left_button").click(() => {
        const leftProperty = parseInt(slider.css("left"));
        let newLeftProperty = 0;
        /* 
            If the user clicks on the left button and the current image is not the first one (
                i.e., leftProperty < 0), add the width of the frame value to it so that the images
                on the left becomes visible.
            )
        */
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 300;
        }
        /*
            If user clicks on the left button when the first image is displaying, show the last
            image by substracting the largest value.
        */
        if (leftProperty == 0) {
            newLeftProperty = -1500;
        }
        slider.animate(
            { left: newLeftProperty },
            1000
        );
    });
});