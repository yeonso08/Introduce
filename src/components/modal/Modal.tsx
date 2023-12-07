import React, { useState } from 'react';

interface ProjectModalProps {
  projectId: string;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectDescription: string;
  // 프로젝트 세부 정보를 위해 필요한 추가 props
}

const Modal: React.FC<ProjectModalProps> = ({ isOpen, onClose, projectTitle, projectDescription }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-lg w-full h-full overflow-auto">
        <button onClick={onClose} className="text-black absolute top-5 right-5">
          닫기
        </button>
        <h2 className="text-4xl font-bold mb-4 text-black">{projectTitle}</h2>
        <p className='text-black'>{projectDescription}</p>
        {/* 여기에 더 많은 프로젝트 세부 정보 추가 */}
      </div>
    </div>
  );
};

export default Modal;
