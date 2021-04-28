import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Error from "../../components/Error";
import web3 from "./../../containers/web3";

const Mint = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });
  const [loading, setLoading] = useState(false);
  const { mintMedia } = web3.useContainer();
  const router = useRouter();
  const { address } = router.query;
  const { control, register, handleSubmit, errors } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "royalties",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await mintMedia(
        acceptedFiles[0],
        data.name,
        data.description,
        data.royalty,
        data.royalties
      );
      router.push(`/${address}/success`);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };
  const onAppend = () => append({ collaborator: "", shares: "" });

  return (
    <div className="relative pb-96">
      <Navbar />
      <div className="w-1/2 mt-20 container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="p-6 border rounded">
            <h3 className="font-bold text-2xl">NFT Creation</h3>

            <div
              {...getRootProps({
                className:
                  "dropzone mt-5 p-12 bg-gray-100 border-2 border-dashed border-gray-300 text-center",
              })}
            >
              <input name="media" {...getInputProps()} />
              <p className="text-gray-400">
                Drag and drop media content, or click to select.
              </p>
            </div>
            <aside className="mt-5">
              {acceptedFiles[0] && <p>{acceptedFiles[0].path}</p>}
            </aside>

            <div className="mt-5">
              <label htmlFor="name" className="block font-bold">
                Title
              </label>
              <input
                type="text"
                id="name"
                name="name"
                ref={register({ required: true })}
                placeholder="Enter Title"
                className="w-full mt-2 p-3 border rounded border-gray-300 shadow"
              />
              {errors.name && <Error>A Title is required.</Error>}
            </div>
            <div className="mt-10">
              <label htmlFor="description" className="block font-bold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                ref={register}
                placeholder="Enter Description"
                className="w-full mt-2 p-3 border rounded border-gray-300 shadow"
              />
            </div>
          </section>

          <section className="mt-10 p-6 border rounded">
            <h3 className="font-bold text-2xl">Royalties</h3>
            <h5 className="font-bold text-gray-500">
              Here you can add any collaborators that helped create this
              cryptomedia and their respective royalties. Example: if you and
              one other collaborator would like to evenly split a 10% royalty on
              future sales, enter both of your wallet addresses with 5% each. If
              you'd like, you can even send royalties to a charity of your
              choice.
            </h5>
            <div className="mt-10">
              <label htmlFor="royalty" className="block font-bold">
                Resale royalty
              </label>
              <input
                id="royalty"
                name="royalty"
                ref={register({ required: true })}
                placeholder="Enter percentage"
                className="w-full mt-2 p-3 border rounded border-gray-300 shadow"
              />
              {errors.royalty && (
                <Error>Resale royalty field is required.</Error>
              )}
            </div>
            <ul>
              {fields.map((item, index) => (
                <li key={item.id} className="space-x-5 space-y-10">
                  <input
                    name={`royalties[${index}].collaborator`}
                    ref={register({ required: true })}
                    defaultValue={item.collaborator}
                    placeholder="Co-Creator's Address (0x...)"
                    className="w-1/3 p-3 border rounded border-gray-300 shadow"
                  />
                  <input
                    name={`royalties[${index}].shares`}
                    ref={register({ required: true })}
                    defaultValue={item.shares}
                    placeholder="Royalty %"
                    className="w-1/3 p-3 border rounded border-gray-300 shadow"
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="py-3 px-6 bg-red-800 border rounded shadow text-white hover:ring-4 hover:ring-red-500 transition duration-200"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <button
            type="button"
            onClick={onAppend}
            className="mt-5 py-3 px-6 bg-yellow-500 border rounded shadow text-white hover:ring-4 hover:ring-yellow-300 transition duration-200"
          >
            Add Another
          </button>

          <input
            type="submit"
            className="w-full py-3 mt-10 bg-black text-white border rounded shadow hover:ring-4 hover:ring-gray-600 disabled:bg-gray-300 disabled:ring-0 transition duration-200"
            disabled={!acceptedFiles[0] || loading}
          />
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Mint;
