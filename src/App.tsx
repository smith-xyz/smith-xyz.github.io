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

  const projects = [
    {
      title: "Go Runtime Observer",
      description:
        "Log what your Go code actually does at runtime - including calls to reflect, unsafe, and other standard library operations.",
      tech: ["Go", "Runtime Analysis", "Instrumentation"],
      github: "https://github.com/smith-xyz/go-runtime-observer",
      highlight: true,
    },
    {
      title: "Argus Observe Rules",
      description:
        "Community-driven Semgrep rules for security analysis with comprehensive test coverage and clear guidance.",
      tech: ["Security", "Static Analysis", "Semgrep"],
      github: "https://github.com/smith-xyz/argus-observe-rules",
      highlight: true,
    },
    {
      title: "PQC Readiness Tracker",
      description:
        "Interactive dashboard tracking Post-Quantum Cryptography implementation status across languages and libraries.",
      tech: ["TypeScript", "Cryptography", "Visualization"],
      github: "https://github.com/smith-xyz/pqc-readiness-tracker",
      demo: "https://smith-xyz.github.io/pqc-readiness-tracker/",
      highlight: true,
    },
    {
      title: "TypeORM Contributor",
      description:
        "Contributed improvements and bug fixes to the popular TypeScript ORM for Node.js.",
      tech: ["TypeScript", "Open Source", "Database"],
      github: "https://github.com/typeorm/typeorm",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)",
      }}
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px" }}
      >
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ marginBottom: "24px" }}>
            <img
              src={headshot}
              alt="Shaun Smith"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                border: "4px solid white",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "16px",
            }}
          >
            Shaun Smith
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#6b7280",
              marginBottom: "24px",
              maxWidth: "600px",
              margin: "0 auto 24px",
            }}
          >
            Software Engineer @ Red Hat • Full-Stack Development & Security
            Tools
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            {["JavaScript", "Go", "Python", "Security", "Static Analysis"].map(
              (skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#dbeafe",
                    color: "#1e40af",
                    fontSize: "14px",
                    borderRadius: "20px",
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* About Section */}
        <section style={{ marginBottom: "64px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "32px",
              border: "1px solid #f3f4f6",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#3b82f6",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "12px",
                }}
              >
                <svg
                  style={{ width: "16px", height: "16px" }}
                  fill="white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              About Me
            </h2>
            <p
              style={{
                color: "#374151",
                lineHeight: "1.7",
                fontSize: "18px",
              }}
            >
              I'm a software engineer at Red Hat with over 7 years of experience
              building scalable solutions and enterprise tools. My passion lies
              in full-stack development, system analysis, and
              cryptography—especially understanding how software works under the
              hood. I leverage AI/LLM tooling to solve complex problems and
              create tools that help developers build robust, efficient, and
              secure applications.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section style={{ marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Featured Projects
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {projects
              .filter((p) => p.highlight)
              .map((project) => (
                <div
                  key={project.title}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    padding: "24px",
                    border: "1px solid #f3f4f6",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "12px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "16px",
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "4px 8px",
                          backgroundColor: "#f3f4f6",
                          color: "#374151",
                          fontSize: "12px",
                          borderRadius: "4px",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#374151",
                        fontSize: "14px",
                        fontWeight: "500",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        style={{
                          width: "14px",
                          height: "14px",
                          marginRight: "4px",
                        }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#2563eb",
                          fontSize: "14px",
                          fontWeight: "500",
                          textDecoration: "none",
                        }}
                      >
                        <svg
                          style={{
                            width: "14px",
                            height: "14px",
                            marginRight: "4px",
                          }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Other Projects */}
        <section style={{ marginBottom: "64px" }}>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "24px",
            }}
          >
            Other Projects
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {projects
              .filter((p) => !p.highlight)
              .map((project) => (
                <div
                  key={project.title}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    padding: "20px",
                    border: "1px solid #f3f4f6",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <h4
                        style={{
                          fontWeight: "600",
                          color: "#1f2937",
                          marginBottom: "8px",
                        }}
                      >
                        {project.title}
                      </h4>
                      <p
                        style={{
                          color: "#6b7280",
                          fontSize: "14px",
                          marginBottom: "12px",
                        }}
                      >
                        {project.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "4px",
                          marginBottom: "12px",
                        }}
                      >
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: "2px 6px",
                              backgroundColor: "#f3f4f6",
                              color: "#6b7280",
                              fontSize: "11px",
                              borderRadius: "4px",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#6b7280",
                        marginLeft: "12px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "20px",
                        height: "20px",
                      }}
                    >
                      <svg
                        style={{ width: "16px", height: "16px" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "32px",
              border: "1px solid #f3f4f6",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#1f2937",
                marginBottom: "24px",
              }}
            >
              Let's Connect
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={downloadResume}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 24px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  fontWeight: "500",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background-color 0.2s",
                }}
              >
                <svg
                  style={{ width: "16px", height: "16px", marginRight: "8px" }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </button>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://github.com/smith-xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 20px",
                    border: "1px solid #d1d5db",
                    color: "#374151",
                    fontWeight: "500",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "background-color 0.2s",
                  }}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      marginRight: "8px",
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shaun-smith-113071ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 20px",
                    border: "1px solid #0077b5",
                    backgroundColor: "#0077b5",
                    color: "white",
                    fontWeight: "500",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "background-color 0.2s",
                  }}
                >
                  <svg
                    style={{
                      width: "16px",
                      height: "16px",
                      marginRight: "8px",
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
