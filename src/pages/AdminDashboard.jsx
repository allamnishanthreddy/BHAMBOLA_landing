import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');

    if (!user || user.role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Total Users</h3>
                            <p className="text-3xl font-black text-white">1,284</p>
                            <span className="text-green-500 text-xs font-bold">+12% from last week</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Active Games</h3>
                            <p className="text-3xl font-black text-bhambola-gold">24</p>
                            <span className="text-bhambola-gold text-xs font-bold">Live across regions</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Total Chips Bet</h3>
                            <p className="text-3xl font-black text-bhambola-red">452,000</p>
                            <span className="text-gray-500 text-xs font-bold">Last 24 hours</span>
                        </div>
                    </div>
                );
            case 'users':
                return (
                    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden animate-fade-in">
                        <table className="w-full text-left">
                            <thead className="bg-white/10">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Balance</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-gray-300">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">John Doe</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/50 uppercase tracking-tighter">Verified</span></td>
                                    <td className="px-6 py-4 font-mono font-bold text-bhambola-gold">5,000</td>
                                    <td className="px-6 py-4">
                                        <button className="text-bhambola-gold hover:text-white transition-colors text-xs font-black uppercase tracking-widest bg-bhambola-gold/10 px-3 py-1 rounded-md border border-bhambola-gold/20 mr-2">Edit</button>
                                        <button className="text-red-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-md border border-red-500/20">Ban</button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">Jane Smith</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold rounded-full border border-yellow-500/50 uppercase tracking-tighter">Pending</span></td>
                                    <td className="px-6 py-4 font-mono font-bold text-bhambola-gold">1,200</td>
                                    <td className="px-6 py-4">
                                        <button className="text-bhambola-gold hover:text-white transition-colors text-xs font-black uppercase tracking-widest bg-bhambola-gold/10 px-3 py-1 rounded-md border border-bhambola-gold/20 mr-2">Edit</button>
                                        <button className="text-red-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-md border border-red-500/20">Ban</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case 'games':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-bhambola-gold/30 transition-all">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-white font-black font-['Cinzel'] italic">Sunday Special Kitty</h3>
                                <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/50 uppercase">Live</span>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Active Players</span>
                                    <span className="text-white font-bold">42</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Prize Pool</span>
                                    <span className="text-bhambola-gold font-bold">25,000 Chips</span>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-bhambola-red text-white text-xs font-black uppercase tracking-[0.2em] rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/20">Manage Table</button>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-center items-center justify-center border-dashed group cursor-pointer hover:bg-white/[0.02]">
                            <div className="text-center group-hover:scale-110 transition-transform">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-2 text-2xl font-light">+</div>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Create New Table</p>
                            </div>
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl animate-fade-in max-w-2xl">
                        <h3 className="text-white font-black font-['Cinzel'] italic mb-8 border-b border-white/10 pb-4">Global System Settings</h3>
                        <div className="space-y-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-white font-bold text-sm">Maintenance Mode</h4>
                                    <p className="text-gray-400 text-xs">Shutdown all active games for maintenance.</p>
                                </div>
                                <div className="w-12 h-6 bg-white/10 rounded-full relative cursor-pointer">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-gray-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-white font-bold text-sm">Registration Allowed</h4>
                                    <p className="text-gray-400 text-xs">Controls if new users can sign up.</p>
                                </div>
                                <div className="w-12 h-6 bg-green-500/20 rounded-full relative cursor-pointer border border-green-500/30">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button className="px-6 py-2 bg-bhambola-gold text-black text-xs font-black uppercase tracking-[0.2em] rounded-lg hover:scale-105 transition-all shadow-lg shadow-bhambola-gold/20">Save All Changes</button>
                            </div>
                        </div>
                    </div>
                );
            default:
                return <div className="text-gray-400 italic">This section is under development.</div>;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-bhambola-red">
            <Header />
            <div className="flex">
                <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <main className="flex-1 p-8 bg-gradient-to-br from-black via-red-950/20 to-black">
                    <div className="mb-8">
                        <h1 className="text-3xl font-black font-['Cinzel'] tracking-tight italic uppercase text-white">
                            {activeTab === 'dashboard' ? 'Overview' : activeTab === 'users' ? 'User Management' : 'Admin Portal'}
                        </h1>
                        <p className="text-gray-400 font-['Playfair_Display'] italic">Welcome back, {user.name}.</p>
                    </div>
                    {renderContent()}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default AdminDashboard;
