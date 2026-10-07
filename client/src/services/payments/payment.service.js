export const paymentService = {
  processPayment: async (paymentDetails) => {
    return {
      success: true,
      transactionId: 'TXN_' + Date.now(),
      amount: paymentDetails.amount,
      status: 'COMPLETED',
    };
  },
};

export default paymentService;
