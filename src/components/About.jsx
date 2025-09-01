import React from 'react'
// import appwriteLogo from '../../assets/appwrite-logo.png' // replace with your Appwrite logo path
// import reactLogo from '../../assets/react-logo.png'
// import viteLogo from '../../assets/vite-logo.png'
// import tailwindLogo from '../../assets/tailwind-logo.png'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6">About This Project</h1>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">
          This is a WebPage built using modern technologies. Users can securely upload and manage their photos online.  
          The app uses ReactJS for the frontend, TailwindCSS for styling, Vite as the development tool, and Appwrite for backend and storage.
        </p>

        {/* Technologies Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Technologies Used</h2>
        <div className="flex justify-center flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <img src={"https://tse1.mm.bing.net/th/id/OIP.HLxLvGJV-6r8ZR8AK4F9KAHaEO?pid=Api&P=0&h=180"} alt="ReactJS" className="w-16 h-16 mb-2 rounded-xl"/>
            <span>ReactJS</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={"https://tse3.mm.bing.net/th/id/OIP.bb5RFgvr1djWNaDBTpGbVgHaEy?pid=Api&P=0&h=180"} alt="TailwindCSS" className="w-16 h-16 mb-2"/>
            <span>TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={"https://tse2.mm.bing.net/th/id/OIP.grggpAlWtqvuTk35o0hXNQHaEM?pid=Api&P=0&h=180"} alt="Vite" className="w-16 h-16 mb-2"/>
            <span>Vite</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={"https://tse3.mm.bing.net/th/id/OIP.oQSt1ISMB02_XEccIILMDwHaEK?pid=Api&P=0&h=180"} alt="Appwrite" className="w-16 h-16 mb-2"/>
            <span>Appwrite</span>
          </div>
        </div>

        {/* Features Section */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Key Features</h2>
        <ul className="text-left text-gray-700 list-disc list-inside max-w-xl mx-auto space-y-2">
          <li>Secure photo uploads with backend storage.</li>
          <li>User authentication and account management via Appwrite.</li>
          <li>Responsive and modern UI using TailwindCSS.</li>
          <li>Fast build and development with Vite.</li>
        </ul>

        {/* Call-to-action */}
        <div className="mt-10">
          <a
            href="https://github.com/RohitYadav-tech443/starter-for-react"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
