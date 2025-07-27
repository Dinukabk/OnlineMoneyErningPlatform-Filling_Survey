// JWT Token helpers
export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const removeToken = () => localStorage.removeItem('token');

// Currency formatting
export const formatLKR = (amount) => {
  return new Intl.NumberFormat('si-LK', {
    style: 'currency',
    currency: 'LKR'
  }).format(amount);
};

// Progress calculation
export const calculateProgress = (current, target) => {
  return Math.min((current / target) * 100, 100);
};