---
title: Shaun Smith
---

\begin{center}
(217) 416-1904 | ShaunSmith7@icloud.com | \href{https://smith-xyz.github.io}{smith-xyz.github.io} | \href{https://www.linkedin.com/in/shaun-smith-113071ba/}{LinkedIn}
\end{center}

## Profile

Software engineer with 7+ years of experience building scalable systems, security tooling, and developer infrastructure. Deep expertise in Go, TypeScript, Python, and Rust with a focus on static analysis, cryptography, and runtime observability. Currently focused on post-quantum cryptography readiness and security compliance tooling at Red Hat. Independently builds open-source security tools spanning eBPF, compiler instrumentation, and static analysis.

## Work Experience

**Software Engineer, July 2025 - Present |** _Red Hat, Raleigh NC_

- Designed the architecture for a security posture platform that federates data from issue tracking, product catalogs, and CI systems to provide a unified view of CVE impact, SLA compliance, PQC readiness, and TLS posture across hybrid platform offerings. Defined service boundaries, data model, and backlog; implemented the federation pipeline (sync jobs, normalization, persistent store, and API) and established CI/CD with merge-request gating for the backend and frontend services.

- Co-developed a Go-based in-cluster TLS compliance scanner that runs on OpenShift to validate TLS profile compliance across platform components. Integrated into CI for automated compliance checks.

- Contributed to a Python-based security scanning engine using Semgrep to detect cryptographic weaknesses, PQC migration blockers, and TLS misconfiguration across enterprise repositories. Authored custom rules for Go, Python, Rust, C/C++, Java, and TypeScript.

- Authored TLS Profile Compliance Remediation Guidance for the organization, defining how components adopt centrally managed TLS security profiles for PQC readiness. Document covers resolution steps, verification methods, and acceptance criteria used as a release gate for platform releases.

- Maintained and contributed to a Go-based FIPS compliance scanner for OpenShift payloads that validates container images and binaries for CGO linkage, OpenSSL usage, and FIPS mode compliance.

- Contributed to incident response tooling for malicious npm package detection, integrating external malicious-package feeds with internal threat intelligence for automated IoC scanning.

- Built custom IDE plugins for OpenShift debugging and security analysis, using AI/LLM tooling to accelerate development workflows across the team.

## Open Source Projects | _github.com/smith-xyz_

- [tls-probe](https://github.com/smith-xyz/tls-probe): eBPF-based TLS handshake analyzer in Rust. Captures ClientHello/ServerHello at the network layer without process attachment. Detects PQC/hybrid key exchanges (ML-KEM, Kyber) across OpenSSL, BoringSSL, Go, and rustls.

- [go-probe](https://github.com/smith-xyz/go-probe): Compile-time instrumentation patches for the Go compiler that emit zero-overhead probes at function call sites, observable via /proc without attaching to the process. Targets crypto usage detection and runtime dependency auditing.

- [go-runtime-observer](https://github.com/smith-xyz/go-runtime-observer): Instrumented Go toolchain that logs runtime behavior (reflection, unsafe, stdlib crypto) with correlation tracking. Supports Go 1.19-1.25. Published as Docker images on GHCR.

- [argflow](https://github.com/smith-xyz/argflow): Multi-language static analysis tool in Rust using Tree-sitter to trace function argument flows, with presets for cryptographic APIs. Output aligned to CBOM standards.

- [PQC Readiness Tracker](https://smith-xyz.github.io/pqc-readiness-tracker): Interactive dashboard visualizing post-quantum cryptography implementation status across languages, crypto libraries, and standards.

**Software Engineer II Tech Lead, April 2023 - July 2025 |** _Travelers, Hartford CT_

- Led the migration of cybersecurity engineers into the mobile CIAM domain, developing a cross-platform authentication library using React Native with native Swift and Kotlin modules, integrating with enterprise identity providers via OAuth2 (PKCE) and SSO.

- Built automation and service integrations with Okta to transition legacy systems into a centralized identity framework. Earned the Innovative Solutions Award for leadership in enterprise-wide security modernization.

- Engineered CIAM services and APIs with Node.js and .NET, driving adoption of security-first development practices including token handling, encryption, and secrets management.

- Mentored engineers through pair programming and tech talks on open-source practices, security hygiene, and automation. Experience with containerized workflows in OpenShift and AWS EKS.

**Full Stack Software Developer, January 2022 - April 2023 |** _Dotmatics (Labarchives), San Diego CA_

- Led the migration of backend services from Ruby on Rails to Node.js and React.js, refactoring over 60% of the codebase with 100% test coverage on the new codebase.

- Redesigned the user reporting system using AWS ECS, Redis, and S3, improving large report distribution performance by 80%.

- Built a real-time messaging system using WebSocket and ElastiCache for parallel resource collaboration. Optimized MySQL and SQLite queries, increasing admin module engagement by 30%.

**Software Engineer II, June 2021 - January 2022** | _MH Corbin, Raleigh NC (Fixed Contract)_

- Developed MERN stack solutions and REST APIs (Python, Java) for the state DOT, providing real-time traffic sensor and construction zone monitoring.

- Built event-driven solutions using MQTT for highway field device communication and maintained a PostgreSQL database for sensor data.

**Software Developer, December 2018 - June 2021** | _Farragut Systems, Durham NC_

- Developed workers' compensation insurance solutions using ASP.NET Core, React.js, Redux, and MSSQL Server, resulting in a 60% increase in product quality and client satisfaction.

- Established the division's first CI/CD process using Azure DevOps Pipelines and Liquibase, reducing deployment time by over 50%.

## Key Skills

- Languages: Go, TypeScript, JavaScript, Python, Rust, C#, Java, Swift, Kotlin
- Backend: Node.js, Flask, Django, .NET Core, GraphQL
- Frontend and Mobile: React.js, Next.js, Redux, PatternFly, Vite, React Native
- Security: Semgrep, eBPF/bpftrace, Go compiler instrumentation, TLS/FIPS analysis, PQC (ML-KEM, Kyber), NIST standards, Tree-sitter, CBOM
- Cloud and DevOps: AWS (ECS, EKS, Lambda, RDS, S3), Red Hat OpenShift, Terraform, ArgoCD, Prow CI
- Data: PostgreSQL, MySQL, MSSQL Server, MongoDB, DynamoDB, Redis
- AI/LLM: OpenAI, Gemini, Claude, Cursor, MCP servers
- CI/CD: GitHub Actions, Jenkins, GitLab CI, Azure DevOps, Tekton
- Observability: Dynatrace, Datadog, Splunk

## Education

M.A. Philosophy, B.S. Political Science | _Liberty University_
