import React, { useState } from 'react';

import Modal from "../modal/Modal";
import {KinderGrewModal, RingostarModal, SeniorsModal, VringoModal} from '../modal/ModalContents';

import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<{ id: string, description: React.ReactNode }>({ id: '', description: '' });
  
  const { ref, inView } = useInView({
    threshold: 0.2
  });

  const openModal = (id: string, description: React.ReactNode) => {
    setSelectedProject({ id, description });
    setModalOpen(true);
  };

  return (
  <div>
    <div ref={ref} className={`bg-black text-white p-10 ${inView ? 'animate-fadeInBrighten' : ''}`} id='projects'>
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="flex flex-col items-center justify-center">
        {/* Example of a single project entry */}
        <div>
          <div className="flex items-center mb-8">
            {/* Project Image */}
            <div className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform"
                 onClick={() => openModal('2', <VringoModal/>)}>
              <img src="\VringoChart.png" alt="Vringo" className=" h-full"/>
            </div>

            {/* Project Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">Vringo ICMS</h3>
              <p>KT 부가서비스인 Vringo 관리자 페이지</p>
              <p>마이그레이션</p>
              {/* Add more details or buttons/links as needed */}
            </div>
          </div>
          <div className="flex items-center mb-8">
            {/* Project Image */}
            <div className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform"
                 onClick={() => openModal('1', <RingostarModal/>)}>
              <img src="\RingoStarMain.png" alt="Ringo Star" className=" h-full"/>
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
            <div className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform"
                 onClick={() => openModal('2', <SeniorsModal/>)}>
              <img src="\SeniorsMain.png" alt="Seniors" className=" h-full"/>
            </div>

            {/* Project Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">Seniors</h3>
              <p>6070분들의 재취업을 위한 서비스</p>
              {/* Add more details or buttons/links as needed */}
            </div>
          </div>
          <div className="flex items-center mb-8">
            {/* Project Image */}
            <div className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform"
                 onClick={() => openModal('3', <KinderGrewModal/>)}>
              <img src="\KinderGrew3.png" alt="KinderGrew" className=" h-full"/>
            </div>

            {/* Project Description */}
            <div className="flex-grow">
              <h3 className="text-2xl font-bold">킨더그루</h3>
              <p>유치원이 아이의 교육에 보다 집중할 수 있도록</p>
              <p>아이 관리를 지원하는 통합 관리 서비스</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectId={selectedProject.id}
        projectDescription={selectedProject.description}
    />
  </div>
  );
};

export default Projects;