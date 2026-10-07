import { formatDate, formatDuration } from '../utils/date';
import { formatCurrency } from '../utils/currency';
import { formatCompactNumber } from '../utils/number';

export const formatters = {
  date: formatDate,
  duration: formatDuration,
  currency: formatCurrency,
  number: formatCompactNumber,
  percentage: (val) => `${Math.round(val || 0)}%`,
};
