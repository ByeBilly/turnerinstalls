"use client";

import React, { useState } from 'react';
import {
    LayoutDashboard,
    Share2,
    Image as ImageIcon,
    Send,
    Clock,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    CheckCircle2,
    Calendar,
    Smartphone,
    Layout
} from 'lucide-react';
import AuthShield from '@/components/pumpposts/AuthShield';

export default function CreatePost() {
    const [authorized, setAuthorized] = useState(false);
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['facebook']);
    const [postContent, setPostContent] = useState('');
    const [isScheduling, setIsScheduling] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const togglePlatform = (id: string) => {
        setSelectedPlatforms(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        );
    };

    if (!authorized) {
        return <AuthShield onSuccess={() => setAuthorized(true)} />;
    }

    return (
        <div className="flex min-h-screen bg-[#09090b] text-zinc-100 font-sans">
            {/* Main Content */}
            <main className="flex-1 p-8 max-w-6xl mx-auto">
                <header className="mb-12 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">Create Post</h1>
                        <p className="text-zinc-500 mt-2">Draft and distribute content across Liam's verified channels.</p>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* LEFT: THE EDITOR */}
                    <div className="space-y-8">
                        {/* 1. Platform Selection */}
                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-600">Target Platforms</label>
                            <div className="flex gap-3">
                                <PlatformBtn
                                    id="facebook"
                                    icon={<Facebook className="w-5 h-5" />}
                                    active={selectedPlatforms.includes('facebook')}
                                    onClick={() => togglePlatform('facebook')}
                                />
                                <PlatformBtn
                                    id="instagram"
                                    icon={<Instagram className="w-5 h-5" />}
                                    active={selectedPlatforms.includes('instagram')}
                                    onClick={() => togglePlatform('instagram')}
                                />
                                <PlatformBtn
                                    id="linkedin"
                                    icon={<Linkedin className="w-5 h-5" />}
                                    active={selectedPlatforms.includes('linkedin')}
                                    onClick={() => togglePlatform('linkedin')}
                                />
                            </div>
                        </div>

                        {/* 2. Content Area */}
                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-600">Caption</label>
                            <textarea
                                value={postContent}
                                onChange={(e) => setPostContent(e.target.value)}
                                placeholder="What's happening at Turner Installs today?"
                                className="w-full h-48 bg-zinc-900/50 border border-white/5 rounded-2xl p-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                            />
                        </div>

                        {/* 3. Media Upload */}
                        <div className="space-y-4">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-600">Media</label>
                            <div className="border-2 border-dashed border-white/5 rounded-2xl p-12 flex flex-col items-center justify-center gap-4 hover:bg-white/2 transition-all cursor-pointer group">
                                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ImageIcon className="w-6 h-6 text-zinc-400 font-bold" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-semibold">Drop your project photos here</p>
                                    <p className="text-xs text-zinc-500 mt-1">PumpPosts will automatically optimize size for each platform.</p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Scheduling / Action */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsScheduling(!isScheduling)}
                                className={`flex items-center gap-2 px-6 py-4 rounded-xl border transition-all font-bold ${isScheduling ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-black border-white/5 text-zinc-400 hover:text-white'}`}
                            >
                                <Clock className="w-5 h-5" />
                                {isScheduling ? 'Schedule Post' : 'Post Now'}
                            </button>

                            <button className="flex-1 bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 active:scale-[0.98]">
                                <Send className="w-5 h-5" />
                                Launch to {selectedPlatforms.length} Platforms
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: LIVE PREVIEWS */}
                    <div className="bg-zinc-900/20 border border-white/5 rounded-[40px] p-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold flex items-center gap-2 text-zinc-400">
                                <Smartphone className="w-4 h-4" />
                                Live Previews
                            </h3>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-zinc-800" />
                                <div className="w-2 h-2 rounded-full bg-zinc-800" />
                                <div className="w-2 h-2 rounded-full bg-zinc-800" />
                            </div>
                        </div>

                        {/* Facebook Preview Card */}
                        <div className="space-y-6">
                            <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5 shadow-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-xs uppercase">TI</div>
                                    <div>
                                        <p className="text-xs font-bold leading-none">Turner Installs</p>
                                        <p className="text-[10px] text-zinc-500 mt-1 italic flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> Just now • Sponsored Sync
                                        </p>
                                    </div>
                                </div>
                                <div className="text-sm text-zinc-300 mb-4 whitespace-pre-wrap">
                                    {postContent || "Your caption preview will appear here..."}
                                </div>
                                <div className="aspect-video bg-zinc-800 rounded-xl flex items-center justify-center border border-white/5 text-zinc-600 italic text-xs">
                                    <Layout className="w-8 h-8 opacity-20" />
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5 flex gap-4 text-xs font-bold text-zinc-500">
                                    <span>Like</span>
                                    <span>Comment</span>
                                    <span>Share</span>
                                </div>
                            </div>

                            {/* Instagram Preview Card */}
                            <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5 opacity-50 blur-[1px]">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full border-2 border-pink-500 p-0.5">
                                        <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold">TI</div>
                                    </div>
                                    <p className="text-xs font-bold">turner_installs</p>
                                </div>
                                <div className="aspect-square bg-zinc-800 rounded-sm mb-4" />
                                <p className="text-xs">
                                    <span className="font-bold mr-2">turner_installs</span>
                                    {postContent.substring(0, 40)}...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function PlatformBtn({ id, icon, active, onClick }: { id: string, icon: React.ReactNode, active: boolean, onClick: () => void }) {
    const colors = {
        facebook: 'hover:border-blue-500 active:bg-blue-500/10',
        instagram: 'hover:border-pink-500 active:bg-pink-500/10',
        linkedin: 'hover:border-sky-600 active:bg-sky-600/10'
    };

    return (
        <button
            onClick={onClick}
            className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${active
                ? 'bg-zinc-100 text-black border-white shadow-lg'
                : `bg-zinc-900 border-white/5 text-zinc-500 ${colors[id as keyof typeof colors]}`
                }`}
        >
            {icon}
            {active && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#09090b] flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
            )}
        </button>
    );
}
