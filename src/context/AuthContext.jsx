import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (email, password) => {
        // Mock login
        const userData = {
            name: "John Doe",
            email: email,
            balance: 5000,
            purchasedChips: 2500,
            dailyUsage: 350,
            transactions: [
                { id: 1, date: "2024-05-20", type: "Purchase", amount: 2500, status: "Completed" },
                { id: 2, date: "2024-05-19", type: "Game Win", amount: 1500, status: "Completed" },
                { id: 3, date: "2024-05-18", type: "Entry Fee", amount: -200, status: "Completed" }
            ]
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
    };

    const loginWithPhone = (phone) => {
        // Mock OTP send
        console.log(`Sending OTP to ${phone}`);
        return true;
    };

    const verifyOTP = (phone, otp) => {
        // Mock OTP verification
        if (String(otp) === '123456') {
            const userData = {
                name: "Mobile User",
                phone: phone,
                balance: 5000,
                purchasedChips: 0,
                dailyUsage: 0,
                transactions: []
            };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const socialLogin = (provider) => {
        // Mock social login
        const userData = {
            name: `${provider} User`,
            email: `${provider.toLowerCase()}@example.com`,
            balance: 5000,
            purchasedChips: 0,
            dailyUsage: 0,
            transactions: []
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, loginWithPhone, verifyOTP, socialLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
