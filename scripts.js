document.addEventListener('DOMContentLoaded', () => {
    // Handle project form submissions
    document.getElementById('project-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;
        const summary = document.getElementById('project-summary').value;

        const projectHtml = `
            <div class="project">
                <h2>${title}</h2>
                <p>Description and Objectives: ${description}</p>
                <p>Summary: ${summary}</p>
                <div class="forum">
                    <h3>Comments</h3>
                    <form class="comment-form">
                        <input type="text" class="comment-name" placeholder="Name" required>
                        <input type="text" class="comment-expertise" placeholder="Expertise" required>
                        <textarea class="comment-text" placeholder="Your Comment" required></textarea>
                        <button type="submit">Post Comment</button>
                    </form>
                    <div class="comments-section">
                        <!-- Comments will be appended here -->
                    </div>
                </div>
                <div class="like-dislike">
                    <button class="like-button">Like</button>
                    <button class="dislike-button">Dislike</button>
                    <span class="like-count">Likes: 0</span>
                    <span class="dislike-count">Dislikes: 0</span>
                </div>
            </div>
        `;
        document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHtml);

        // Clear the form
        document.getElementById('project-form').reset();
    });

    // Handle comment submissions
    document.addEventListener('submit', function(event) {
        if (event.target.classList.contains('comment-form')) {
            event.preventDefault();

            const name = event.target.querySelector('.comment-name').value;
            const expertise = event.target.querySelector('.comment-expertise').value;
            const commentText = event.target.querySelector('.comment-text').value;

            const commentHtml = `
                <div class="comment">
                    <p><strong>${name}</strong> (${expertise})</p>
                    <p>${commentText}</p>
                </div>
            `;

            event.target.nextElementSibling.insertAdjacentHTML('beforeend', commentHtml);

            // Clear the comment form
            event.target.reset();
        }
    });

    // Handle like and dislike button clicks
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('like-button') || event.target.classList.contains('dislike-button')) {
            const button = event.target;
            const projectDiv = button.closest('.project'); // Find the closest project container
            const likeCountElement = projectDiv.querySelector('.like-count');
            const dislikeCountElement = projectDiv.querySelector('.dislike-count');

            if (button.classList.contains('like-button')) {
                let count = parseInt(likeCountElement.textContent.replace('Likes: ', '')) || 0;
                likeCountElement.textContent = `Likes: ${count + 1}`;
            }
            if (button.classList.contains('dislike-button')) {
                let count = parseInt(dislikeCountElement.textContent.replace('Dislikes: ', '')) || 0;
                dislikeCountElement.textContent = `Dislikes: ${count + 1}`;
            }
        }
    });

    // Handle publication upload
    document.getElementById('upload-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const publicationName = document.getElementById('publication-name').value;
        const pdfFile = document.getElementById('pdf-file').files[0];
        const publicationLink = document.getElementById('publication-link').value;

        const publicationHtml = `
            <div class="publication">
                <h3>${publicationName}</h3>
                <p><a href="${URL.createObjectURL(pdfFile)}" download>Download PDF</a></p>
                <p><a href="${publicationLink}" target="_blank">Read Online</a></p>
            </div>
        `;
        document.querySelector('#uploaded-publications').insertAdjacentHTML('beforeend', publicationHtml);

        // Clear the form
        document.getElementById('upload-form').reset();
    });

    // Handle news form submissions
    document.getElementById('news-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('news-title').value;
        const content = document.getElementById('news-content').value;

        const newsHtml = `
            <div class="news-item">
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        `;
        document.querySelector('#news-list').insertAdjacentHTML('beforeend', newsHtml);

        // Clear the form
        document.getElementById('news-form').reset();
    });

    // Handle news PDF upload
    document.getElementById('upload-news-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const newsFile = document.getElementById('news-file').files[0];

        const newsHtml = `
            <div class="news-item">
                <h3>${newsFile.name}</h3>
                <p><a href="${URL.createObjectURL(newsFile)}" download>Download PDF</a></p>
                <embed src="${URL.createObjectURL(newsFile)}" width="600" height="400" type="application/pdf">
            </div>
        `;
        document.querySelector('#news-list').insertAdjacentHTML('beforeend', newsHtml);

        // Clear the form
        document.getElementById('upload-news-form').reset();
    });

    // Handle member form submissions
    document.getElementById('member-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('member-name').value;
        const bio = document.getElementById('member-bio').value;
        const contact = document.getElementById('member-contact').value;

        const memberHtml = `
            <div class="member">
                <h3>${name}</h3>
                <p>${bio}</p>
                <p>Contact: ${contact}</p>
                <button class="follow-button">Follow</button>
            </div>
        `;
        document.querySelector('#members-list').insertAdjacentHTML('beforeend', memberHtml);

        // Clear the form
        document.getElementById('member-form').reset();
    });

    // Handle follow button clicks
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('follow-button')) {
            event.target.textContent = event.target.textContent === 'Follow' ? 'Following' : 'Follow';
        }
    });
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = tab.id === tabId ? 'block' : 'none';
    });
}
