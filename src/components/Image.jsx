import React, { useState } from "react";

const Image = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(props);
  return (
    <div className="rounded rounded-t-lg shrink-0 w-full">
      <img
        src={props.urls.small}
        className="shadow rounded-t-lg cursor-pointer"
        onClick={openModal}
      />
      <div className="flex flex-row p-2 w-full relative">
        <div className="flex flex-col text-left">
          <span>{props.user.name}</span>
          <span className="text-gray-400 font-semibold">{`@${props.user.instagram_username}`}</span>
        </div>
        <div></div>
        <span className="absolute right-3">{props.likes}</span>
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto bg-white"
          onClick={closeModal}
        >
          <div
            className="relative max-w-2xl m-auto p-4 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-lg shadow ">
              <div className="flex items-start justify-between rounded-t">
                <img
                  src={props.urls.full} // Display the selected image in the modal
                  alt="Selected Image"
                />
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>

                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;
