import { POPULAR_EXAMS, EXAM_CATEGORIES } from '../../data/exams';

export const examService = {
  getCategories: async () => EXAM_CATEGORIES,
  getPopularExams: async () => POPULAR_EXAMS,
  getExamById: async (id) => POPULAR_EXAMS.find((e) => e.id === id) || null,
};

export default examService;
