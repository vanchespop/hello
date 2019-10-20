const field =
    document.getElementsByClassName('reply_field submit_post_field')[0],
    button = document.getElementsByClassName('flat_button addpost_button')[0];

field.focus();
field.innerText = "+";
button.click();
