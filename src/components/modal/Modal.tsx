import React, { useEffect } from 'react';

interface ProjectModalProps {
  projectId: string;
  isOpen: boolean;
  onClose: () => void;
  projectDescription: React.ReactNode;
  // 프로젝트 세부 정보를 위해 필요한 추가 props
}

const Modal: React.FC<ProjectModalProps> = ({ isOpen, onClose, projectDescription }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]); // 의존성 배열에 isOpen과 onClose를 추가합니다.

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-lg w-full h-full overflow-auto">
        <button onClick={onClose} className="text-black absolute top-5 right-5">
          닫기
        </button>
        <p className='text-black'>{projectDescription}</p>
      </div>
    </div>
  );
};

export default Modal;
