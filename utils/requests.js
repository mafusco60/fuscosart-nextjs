const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all artworks
async function fetchArtworks({ showFeatured = false } = {}) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(
      `${apiDomain}/artworks${showFeatured ? "/featured" : ""}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch single artwork
async function fetchArtwork(id) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/artworks/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Fetch single user
async function fetchUser(id) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/users/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Fetch single user
async function fetchUsers() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/users`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function fetchBookmark() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/bookmarks/:user.id`);
    console.log(res, "res-req");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchArtworks, fetchArtwork, fetchUsers, fetchUser, fetchBookmark };
