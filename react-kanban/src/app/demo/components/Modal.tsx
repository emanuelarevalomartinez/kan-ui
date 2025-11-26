import React from "react";
import { VscClose } from "react-icons/vsc";
import { useAppContext } from "../../../context";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel? : ()=> void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, onCancel, title, children }: ModalProps) {

  const { showErrorMessage, errorMessage } = useAppContext();

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 
      ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        onClick={onClose}
        className="absolute w-screen h-screen -z-10 bg-black/40"
      ></div>

      <div
        className={`bg-white rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300
        ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            onClick={ ()=> { 
              if (onCancel) {
                onCancel();
              } else {
                onClose();
              }
             } }
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <VscClose className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 text-gray-700">
          { showErrorMessage &&
           <p className="text-center text-red-500 font-medium">{errorMessage}</p>
          }
          {children}
          </div>
      </div>
    </div>
  );
}
