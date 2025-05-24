import { Award, Code } from "lucide-react"

export default function Resume() {
  const achievements = ["Emerging Scholar Award", "Math Olympiad medals"]

  const projects = [
    {
      title: "Dining Hall Waste Tracker",
      description: "IoT + web application for waste management",
    },
    {
      title: "Virtual ULM Tour",
      description: "Google Maps API + JavaScript campus tour",
    },
  ]

  // Technology logos as SVG components
  const PythonLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07l.008 3.18h6.729v.951H6.154s-4.505-.513-4.505 6.651c0 7.163 3.942 6.906 3.942 6.906h2.351v-3.312s-.13-3.942 3.882-3.942h6.729s3.77.061 3.77-3.65V5.765s.572-3.665-6.438-3.665zM12.271 4.007a1.222 1.222 0 11-.001 2.444 1.222 1.222 0 01.001-2.444z"
        fill="#3776ab"
      />
      <path
        d="M16.115 29.9c7.1 0 6.651-3.07 6.651-3.07l-.008-3.18h-6.729v-.951h9.817s4.505.513 4.505-6.651c0-7.163-3.942-6.906-3.942-6.906H23.58v3.312s.13 3.942-3.882 3.942h-6.729s-3.77-.061-3.77 3.65v6.015s-.572 3.665 6.438 3.665zm3.614-1.907a1.222 1.222 0 11.001-2.444 1.222 1.222 0 01-.001 2.444z"
        fill="#ffcf46"
      />
    </svg>
  )

  const JavaScriptLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" fill="#f7df1e" />
      <path
        d="M18.774 19.7a3.727 3.727 0 002.834 1.734c1.598 0 2.615-.8 2.615-1.9 0-1.317-.8-1.784-2.134-2.284l-.733-.314c-2.1-.895-3.5-2.019-3.5-4.381 0-2.181 1.665-3.84 4.264-3.84 1.849 0 3.181.644 4.133 2.334l-2.264 1.451c-.498-.895-1.033-1.248-1.869-1.248-.85 0-1.389.539-1.389 1.248 0 .874.539 1.228 1.784 1.772l.733.314c2.476 1.060 3.876 2.145 3.876 4.58 0 2.627-2.063 4.048-4.831 4.048-2.708 0-4.46-1.288-5.315-2.973l2.396-1.385z"
        fill="#323330"
      />
      <path
        d="M8.102 19.402c.498.873 1.135 1.513 2.521 1.513 1.256 0 2.057-.49 2.057-2.334v-12.6h2.936v12.756c0 3.835-2.248 5.582-5.531 5.582-2.964 0-4.679-1.513-5.554-3.334l2.571-1.583z"
        fill="#323330"
      />
    </svg>
  )

  const HTMLLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 2l2.5 22.5L16 26l7.5-1.5L26 2H6z" fill="#e34f26" />
      <path d="M16 4.4v19.2l6-1.2L24.4 4.4H16z" fill="#ef652a" />
      <path
        d="M16 13.5h-4.5l-.3-2.5H16V8.5H7.5l.8 7.5H16v-2.5zm0 5.5v-2.5H12l.2 2.5 3.8.8v-2.5l-3.5-.8H16z"
        fill="#fff"
      />
      <path d="M16 13.5v2.5h4l-.4 4.5L16 21.5v2.5l6.5-1.5.5-6.5.5-2.5H16z" fill="#ebebeb" />
    </svg>
  )

  const CSSLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 2l2.5 22.5L16 26l7.5-1.5L26 2H6z" fill="#1572b6" />
      <path d="M16 4.4v19.2l6-1.2L24.4 4.4H16z" fill="#33a9dc" />
      <path
        d="M16 13.5h4.5l.3-2.5H16V8.5h7.5l-.8 7.5H16v-2.5zm0 5.5h3.5l-.2 2.5L16 22.3v2.5l6.5-1.5.5-6.5H16v-2.3z"
        fill="#fff"
      />
      <path d="M16 13.5v2.5h-4l.4-4.5H16v2zm0 5.5v2.3l-3.5-.8-.2-2.5H16z" fill="#ebebeb" />
    </svg>
  )

  const ReactLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="2" fill="#61dafb" />
      <path
        d="M16 9c-5.5 0-10 2.5-10 5.5s4.5 5.5 10 5.5 10-2.5 10-5.5S21.5 9 16 9z"
        stroke="#61dafb"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 12.5c2.5-4.5 6.5-7 9-5.5s2.5 6.5 0 11-6.5 7-9 5.5-2.5-6.5 0-11z"
        stroke="#61dafb"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 19.5c-2.5-4.5-2.5-8.5 0-11s6.5-2 9 2.5 2.5 8.5 0 11-6.5 2-9-2.5z"
        stroke="#61dafb"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )

  const FlaskLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M12 4h8v8l6 12H6l6-12V4z" fill="#000" />
      <path d="M14 6v6l4 8h6l-4-8V6h-6z" fill="#fff" />
      <circle cx="16" cy="20" r="1" fill="#000" />
      <circle cx="20" cy="18" r="0.5" fill="#000" />
      <circle cx="12" cy="19" r="0.5" fill="#000" />
    </svg>
  )

  const GitLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M31.396 14.575L17.425.604a2.06 2.06 0 00-2.914 0l-2.9 2.9 3.68 3.68a2.45 2.45 0 013.1 3.1l3.55 3.55a2.45 2.45 0 11-1.46 1.46l-3.31-3.31v8.7a2.45 2.45 0 11-1.96 0v-8.78a2.45 2.45 0 01-1.33-3.22l-3.63-3.63L.604 14.575a2.06 2.06 0 000 2.914l13.97 13.97a2.06 2.06 0 002.914 0l13.908-13.908a2.06 2.06 0 000-2.914z"
        fill="#f05032"
      />
    </svg>
  )

  const SQLLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#336791" />
      <path d="M8 8h16v3H8V8zm0 5h16v3H8v-3zm0 5h16v3H8v-3zm0 5h10v3H8v-3z" fill="#fff" />
    </svg>
  )

  const NodeLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 2l12 7v14l-12 7-12-7V9l12-7z" fill="#8cc84b" />
      <path d="M16 2v28l12-7V9L16 2z" fill="#689f38" />
    </svg>
  )

  const PandasLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" fill="#150458" />
      <path d="M8 8h4v16H8V8zm8-2h4v20h-4V6zm8 4h4v12h-4V12z" fill="#e70488" />
    </svg>
  )

  const NumPyLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" fill="#4dabcf" />
      <path d="M6 6l10 10-10 10V6zm20 0v20l-10-10L26 6z" fill="#fff" />
    </svg>
  )

  const APILogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#ff6b35" />
      <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" fill="#fff" />
      <circle cx="6" cy="13" r="1" fill="#fff" />
      <circle cx="6" cy="17" r="1" fill="#fff" />
      <circle cx="6" cy="21" r="1" fill="#fff" />
    </svg>
  )

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid gap-12">
          {/* Skills */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Code className="w-6 h-6 text-blue-600 mr-2" />
              Skills
            </h3>

            {/* Languages and Databases */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Languages and Databases</h4>
              <div className="bg-white rounded-lg p-6">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <PythonLogo />
                    <span className="text-gray-700 font-medium">Python</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <JavaScriptLogo />
                    <span className="text-gray-700 font-medium">JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <HTMLLogo />
                    <span className="text-gray-700 font-medium">HTML5</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <CSSLogo />
                    <span className="text-gray-700 font-medium">CSS3</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <SQLLogo />
                    <span className="text-gray-700 font-medium">SQL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Frameworks</h4>
              <div className="bg-white rounded-lg p-6">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <FlaskLogo />
                    <span className="text-gray-700 font-medium">Flask</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <ReactLogo />
                    <span className="text-gray-700 font-medium">React</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <NodeLogo />
                    <span className="text-gray-700 font-medium">Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Tools</h4>
              <div className="bg-white rounded-lg p-6">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <GitLogo />
                    <span className="text-gray-700 font-medium">Git</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <APILogo />
                    <span className="text-gray-700 font-medium">APIs</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <PandasLogo />
                    <span className="text-gray-700 font-medium">Pandas</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                    <NumPyLogo />
                    <span className="text-gray-700 font-medium">NumPy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 text-blue-600 mr-2" />
              Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Projects */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Key Projects</h3>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-white">{project.title}</h4>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
