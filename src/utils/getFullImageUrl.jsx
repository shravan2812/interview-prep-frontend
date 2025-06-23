const BASE_BACKEND_URL = "https://interview-prep-backend-2j73.onrender.com";

const getFullImageUrl = (imagePath) => {
  if (!imagePath) return ""; // fallback
  if (imagePath.startsWith("http")) return imagePath; // already full
  return `${BASE_BACKEND_URL}/${imagePath}`; // attach base path
};

export default getFullImageUrl;
