import React from 'react';

interface FingerprintProps {
    size?: number;
    color?: string;
    opacity?: number;
    className?: string;
}

export const Fingerprint: React.FC<FingerprintProps> = ({
    size = 80,
    color = "rgba(15, 23, 42, 0.8)", // Couleur encre foncée par défaut
    opacity = 0.7,
    className = ""
}) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size, opacity }}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={color}
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full transform -rotate-12" // Légère rotation pour le réalisme
            >
                {/* Les sillons de l'empreinte (SVG Path stylisé) */}
                <path d="M12 12c0-3.5 2.5-6 6-6s6 2.5 6 6" />
                <path d="M8 12c0-5.5 4.5-10 10-10s10 4.5 10 10" />
                <path d="M12 12c0 3.5-2.5 6-6 6s-6-2.5-6-6" />
                <path d="M4 12c0 5.5 4.5 10 10 10s10-4.5 10-10" />
                <path d="M12 12c-1.5 0-3-1-3-3s1.5-3 3-3 3 1 3 3-1.5 3-3 3z" />
                <path d="M12 16c-3 0-5.5-2-6-4.5" />
                <path d="M15 12c0 2-1.5 3.5-3.5 3.5S8 14 8 12" />
                <path d="M12 8c1.5 0 2.5 1 2.5 2.5" />
                <path d="M9.5 14c.5 1.5 1.5 2.5 3 2.5s2.5-1 3-2.5" />
            </svg>

            {/* Optionnel : Un léger effet de grain/bruit pour simuler l'encre sur papier */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        </div>
    );
};