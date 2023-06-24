import React, { useState } from "react";

const GroupFormOverlay = ({ onCancel, onSave }) => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [image, setImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to include the image file
    const formData = new FormData();
    formData.append("groupName", groupName);
    formData.append("groupDescription", groupDescription);
    formData.append("isPublic", isPublic);
    formData.append("image", image);

    // Call the onSave callback with the form data
    onSave(formData);

    // Reset form state
    setGroupName("");
    setGroupDescription("");
    setIsPublic(true);
    setImage(null);

    // Hide the form
    setShowForm(false);
  };

  const handleCancel = () => {
    // Reset form state
    setGroupName("");
    setGroupDescription("");
    setIsPublic(true);
    setImage(null);

    // Hide the form
    setShowForm(false);

    // Call the onCancel callback
    onCancel();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="font-bold mb-5"
          onClick={() => setShowForm(true)}
        >
          Create Group +
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700 mb-4">
                    <h2 className="leading-relaxed">Create Group</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <form
                    onSubmit={handleSubmit}
                    className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                  >
                    <div className="flex flex-col">
                      <label htmlFor="group-name" className="leading-loose">
                        Group Name
                      </label>
                      <input
                        type="text"
                        id="group-name"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Group name"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="group-description"
                        className="leading-loose"
                      >
                        Group Description
                      </label>
                      <input
                        type="text"
                        id="group-description"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Group description"
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">Privacy</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400 ">
                          <label className="mr-2">
                            <input
                              type="radio"
                              value="public"
                              checked={isPublic}
                              onChange={() => setIsPublic(true)}
                              className="m-4"
                            />
                            Public
                          </label>
                          <label className="mr-2">
                            <input
                              type="radio"
                              value="private"
                              checked={!isPublic}
                              onChange={() => setIsPublic(false)}
                              className="m-4"
                            />
                            Private
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="group-image" className="leading-loose">
                        Group Image
                      </label>
                      <input
                        type="file"
                        id="group-image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    <div className="pt-3 flex items-center space-x-4">
                      <button
                        type="button"
                        className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                        onClick={handleCancel}
                      >
                        <svg
                          className="w-6 h-6 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-yellow-300 hover:bg-yellow-400 flex justify-center items-center w-full text-black px-4 py-3 rounded-md focus:outline-none"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupFormOverlay;
