import ArtworkAddForm from "@/components/ArtworkAddForm";

const AddArtworkPage = () => {
  return (
    <section className="bg-cyan-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <ArtworkAddForm />
        </div>
      </div>
    </section>
  );
};
export default AddArtworkPage;
