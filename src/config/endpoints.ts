const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  course: {
    list: "/courses",
    details: (courseId: string) => `/courses/${courseId}`,
    create: "/courses",
    update: (courseId: string) => `/courses/${courseId}`,
    delete: (courseId: string) => `/courses/${courseId}`,
  },
};
export default ENDPOINTS;
