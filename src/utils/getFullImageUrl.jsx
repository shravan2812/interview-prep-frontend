const getFullImageUrl = (relativePath) => {
    if (!relativePath) return "";
    return `https://interview-prep-backend-2j73.onrender.com/${relativePath}`;
}

export default getFullImageUrl;
