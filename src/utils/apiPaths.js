export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
    AUTH:{
        REGISTER:"/api/auth/register", //SIGNUP
        LOGIN:"/api/auth/login", //Authenticate user and return JWT token
        GET_PROFILE:"/api/auth/profile", //Get Logged-in user detail
    },

    IMAGE:{
        UPLOAD_IMAGE:"/api/auth/upload-image" // Upload profile picture 
    },

    AI:{
        GENERATE_QUESTIONS:"/api/ai/generate-questions", //Genrate interview questions and answer using gemini
        GENERATE_EXPLANATION:"/api/ai/generate-explanation" // Generate concept explanation using gemini
    },

    SESSION:{
        CREATE:"/api/sessions/create", //Create a new interview session with question
        GET_ALL:"/api/sessions/my-sessions", //Get all user session
        GET_ONE: (id) => `/api/sessions/${id}`, //Get sessions details with questions
        DELETE: (id) => `/api/sessions/${id}` //Delete a session
    },

    QUESTION:{
        ADD_TO_SESSION:"/api/questions/add", //Add more questions to a sessions
        PIN: (id) => `/api/questions/${id}/pin`, //Pin or unpin a question
        UPDATE_NOTE: (id) => `/api/questions/${id}/note` //Update/add a note to a question
    },
};