import { useForm, useFieldArray, Controller } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error from "../components/Error";
import Dropzone from "./../components/Dropzone";

const Form = () => {
  const { control, register, watch, handleSubmit, errors } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: "input" });
  const watchMedia = watch("media");

  const onSubmit = (data) => console.log(data);
  const onAppend = () => append({ collaborator: "", shares: "" });

  return (
    <div className="relative pb-96">
      <Navbar />
      <div className="w-1/2 mt-20 container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="p-6 border rounded">
            <h3 className="font-bold text-2xl">Mint your NFT</h3>
            <Controller
              control={control}
              defaultValue={""}
              name="media"
              rules={{ required: true }}
              render={({ onChange }) => <Dropzone onChange={onChange} />}
            />
            {errors.media && <Error>Media is required.</Error>}
            <aside className="mt-5">{watchMedia && <p>{watchMedia}</p>}</aside>
            <div className="mt-5">
              <label htmlFor="name" className="block font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                ref={register({ required: true })}
                className="w-full mt-2 p-3 border rounded border-gray-300 shadow"
              />
              {errors.name && <Error>Name field is required.</Error>}
            </div>
            <div className="mt-10">
              <label htmlFor="description" className="block font-bold">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                ref={register({ required: true })}
                className="w-full mt-2 p-3 border rounded border-gray-300 shadow"
              />
              {errors.description && (
                <Error>Description field is required.</Error>
              )}
            </div>
          </section>

          <section className="mt-10 p-6 border rounded">
            <h3 className="font-bold text-2xl">Setup your collaborators</h3>
            <h5 className="font-bold text-gray-500">
              Shares will be used to decide how much money each collaborator
              will get. This is proportionate to the total shares.
            </h5>
            <ul>
              {fields.map((item, index) => (
                <li key={item.id} className="space-x-5 space-y-10">
                  <input
                    name={`input[${index}].collaborator`}
                    ref={register({ required: true })}
                    defaultValue={item.collaborator}
                    placeholder="Collaborator"
                    className="w-1/3 p-3 border rounded border-gray-300 shadow"
                  />
                  <input
                    name={`input[${index}].shares`}
                    ref={register({ required: true })}
                    defaultValue={item.shares}
                    placeholder="Shares"
                    className="w-1/3 p-3 border rounded border-gray-300 shadow"
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="py-3 px-6 bg-red-800 border rounded shadow text-white hover:ring-4 hover:ring-red-500 transition duration-200"
                  >
                    Delete
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
            Add collaborator
          </button>

          <input
            type="submit"
            className="w-full py-3 mt-10 bg-black text-white border rounded shadow hover:ring-4 hover:ring-gray-600 transition duration-200"
          />
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Form;
