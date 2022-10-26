
// create new post
async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post_url"]').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    }else {
        alert(response.statusText); 
    }
}
//delete post
async function deletePostHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}
// edit post
async function editPostHandler(event){
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    const response = await fetch(`api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title, 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
        document.location.replace('/dashboard/');
    }else {
        alert(response.statusText);
    }
}



document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
document.querySelector('.delete-post-btn').addEventListener('click', deletePostHandler);
document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler);
