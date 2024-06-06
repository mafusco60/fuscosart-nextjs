import connectDB from "@/config/database";
import Artwork from "@/models/Artwork";


//GET /api/artworks/search
export const GET = async (request) => {
try {
  await connectDB();

  const {searchParams} = new URL(request.url);

  const keywords = searchParams.get('keywords');
  const artworkType = searchParams.get('artworkType');
 
  const keywordsPattern = new RegExp(keywords, 'i');

  // Match keywords pattern against database fields
  let query = {
    $or: [
      {name: keywordsPattern},
      {description: keywordsPattern},
      {descriptive_words: keywordsPattern},
      {type: keywordsPattern},
      /* {'original.price': keywordsPattern},
      {'original.dimensions': keywordsPattern},
      {'original.substrate': keywordsPattern},
      {'original.available': keywordsPattern}, */
    ],
    
  };

  // Only check for artworkType if it is not 'All'
  if (artworkType && artworkType !== 'All') {
    const typePattern = new RegExp(artworkType, 'i');
    query.type = typePattern;
  }  

  const artworks = await Artwork.find(query);

  return new Response (JSON.stringify(artworks),
  {status: 200});


} catch (error) {
  console.log(error);
  return new Response ('Something went wrong'),
  {status: 500};

}
}
