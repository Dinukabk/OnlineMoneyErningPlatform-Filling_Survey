import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [balance, setBalance] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [hasUnlocked, setHasUnlocked] = useState(false);

  const refreshWallet = async () => {
    const { data } = await api.get('/wallet');
    setBalance(data.balance);
    setEarnings(data.totalEarned);
    setHasUnlocked(data.hasUnlockedWithdrawal);
  };

  useEffect(() => {
    refreshWallet();
  }, []);

  const value = {
    balance,
    earnings,
    hasUnlocked,
    refreshWallet,
    formatBalance: () => (balance * 0.5).toFixed(2) // LKR conversion
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}