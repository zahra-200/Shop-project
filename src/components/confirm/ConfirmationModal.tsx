import React from "react";


interface ConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Confirm Your Order</h2>
        <p>Are you sure you want to place this order?</p>
        <div className="mt-6 flex justify-between">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
