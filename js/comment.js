
// add Button Event Handler
document.getElementById('submit-comment').addEventListener('click', function () {

    // get userComment
    const commentBox = document.getElementById('new-comment');
    // const userComment = commentBox.value;

    // Create Comment Paragraph
    const newComment = document.createElement('p');
    newComment.innerText = commentBox.value;

    // append the comment 
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newComment);

    // Clean The Comment Box 
    commentBox.value = '';
});