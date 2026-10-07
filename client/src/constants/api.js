export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_OTP: '/auth/verify-otp',
  },
  EXAMS: {
    LIST: '/exams',
    DETAIL: (id) => `/exams/${id}`,
    CATEGORIES: '/exams/categories',
  },
  COURSES: {
    LIST: '/courses',
    DETAIL: (id) => `/courses/${id}`,
    ENROLL: (id) => `/courses/${id}/enroll`,
  },
  TESTS: {
    LIST: '/tests',
    DETAIL: (id) => `/tests/${id}`,
    START: (id) => `/tests/${id}/start`,
    SUBMIT: (id) => `/tests/${id}/submit`,
    RESULT: (id) => `/tests/${id}/result`,
  },
  STUDENT: {
    DASHBOARD: '/student/dashboard',
    ENROLLED_COURSES: '/student/courses',
    ATTEMPTED_TESTS: '/student/tests',
    PERFORMANCE: '/student/analytics',
  },
  ADMIN: {
    DASHBOARD_METRICS: '/admin/dashboard/metrics',
    USERS: '/admin/users',
    REPORTS: '/admin/reports',
  },
};
