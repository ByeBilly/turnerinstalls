"use client";

import React, { useState } from 'react';
import {
    LayoutDashboard,
    Link as LinkIcon,
    Facebook,
    Instagram,
    Linkedin,
    Settings,
    Plus,
    CheckCircle2,
    Clock,
    AlertCircle,
    ShieldCheck,
    Globe
} from 'lucide-react';
import AuthShield from '@/components/roadara/AuthShield';

export default function AccountConnections() {
    const [authorized, setAuthorized] = useState(false);

    // In a real scenario, these statuses would come from your Standalone Hub
    const [connections, setConnections] = useState([
        { id: 'fb', name: 'Facebook', icon: <Facebook className="w-5 h-5 text-[#1877F2]" />, status: 'pending', description: 'Requires Meta Business Verification' },
        { id: 'ig', name: 'Instagram', icon: <Instagram className="w-5 h-5 text-[#E4405F]" />, status: 'disconnected', description: 'Connect via Facebook Business Suite' },
        { id: 'li', name: 'LinkedIn', icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />, status: 'disconnected', description: 'Personal or Company Page access' }
    ]);

    if (!authorized) {
        return <AuthShield onSuccess={() => setAuthorized(true)} />;
    }

    return (
        <div className="flex min-h-screen bg-[#09090b] text-zinc-100 font-sans">
            <main className="flex-1 p-8 max-w-5xl mx-auto">
                <header className="mb-12 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">Channel Authorization</h1>
                        <p className="text-zinc-500 mt-2">Securely link Turner Installs' social presence to the Roadara Engine.</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">A-Class Encryption Active</span>
                    </div>
                </header>

                <div className="grid gap-6">
                    {connections.map((conn) => (
                        <div key={conn.id} className="group relative p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className={`w-16 h-16 rounded-2xl bg-black border border-white/5 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform`}>
                                    {conn.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{conn.name}</h3>
                                    <p className="text-sm text-zinc-500 mt-1">{conn.description}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <StatusBadge status={conn.status} />
                                <button
                                    disabled={conn.status === 'pending'}
                                    className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${conn.status === 'disconnected'
                                        ? 'bg-white text-black hover:bg-zinc-200'
                                        : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                        }`}
                                >
                                    {conn.status === 'disconnected' ? <Plus className="w-4 h-4" /> : null}
                                    {conn.status === 'disconnected' ? 'Link Account' : 'Awaiting Approval'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Developer / Master Note */}
                <div className="mt-12 p-8 rounded-[40px] bg-indigo-600/5 border border-indigo-500/10 border-dashed">
                    <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                            <AlertCircle className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-indigo-200">Architectural Note for Turner Installs</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                To ensure maximum cost-savings and data privacy, Roadara is being deployed as a
                                <strong> Private Standalone Engine</strong>. While we finalize the one-time "Universal Approval"
                                with Meta and LinkedIn, some channel links may remain in <span className="text-indigo-400 font-bold uppercase tracking-tighter">Pending</span> state.
                            </p>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Master Approval: 0% Ready</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-3 h-3 text-zinc-600" />
                                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Global Hub Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    if (status === 'disconnected') {
        return (
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-800/50 rounded-full border border-white/5 italic">
                <span className="text-[10px] font-bold text-zinc-600 uppercase">Offline</span>
            </div>
        );
    }
    if (status === 'pending') {
        return (
            <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 animate-pulse">
                <Clock className="w-3 h-3 text-amber-500" />
                <span className="text-[10px] font-bold text-amber-500 uppercase">Approval Pending</span>
            </div>
        );
    }
    return (
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-500">
            <CheckCircle2 className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Linked</span>
        </div>
    );
}
