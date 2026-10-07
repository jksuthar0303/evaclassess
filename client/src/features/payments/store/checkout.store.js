import { useState } from 'react';

export function useCheckoutStore() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const applyCoupon = (code) => {
    setCouponCode(code);
    if (code.toUpperCase() === 'FIRSTPREP') {
      setDiscountAmount(500);
      return { success: true, message: '₹500 discount applied!' };
    }
    return { success: false, message: 'Invalid coupon' };
  };

  return {
    selectedPlan,
    setSelectedPlan,
    couponCode,
    discountAmount,
    applyCoupon,
  };
}

export default useCheckoutStore;
