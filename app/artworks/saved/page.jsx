"use client";
import ArtworksSaved from "@/components/ArtworksSaved";
import { useParams } from "react-router-dom";

const SavedArtworksPage = () => {
  return (
    <>
      <ArtworksSaved user={user} />
    </>
  );
};

export default SavedArtworksPage;
