import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Mock login - accept any non-empty values
        if (email && password) {
            setUser({
                email,
                name: email.split('@')[0],
                balance: 5000,
                purchasedChips: 2500,
                dailyUsage: 150,
                transactions: [
                    { id: 1, date: '2024-02-23', type: 'Purchase', amount: 2500, status: 'Completed' },
                    { id: 2, date: '2024-02-24', type: 'Game Win', amount: 300, status: 'Completed' },
                    { id: 3, date: '2024-02-24', type: 'Entry Fee', amount: -150, status: 'Completed' }
                ]
            });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
