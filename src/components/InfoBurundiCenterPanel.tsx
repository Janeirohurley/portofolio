import React from "react";
import profileImage from '../assets/profile2.jpg';
import emp from '../assets/empreinte.png';
interface CenterPanelProps {
    cniPaperStyle: React.CSSProperties;
}

export const InfoBurundiCenterPanel: React.FC<CenterPanelProps> = ({ cniPaperStyle }) => (
    <div className="flex-1 p-4 flex flex-col items-center justify-around relative z-10 " style={cniPaperStyle}>
        <div className="text-center">
            <p className="text-[10px] font-bold uppercase mb-4 opacity-70">Igikumu ca Nyenyo</p>

            <div className="w-32 h-40 border-2 border-blue-900/40 bg-white/40 p-0.5 relative shadow-inner mt-10">

                {/* Emplacement Photo */}
                <div className="w-full h-full bg-blue-200/50 flex items-center justify-center relative">
                    <img src={emp} alt="Empreinte" className="w-17  object-cover mx-auto absolute z-20 -top-15" />
                    <span className="h-0.5 w-10 bg-black absolute z-30 top-2 rounded-full" />
                    <span className="h-0.5 w-10 bg-black absolute z-30 bottom-2 rounded-full" />
                    <img src={profileImage} alt="Photo de profil" className="w-full h-full object-cover " />
                </div>

            </div>
        </div>
        <div className="mt-4 border-2 border-blue-900/20 px-4 py-1">
            <p className="font-bold text-[10px]">IKASHE</p>
        </div>
    </div>
);
