function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Amandeep" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve([`Post 1 by user ${userId}`, `Post 2 by user ${userId}`]),
      1000
    );
  });
}

function fetchComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([`Comment on ${post}`]), 1000);
  });
}

async function getUserData() {
  console.log("Fetching user...");
  const user = await fetchUser();
  console.log("User:", user);

  const posts = await fetchPosts(user.id);
  console.log("Posts:", posts);

  const comments = await fetchComments(posts[0]);
  console.log("Comments:", comments);
}

getUserData();
