import React, { useEffect } from 'react';

interface ProjectModalProps {
  projectId: string;
  isOpen: boolean;
  onClose: () => void;
  projectDescription: React.ReactNode;
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-lg w-full h-full overflow-auto dark:bg-black">
        <button onClick={onClose} className="text-black absolute top-5 right-5 dark:text-white">
          닫기
        </button>
        <p className="mt-5">{projectDescription}</p>
      </div>
    </div>
  );
};

export default Modal;
