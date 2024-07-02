"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchArtwork } from "@/utils/requests";
import { fetchUser } from "@/utils/requests";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import ArtworkImages from "@/components/ArtworkImages";
import ArtworkHeaderImage from "./ArtworkHeaderImage";

const ArtworkEditForm = () => {
  const { id } = useParams();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [fields, setFields] = useState({
    type: "",
    name: "",
    description: "",
    descriptive_words: "",
    is_lands: false,
    /*orig_avail: false,
    orig_price: 0,
    orig_subst: "",
    orig_dimen: "", */
    images: [],
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
    const fetchUserData = async () => {
      try {
        const userData = await fetchUser(session.user.id);

        setIsAdmin(userData.is_admin);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
    fetchArtworkData();
  }, [session, id]);

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

  return mounted && !loading && isAdmin ? (
    <form onSubmit={handleSubmit}>
      <h2
        className="text-3xl text-center 
          font-semibold mb-6 text-cyan-950"
      >
        Edit Artwork
      </h2>

      <div className="rounded-xl shadow-lg bg-cyan-100 relative p-10">
        {fields.images !== null ? (
          <ArtworkHeaderImage image={fields.images[0]} />
        ) : (
          <p>Image not available</p>
        )}
      </div>

      <label
        htmlFor="Image"
        className="block text-gray-700 font-bold mb-2 mt-5"
      >
        Image can be updated at this link: LINK
      </label>
      {}

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
          htmlFor="is_landscape"
          className="block text-gray-700 font-bold mb-2"
        >
          Is it a Landscape?
        </label>
        <select
          defaultValue={fields.is_lands}
          type="type"
          id="is_landscape"
          name="is_lands"
          className="border rounded w-full py-2 px-3 focus:outline-cyan-900 focus:shadow-outline"
          required
          // value={fields.is_lands}
          onChange={handleChange}
        >
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </div>

      {/* <div className="mb-4">
          <label
            htmlFor="is_landscape"
            className="block text-gray-700 font-bold mb-2"
          >
            Is it a Landscape?
          </label>
          <input
            defaultValue={fields.is_lands}
            type="boolean"
            id="is_landscape"
            name="is_lands"
            className="border rounded w-full py-2 px-3 focus:outline-cyan-900 focus:shadow-outline"
            required
            value={fields.is_lands}
            onChange={handleChange}
          ></input>
        </div>
 */}
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
  ) : (
    <p className="text-rose-600 text-lg text-center">
      You are not authorized to view this page
    </p>
  );
};

export default ArtworkEditForm;
