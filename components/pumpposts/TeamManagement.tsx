"use client";

import React, { useState } from 'react';
import { Users, Mail, Plus, Trash2, ShieldCheck, AlertCircle } from 'lucide-react';

interface TeamMember {
    id: string;
    email: string;
    role: 'Admin' | 'Staff';
    addedAt: string;
}

export default function TeamManagement() {
    // Prototype state - In production, this would fetch from an API
    const [members, setMembers] = useState<TeamMember[]>([
        { id: '1', email: 'Liam@turnerinstalls.com', role: 'Admin', addedAt: '2026-02-13' }
    ]);
    const [newEmail, setNewEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAddMember = (e: React.FormEvent) => {
        e.preventDefault();
        if (members.length >= 6) return; // Liam + 5 staff

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            const newMember: TeamMember = {
                id: Math.random().toString(36).substr(2, 9),
                email: newEmail,
                role: 'Staff',
                addedAt: new Date().toISOString().split('T')[0]
            };
            setMembers([...members, newMember]);
            setNewEmail('');
            setLoading(false);
        }, 800);
    };

    const removeMember = (id: string) => {
        setMembers(members.filter(m => m.id !== id));
    };

    return (
        <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-bold flex items-center gap-2">
                        <Users className="w-4 h-4 text-indigo-400" />
                        Team Access
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">Manage up to 5 additional staff accounts.</p>
                </div>
                <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-zinc-400">
                    {members.length - 1} / 5 STAFF SLOTS
                </div>
            </div>

            {/* Add Member Form */}
            <form onSubmit={handleAddMember} className="flex gap-2">
                <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                    <input
                        type="email"
                        required
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="staff@turnerinstalls.com"
                        className="w-full bg-black/50 border border-white/5 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-800"
                    />
                </div>
                <button
                    disabled={loading || members.length >= 6}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Add
                </button>
            </form>

            {/* List */}
            <div className="space-y-2">
                {members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 rounded-xl bg-white/2 border border-transparent hover:border-white/5 transition-all group">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${member.role === 'Admin' ? 'bg-indigo-500/20' : 'bg-zinc-800'}`}>
                                <Mail className={`w-4 h-4 ${member.role === 'Admin' ? 'text-indigo-400' : 'text-zinc-500'}`} />
                            </div>
                            <div>
                                <p className="text-sm font-medium">{member.email}</p>
                                <p className="text-[10px] text-zinc-600 tracking-wider font-bold uppercase">{member.role} • Added {member.addedAt}</p>
                            </div>
                        </div>

                        {member.role !== 'Admin' && (
                            <button
                                onClick={() => removeMember(member.id)}
                                className="p-2 text-zinc-700 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Master Key Indicator (Invisible to most, but helpful for UI) */}
            <div className="pt-4 border-t border-white/5 flex items-center gap-2 opacity-30 group hover:opacity-100 transition-opacity">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span className="text-[10px] text-zinc-500 font-medium">Master Key Access Enabled for PumpPosts Support</span>
            </div>
        </div>
    );
}
