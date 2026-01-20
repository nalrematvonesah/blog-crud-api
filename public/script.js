const API_URL = "http://localhost:5000/blogs";

const form = document.getElementById("blogForm");
const blogsDiv = document.getElementById("blogs");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const blog = {
    title: title.value,
    body: body.value,
    author: author.value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog)
  });

  form.reset();
  loadBlogs();
});

async function loadBlogs() {
  const res = await fetch(API_URL);
  const blogs = await res.json();

  blogsDiv.innerHTML = blogs.map(blog => `
    <div class="blog">
      <h3>${blog.title}</h3>
      <p>${blog.body}</p>
      <small>Author: ${blog.author}</small><br>
      <button onclick="deleteBlog('${blog._id}')">Delete</button>
    </div>
  `).join("");
}

async function deleteBlog(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadBlogs();
}

loadBlogs();
