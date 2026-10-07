import { FEATURED_TEST_SERIES } from '../../data/tests';

export const testService = {
  getFeaturedTestSeries: async () => FEATURED_TEST_SERIES,
  getTestById: async (id) => FEATURED_TEST_SERIES.find((t) => t.id === id) || null,
};

export default testService;
