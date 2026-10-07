import { FEATURED_COURSES } from '../../data/courses';

export const courseService = {
  getFeaturedCourses: async () => FEATURED_COURSES,
  getCourseById: async (id) => FEATURED_COURSES.find((c) => c.id === id) || null,
};

export default courseService;
