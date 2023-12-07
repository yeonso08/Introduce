import React, { useState } from 'react';

import Modal from "../modal/Modal";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({ id: '', title: '', description: '' });

  const openModal = (id: string, title: string, description: string) => {
    setSelectedProject({ id, title, description });
    setModalOpen(true);
  };

    return (
      <div className="bg-black text-white p-10" id='projects'>
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="flex flex-col items-center justify-center">
          {/* Example of a single project entry */}
          <div>
          <div className="flex items-center mb-8">
            {/* Project Image */}
            <div className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform" onClick={() => openModal('1', '링고스타', '외국인 상대로 한 렌터카 서비스')}>
              {/* Insert <img> tag or background image here */}
            </div>
  
            {/* Project Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">링고스타</h3>
              <p>외국인 상대로 한 렌터카 서비스</p>
              {/* Add more details or buttons/links as needed */}
            </div>
          </div>

          <div className="flex items-center mb-8">
            {/* Project Image */}
            <div className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform" onClick={() => openModal('2', 'Seniors', '6070분들의 재취업을 위한 프로젝트')}>
            {/* <img src="path_to_your_image.jpg" alt="Project Image" className="w-full h-full object-cover" /> */}
            </div>
  
            {/* Project Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">Seniors</h3>
              <p>6070분들의 재취업을 위한 프로젝트</p>
              {/* Add more details or buttons/links as needed */}
            </div>
          </div>
          <div className="flex items-center mb-8">
            {/* Project Image */}
            <div className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform" onClick={() => openModal('3', '킨더그루', '유치원이 아이의 교육에 보다 집중할 수 있도록 아이 관리를 지원하는 통합 관리 서비스')}>
              {/* Insert <img> tag or background image here */}
            </div>
  
            {/* Project Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">킨더그루</h3>
              <p>유치원이 아이의 교육에 보다 집중할 수 있도록</p>
              <p>아이 관리를 지원하는 통합 관리 서비스</p>
              {/* Add more details or buttons/links as needed */}
            </div>
          </div>

  
          {/* Repeat the above structure for each project */}
        </div>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          projectId={selectedProject.id}
          projectTitle={selectedProject.title}
          projectDescription={selectedProject.description}
        />
        </div>
      </div>
    );
  };
  
  export default Projects;