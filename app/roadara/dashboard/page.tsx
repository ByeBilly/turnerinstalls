"use client";

import React, { useState, useEffect } from 'react';
import AuthShield from '@/components/roadara/AuthShield';
import {
    LayoutDashboard,
    Share2,
    Plus,
    Bell,
    Search,
    Globe,
    MessageSquare,
    ThumbsUp,
    Settings,
    Clock,
    CheckCircle2,
    Activity,
    MoreVertical,
    LogOut
} from 'lucide-react';
import TeamManagement from '@/components/roadara/TeamManagement';

export default function RoadaraDashboard() {
    const [authorized, setAuthorized] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        // Quick check if there's already a session in local storage (for prototype)
        const session = localStorage.getItem('roadara_authorized');
        if (session === 'true') {
            setAuthorized(true);
        }
        setChecking(false);
    }, []);

    const handleAuthSuccess = () => {
        setAuthorized(true);
        localStorage.setItem('roadara_authorized', 'true');
    };

    const handleLogout = () => {
        setAuthorized(false);
        localStorage.removeItem('roadara_authorized');
    };

    if (checking) return null;

    if (!authorized) {
        return <AuthShield onSuccess={handleAuthSuccess} />;
    }

    return (
        <div className="flex min-h-screen bg-[#09090b] text-zinc-100 font-sans">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#09090b] p-6 hidden lg:flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <Share2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold tracking-tight text-lg uppercase">Roadara</span>
                </div>

                <nav className="flex flex-col gap-1">
                    <NavItem href="/roadara/dashboard" icon={<LayoutDashboard className="w-4 h-4" />} label="Overview" active />
                    <NavItem href="/roadara/posts" icon={<Plus className="w-4 h-4" />} label="Create Post" />
                    <NavItem href="/roadara/accounts" icon={<Globe className="w-4 h-4" />} label="Channel Auth" />
                    <NavItem href="#" icon={<Activity className="w-4 h-4" />} label="Sync History" />
                    <NavItem href="#" icon={<MessageSquare className="w-4 h-4" />} label="Mentions" />
                    <NavItem href="#" icon={<Settings className="w-4 h-4" />} label="Settings" />
                </nav>

                <div className="mt-auto space-y-4">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-rose-400 hover:bg-rose-500/5 transition-all group"
                    >
                        <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Log Out
                    </button>

                    <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                        <p className="text-xs text-indigo-400 font-semibold mb-2">PROTOTYPE MODE</p>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">
                            Currently running as an integrated module for Turner Installs.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="px-8 py-5 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#09090b]/80 backdrop-blur-md z-20">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative max-w-md w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search social data..."
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 relative rounded-lg border border-white/5 hover:bg-white/5 transition-all text-zinc-400">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#09090b]" />
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xs ring-2 ring-white/5">
                            LT
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto space-y-8">
                    {/* Welcome Title */}
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Sync Dashboard</h2>
                            <p className="text-zinc-500">Real-time status of your brand across 4 platforms.</p>
                        </div>
                        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-semibold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-600/10">
                            <Plus className="w-4 h-4" />
                            Force Profile Sync
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard label="Total Mentions" value="1,248" change="+12.5%" trend="up" />
                        <StatCard label="Review Score" value="4.8" change="+0.2" trend="up" />
                        <StatCard label="Sync Health" value="99.2%" change="Optimal" trend="neutral" />
                        <StatCard label="Active Leads" value="42" change="+34%" trend="up" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Platform Health */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="font-bold flex items-center gap-2">
                                        <Activity className="w-4 h-4 text-indigo-400" />
                                        Platform Health
                                    </h3>
                                    <button className="text-xs text-zinc-500 hover:text-white transition-colors">View Detailed Logs</button>
                                </div>
                                <div className="space-y-4">
                                    <PlatformStatus name="Google Business" status="operational" lastSync="2 mins ago" />
                                    <PlatformStatus name="Facebook Page" status="operational" lastSync="14 mins ago" />
                                    <PlatformStatus name="Instagram Business" status="operational" lastSync="14 mins ago" />
                                    <PlatformStatus name="LinkedIn Company" status="warning" lastSync="3 hours ago" />
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
                                <h3 className="font-bold mb-6">Recent Activity</h3>
                                <div className="space-y-6">
                                    <ActivityItem
                                        icon={<ThumbsUp className="w-4 h-4 text-cyan-400" />}
                                        title="New 5-star review from Oxley project"
                                        time="22 mins ago"
                                        category="Google"
                                    />
                                    <ActivityItem
                                        icon={<Share2 className="w-4 h-4 text-indigo-400" />}
                                        title="Profile synchronization across 4 platforms"
                                        time="1 hour ago"
                                        category="Automation"
                                    />
                                    <ActivityItem
                                        icon={<Clock className="w-4 h-4 text-amber-400" />}
                                        title="Scheduled post queued: Residential Flooring"
                                        time="2 hours ago"
                                        category="Scheduler"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Side Panels */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 text-white shadow-2xl shadow-indigo-600/10 border border-white/10">
                                <h4 className="font-bold mb-2">Sync Intelligence</h4>
                                <p className="text-indigo-100 text-xs mb-6 leading-relaxed">
                                    AI is detecting a high-intent conversation regarding "Floor Levelling" in Corinda. Would you like to prioritize sync?
                                </p>
                                <button className="w-full py-2 bg-white text-indigo-600 rounded-lg text-xs font-bold hover:bg-zinc-100 transition-colors">
                                    Enable Smart-Priority
                                </button>
                            </div>

                            <TeamManagement />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon, label, href, active = false }: { icon: React.ReactNode, label: string, href: string, active?: boolean }) {
    return (
        <a
            href={href}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${active ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/10' : 'text-zinc-500 hover:text-white hover:bg-white/5'}`}
        >
            {icon}
            {label}
        </a>
    );
}

function StatCard({ label, value, change, trend }: { label: string, value: string, change: string, trend: 'up' | 'down' | 'neutral' }) {
    return (
        <div className="p-5 rounded-xl bg-zinc-900/50 border border-white/5">
            <p className="text-xs text-zinc-500 font-medium mb-1">{label}</p>
            <div className="flex items-end justify-between">
                <h4 className="text-2xl font-bold">{value}</h4>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${trend === 'up' ? 'bg-emerald-500/10 text-emerald-500' :
                    trend === 'down' ? 'bg-rose-500/10 text-rose-500' : 'bg-zinc-500/10 text-zinc-500'
                    }`}>
                    {change}
                </span>
            </div>
        </div>
    );
}

function PlatformStatus({ name, status, lastSync }: { name: string, status: 'operational' | 'warning' | 'error', lastSync: string }) {
    return (
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/2 hover:bg-white/4 transition-colors">
            <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${status === 'operational' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500'}`} />
                <span className="text-sm font-medium">{name}</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-xs text-zinc-500">Last sync: {lastSync}</span>
                <MoreVertical className="w-4 h-4 text-zinc-700 cursor-pointer hover:text-zinc-400" />
            </div>
        </div>
    );
}

function ActivityItem({ icon, title, time, category }: { icon: React.ReactNode, title: string, time: string, category: string }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1 w-8 h-8 rounded-lg bg-black border border-white/5 flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-zinc-200">{title}</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">{category}</span>
                    <span className="text-[10px] text-zinc-700">•</span>
                    <span className="text-[10px] text-zinc-500">{time}</span>
                </div>
            </div>
        </div>
    );
}

function IntegrationItem({ name, active }: { name: string, active: boolean }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">{name}</span>
            <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-zinc-600">{active ? 'Connected' : 'Disconnected'}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
            </div>
        </div>
    );
}
