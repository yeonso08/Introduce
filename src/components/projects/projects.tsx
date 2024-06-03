import React, { useState } from 'react';

import Modal from "../modal/Modal";
import {
  KinderGrewModal,
  OtmCollectModal,
  RingostarModal,
  SeniorsModal,
  VringoModal,
} from '../modal/ModalContents'


const Projects = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<{ id: string, description: React.ReactNode }>({ id: '', description: '' });

  const openModal = (id: string, description: React.ReactNode) => {
    setSelectedProject({ id, description });
    setModalOpen(true);
  };

  return (
  <div id='projects'>
    <div  className={`bg-black text-white p-10`} >
    <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className="sm:flex items-center mb-8">
            <div
              className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform rounded"
              onClick={() => openModal('2', <OtmCollectModal />)}>
              <img src="\otmCollectMain.png" alt="Vringo" className="rounded h-full" />
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-bold">OTM Collect</h3>
              <p>네이버 플레이스를 이용하여 만든</p>
              <p>전화번호 수집사이트</p>
            </div>
          </div>
          <div className="sm:flex items-center mb-8">
            <div
              className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform rounded"
              onClick={() => openModal('2', <VringoModal />)}>
              <img src="\VringoChart.png" alt="Vringo" className="rounded h-full" />
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-bold">Vringo ICMS</h3>
              <p>KT 부가서비스인 Vringo 관리자 페이지</p>
              <p>마이그레이션</p>
            </div>
          </div>
          <div className="sm:flex items-center mb-8">
            <div
              className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform rounded"
              onClick={() => openModal('1', <RingostarModal />)}>
              <img src="\RingoStarMain.png" alt="Ringo Star" className="rounded h-full" />
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-bold">링고스타</h3>
              <p>외국인 상대로 한 렌터카 서비스</p>
            </div>
          </div>

          <div className="sm:flex items-center mb-8">
            <div
              className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform rounded"
              onClick={() => openModal('2', <SeniorsModal />)}>
              <img src="\SeniorsMain.png" alt="Seniors" className="rounded h-full" />
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-bold">Seniors</h3>
              <p>6070분들의 재취업을 위한 서비스</p>
            </div>
          </div>
          <div className="sm:flex items-center mb-8">
            <div
              className="flex-none w-48 h-32 bg-gray-500 mr-4 cursor-pointer hover:scale-110 transition-transform rounded"
              onClick={() => openModal('3', <KinderGrewModal />)}>
              <img src="\KinderGrew3.png" alt="KinderGrew" className="rounded h-full" />
            </div>

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