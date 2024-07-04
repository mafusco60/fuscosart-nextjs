"use client";
import { useState, useEffect } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import Spinner from "@/components/Spinner";
import Pagination from "@/components/Pagination";
export const dynamic = "force-dynamic";
const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [pageSize, setpageSize] = useState(9);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await fetch(
          `/api/artworks?page=${page}&pageSize=${pageSize}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setArtworks(data.artworks);
        setTotalItems(data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworks();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setpage(newPage);
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {artworks && artworks.length === 0 ? (
          <p>No artworks found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artworks &&
              artworks.map((artwork, index) => (
                <ArtworkCard artwork={artwork} key={index} />
              ))}
          </div>
        )}

        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Artworks;
