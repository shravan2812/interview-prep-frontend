import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    const { filename } = response.data;

    const backendURL = process.env.REACT_APP_BACKEND_URL || "https://interview-prep-backend-2j73.onrender.com";

    return {
  ...response.data,
  imageUrl: `${process.env.REACT_APP_BACKEND_URL || "https://interview-prep-backend-2j73.onrender.com"}/uploads/${response.data.filename}`
};

  } catch (error) {
    console.error("Error uploading the image", error);
    throw error;
  }
};

export default uploadImage;
