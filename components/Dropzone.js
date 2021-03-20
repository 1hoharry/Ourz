import { useDropzone } from "react-dropzone";

const Dropzone = (props) => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps({
        className:
          "dropzone mt-5 p-12 bg-gray-100 border-2 border-dashed border-gray-300 text-center",
      })}
    >
      <input name="media" {...getInputProps({ ...props })} />
      <p className="text-gray-400">
        Drag and drop media content, or click to select.
      </p>
    </div>
  );
};

export default Dropzone;