const Projects = () => {
    return (
      <div className="bg-black text-white p-10">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="flex flex-col items-center justify-center">
          {/* Example of a single project entry */}
          <div className="flex items-center mb-8">
            {/* Project Image */}
            <div className="flex-none w-48 h-32 bg-gray-500 mr-4"> {/* Placeholder for image */}
              {/* Insert <img> tag or background image here */}
            </div>
  
            {/* Project Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">Project Title</h3>
              <p>Description of the project, technologies used, etc.</p>
              {/* Add more details or buttons/links as needed */}
            </div>
          </div>
  
          {/* Repeat the above structure for each project */}
        </div>
        
      </div>
    );
  };
  
  export default Projects;