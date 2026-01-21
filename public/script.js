const API_URL = "http://localhost:5000/blogs";

const form = document.getElementById("blogForm");
const blogsDiv = document.getElementById("blogs");
const singleBlogDiv = document.getElementById("singleBlog");

const blogIdInput = document.getElementById("blogId");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");
const authorInput = document.getElementById("author");
const cancelBtn = document.getElementById("cancelEdit");

/* CREATE + UPDATE */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const blogData = {
    title: titleInput.value,
    body: bodyInput.value,
    author: authorInput.value,
  };

  if (blogIdInput.value) {
    // UPDATE → PUT /blogs/:id
    await fetch(`${API_URL}/${blogIdInput.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });
  } else {
    // CREATE → POST /blogs
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    });
  }

  resetForm();
  loadBlogs();
});

/* READ ALL → GET /blogs */
async function loadBlogs() {
  const res = await fetch(API_URL);
  const blogs = await res.json();

  blogsDiv.innerHTML = blogs.map(blog => `
    <div class="blog">
      <h3>${blog.title}</h3>
      <small>${blog.author}</small>

      <button onclick="viewBlog('${blog._id}')">View</button>
      <button onclick="editBlog('${blog._id}')">Edit</button>
      <button onclick="deleteBlog('${blog._id}')">Delete</button>
    </div>
  `).join("");
}

/* READ ONE → GET /blogs/:id */
async function viewBlog(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const blog = await res.json();

  singleBlogDiv.style.display = "block";
  singleBlogDiv.innerHTML = `
    <h2>${blog.title}</h2>
    <p>${blog.body}</p>
    <small>Author: ${blog.author}</small>
    <br><br>
    <button onclick="singleBlogDiv.style.display='none'">Close</button>
  `;
}

/* PREPARE UPDATE */
async function editBlog(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const blog = await res.json();

  blogIdInput.value = blog._id;
  titleInput.value = blog.title;
  bodyInput.value = blog.body;
  authorInput.value = blog.author;

  cancelBtn.style.display = "inline-block";
}

/* DELETE → DELETE /blogs/:id */
async function deleteBlog(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadBlogs();
}

/* RESET FORM */
function resetForm() {
  blogIdInput.value = "";
  titleInput.value = "";
  bodyInput.value = "";
  authorInput.value = "";
  cancelBtn.style.display = "none";
}

cancelBtn.addEventListener("click", resetForm);

loadBlogs();
