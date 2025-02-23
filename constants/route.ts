const ROUTE = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    COMUNITY: "/community",
    COLLECTION: "/collection",
    JOBS: "/find-jobs",
    TAGS: (id: string) => `/tag/${id}`,
    PROFILE: (id: string) => `/profile/${id}`,
    QUESTION: (id: string) => `/question/${id}`,
    ASK_QUESTION: "/ask-a-question",
  };
  
  export default ROUTE;