"use client";

import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix for default marker icon in Next.js
const icon = L.icon({
    iconUrl: "/images/marker-icon.png", // We will need to ensure these exist or use a CDN/encoded SVG
    shadowUrl: "/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Since we might not have local marker images, let's create a custom divIcon or simpler approach
// actually, let's just use a CDN or a simple circle marker for the center.

export default function ServiceAreaMap() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Fix for missing marker icons
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    if (!isMounted) {
        return <div className="h-[400px] w-full bg-zinc-900 animate-pulse rounded-xl" />;
    }

    const position: [number, number] = [-27.567, 152.963]; // Oxley coordinates approx
    const radius = 250000; // 250km in meters

    return (
        <div className="h-[500px] w-full rounded-2xl overflow-hidden border border-gray-800 relative z-0">
            <MapContainer
                center={position}
                zoom={7}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
                className="z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {/* 250km Radius Circle */}
                <Circle
                    center={position}
                    radius={radius}
                    pathOptions={{ color: '#FACC15', fillColor: '#FACC15', fillOpacity: 0.1, weight: 2 }}
                />

                {/* Center Marker */}
                <Marker position={position}>
                    <Popup>
                        Turner Installs HQ <br /> Oxley, QLD
                    </Popup>
                </Marker>

                <div className="leaflet-bottom leaflet-right" style={{ pointerEvents: 'none' }}>
                    <div className="leaflet-control m-4 p-2 bg-black/80 text-yellow-500 text-xs font-bold rounded border border-yellow-500/50">
                        250km Service Radius
                    </div>
                </div>
            </MapContainer>
        </div>
    );
}
