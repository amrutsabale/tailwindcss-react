import { useState } from "react";

function App() {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    companySize: "",
  });
  const handleChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  return (
    <div className="w-full max-w-sm mx-auto align-middle">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-middle mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="username"
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-middle mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="password"
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="company-size"
            className="font-middle mb-2 block text-sm  text-gray-700"
          >
            Company size
          </label>
          <select
            name="companySize"
            className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            id="company"
            value={formState.companySize}
            onChange={handleChange}
          >
            <option value="">Please select</option>
            <option value="small">1 to 10 employees</option>
            <option value="medium">11 to 50 employees</option>
            <option value="large">50+ employees</option>
          </select>
        </div>

        <div className="flex item-center mb-6">
          <input
            type="checkbox"
            name="terms-and-policy"
            id="terms-and-policy"
            className="rounded border-gray-300  text-indigo-500 focus:ring-indigo-500"
          />
          <label
            htmlFor="terms-and-policy"
            className="ml-2 block text-sm text-gray-900"
          >
            I agree to the{" "}
            <a href="/" className="text-indigo-600 hover:text-indigo-500">
              Terms
            </a>{" "}
            and{" "}
            <a href="/" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800"
            href="/"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default App;
