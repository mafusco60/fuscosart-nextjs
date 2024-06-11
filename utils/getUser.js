

// Fetch single user
async function fetchUser(id) {
    try {
      // Handle the case where the domain is not available yet
      if (!apiDomain) {
        return null;
      }
  
      const res = await fetch(`${apiDomain}/user/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
  export { fetchUser };