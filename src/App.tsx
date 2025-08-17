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
      <div className="max-w-3xl">
        <div className="grid gap-6 justify-items-center">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img
              src={headshot}
              alt="My Professional Picture"
              className="shadow rounded-full max-w-full h-auto align-middle border-none"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold underline">About Me</h2>
            <p className="mt-2">
              I'm a software engineer with over 7 years of experience building
              scalable solutions in JavaScript, Go, C#, Python, and Java. I
              currently work at Red Hat, focusing on compliance and security
              engineering. My main interests lie in static analysis and
              developing better ways to secure code by evaluating the blast
              radius impact of codebases. Right now, I'm working on a
              proof-of-concept static analysis tool for Go projects that
              generates a function bill of materials. Check it out on my GitHub
              page!
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold underline">Projects</h2>
            <ul className="list-none mt-2">
              <li>
                <a href="https://github.com/smith-xyz/golang-fbom-generator">
                  golang fbom generator
                </a>
              </li>
              <li>
                <a href="https://github.com/smith-xyz/jorben-amich">
                  Discord bots monorepo
                </a>
              </li>
            </ul>
          </div>
          <div>
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
    </div>
  );
}

export default App;
