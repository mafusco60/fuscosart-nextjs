"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchArtwork } from "@/utils/requests";
import { toast } from "react-toastify";
import ArtworkImages from "@/components/ArtworkImages";

const ArtworkEditForm = () => {
  const { id } = useParams();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [fields, setFields] = useState({
    type: "",
    name: "",
    description: "",
    descriptive_words: "",

    orig_avail: false,
    orig_price: 0,
    orig_subst: "",
    orig_dimen: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Fetch the artwork data for form prefill
    const fetchArtworkData = async () => {
      try {
        const artworkData = await fetchArtwork(id);

        setFields(artworkData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArtworkData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const res = await fetch(`/api/artworks/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.status === 200) {
        router.push(`/artworks/${id}`);
      } else if (res.status === 401 || res.status === 403) {
        toast.error("Permission Denied");
        toast.success("Artwork updated successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    mounted &&
    !loading && (
      <form onSubmit={handleSubmit}>
        <h2
          className="text-3xl text-center 
          font-semibold mb-6 text-cyan-950"
        >
          Edit Artwork
        </h2>

        <div className="rounded-xl shadow-lg bg-cyan-100 relative p-10">
          <ArtworkImages images={fields.images} />
        </div>

        <label
          htmlFor="Image"
          className="block text-gray-700 font-bold mb-2 mt-5"
        >
          Image can be updated at this link: LINK
        </label>

        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-gray-700 font-bold mb-2 mt-8"
          >
            Type
          </label>
          <select
            id="type"
            name="type"
            defaultValue={fields.type}
            className="border rounded w-full py-2 px-3 focus:outline-cyan-900 focus:shadow-outline"
            required
            /*                 value={ fields.type }
             */ onChange={handleChange}
          >
            <option value="N/A">N/A</option>
            <option value="Graphite">Graphite</option>
            <option value="Colored Pencil">Colored Pencil</option>
            <option value="Charcoal">Charcoal</option>
            <option value="Alcohol Markers">Alcohol Markers</option>
            <option value="Oil Paint">Oil Paint</option>
            <option value="Oil Pastels">Oil Pastels</option>
            <option value="Pastels">Pastels</option>
            <option value="Acrylic">Acrylic</option>
            <option value="Watercolor">Watercolor</option>
            <option value="Mixed Media">Mixed Media</option>
            <option value="Digital Art">Digital Art</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Listing Name
          </label>
          <textarea
            type="text"
            id="name"
            name="name"
            className="border rounded w-full py-2 px-3 mb-2
               focus:outline-cyan-900 focus:shadow-outline"
            placeholder="eg. Poppy Field"
            required
            value={fields.name}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            className="border rounded w-full py-2 px-3 focus:outline-cyan-900 focus:shadow-outline"
            rows="4"
            placeholder="Description of artwork"
            required
            value={fields.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="descriptive_words"
            className="block text-gray-700 font-bold mb-2"
          >
            Descriptive Words
          </label>
          <textarea
            type="string"
            id="descriptive_words"
            name="descriptive_words"
            className="border rounded w-full py-2 px-3 
                focus:outline-cyan-900 focus:shadow-outline"
            rows="4"
            placeholder="Descriptive Words for artwork"
            value={fields.descriptive_words}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="original_available"
            className="block text-gray-700 font-bold mb-2"
          >
            Original Available
          </label>
          <select
            defaultValue={fields.orig_avail}
            type="type"
            id="original_available"
            name="orig_avail"
            className="border rounded w-full py-2 px-3 focus:outline-cyan-900 focus:shadow-outline"
            required
            /*                 value={ fields.orig_avail }
             */ onChange={handleChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="price_original"
            className="block text-gray-700 font-bold mb-2"
          >
            Price for Original Artwork
          </label>
          <input
            type="number"
            id="price_original"
            name="orig_price"
            className="border rounded w-full py-2 px-3 focus:outline-cyan-900 focus:shadow-outline"
            placeholder="Original Price"
            value={fields.orig_price}
            onChange={handleChange}
          ></input>
        </div>

        {
          <div className="mb-4">
            <label
              htmlFor="substrate"
              className="block text-gray-700 font-bold mb-2"
            >
              Original Substrate
            </label>
            <select
              defaultValue={fields.orig_subst}
              type="type"
              id="substrate"
              name="orig_subst"
              required
              className="border rounded w-full py-2 px-3 
                focus:outline-cyan-900 focus:shadow-outline"
              /*                 value={ fields.orig_subst }
               */
              onChange={handleChange}
            >
              <option value="N/A">N/A</option>
              <option value="artist paper">Artist Paper</option>
              <option value="canvas board">Canvas Board</option>
              <option value="stretched canvas">Stretched Canvas</option>
              <option value="wood">Wood</option>
              <option value="metal">Metal</option>
              <option value="glass">Glass</option>
              <option value="acrylic">Acrylic</option>
              <option value="other">Other</option>
            </select>
          </div>
        }

        {
          <div className="mb-4">
            <label
              htmlFor="Dimensions"
              className="block text-gray-700 font-bold mb-2"
            >
              Dimensions
            </label>
            <select
              defaultValue={fields.orig_dimen}
              type="text"
              id="dimensions"
              name="orig_dimen"
              className="border rounded w-full py-2 px-3 focus:outline-cyan-900 focus:shadow-outline"
              /*                 value={ fields.orig_dimen }
               */ onChange={handleChange}
            >
              <option value="N/A">N/A</option>
              <option value='4"x6"'>4"x6"</option>
              <option value='5"x7"'>5"x7"</option>
              <option value='8"x10"'>8"x10"</option>
              <option value='8"x12"'>8"x12"</option>
              <option value='9"x12"'>9"x12"</option>
              <option value='11"x14"'>11"x14"</option>
              <option value='12"x16"'>12"x16"</option>
              <option value='16"x20"'>16"x20"</option>
              <option value='18"x24"'>18"x24"</option>
              <option value='24"x36"'>24"x36"</option>
              <option value='30"x40"'>30"x40"</option>
              <option value='36"x48"'>36"x48"</option>
              <option value='48"x60"'>48"x60"</option>
              <option value='48"x72"'>48"x72"</option>
              <option value='60"x72"'>60"x72"</option>
              <option value="Other">Other</option>
            </select>
          </div>
        }

        <div className="mb-4">
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Artwork
          </button>
        </div>
      </form>
    )
  );
};

export default ArtworkEditForm;
