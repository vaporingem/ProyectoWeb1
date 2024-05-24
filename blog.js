document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('commentsContainer');

    // Load comments from localStorage
    loadComments();

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        if (username && comment) {
            addComment(username, comment);
            saveComment(username, comment);
            commentForm.reset();
        }
    });

    function addComment(username, comment) {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `<strong>${username}</strong><p>${comment}</p>`;
        commentsContainer.appendChild(commentElement);
    }

    function saveComment(username, comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ username, comment });
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(({ username, comment }) => {
            addComment(username, comment);
        });
    }
});
