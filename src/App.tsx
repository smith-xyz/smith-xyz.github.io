import "./App.css";
import headshot from "./assets/headshot.jpeg";
import resume from "./assets/S_Smith_Resume_.pdf";

function App() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "shaun-smith-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx:auto">
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-4/12 px-4 my-5">
          <img
            src={headshot}
            alt="My Professional Picture"
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
        <div className="my-2">
          <h1 className="text-3xl font-bold underline">About Me</h1>
          <p className="my-1">
            I am a full stack engineer located in Raleigh, North Carolina.
            Currently working for Travelers in Cyber Security, developing
            solutions for customer access, identity, and profile management.
          </p>
        </div>
        <div className="my-2">
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
            onClick={downloadResume}
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
