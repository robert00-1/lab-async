
document.addEventListener("DOMContentLoaded", () => {
  async function fetchPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const posts = await response.json();

      const postList = document.getElementById("post-list");
      postList.innerHTML = "";

      posts.forEach(post => {
        const li = document.createElement("li");

        const h1 = document.createElement("h1");
        h1.textContent = post.title; // must match API placeholder text

        const p = document.createElement("p");
        p.textContent = post.body; // must match API placeholder text

        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
      });

    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  fetchPosts();
});
