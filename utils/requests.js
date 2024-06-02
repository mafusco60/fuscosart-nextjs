const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all artworks
async function fetchArtworks() {
	try {
        //Handle the case where the domain is not available yet
        if (!apiDomain) {
            return[];
        }
	  const res = await fetch(`${apiDomain}/artworks`, { cache: 'no-store' });
  
	  if (!res.ok) {
		throw new Error('Failed to fetch data');
	  }
  
	  return await res.json();
	} catch (error) {
	  console.log(error);
      return [];
	}
  }

//Fetch single artwork
async function fetchArtwork(id) {
    try {
        //Handle the case where the domain is not available yet
        if (!apiDomain) {
          console.log('apiDomain', apiDomain)
            return null;
        }
        const res = await fetch(`${apiDomain}/artworks/${id}`);
        console.log(apiDomain, 'apiDomain')
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return await res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}


  export { fetchArtworks, fetchArtwork }