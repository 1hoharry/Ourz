const Error = ({ children }) => (
  <div className="mt-5 p-3 bg-red-300 border rounded shadow">
    <p className="text-red-800">{children}</p>
  </div>
);

export default Error;