import React from "react";
import type { CniData } from "../types/portfolio";


interface LeftPanelProps {
    myInfos: CniData;
    cniPaperStyle: React.CSSProperties;
    isLeftFolded: boolean;
    setIsLeftFolded: (v: boolean) => void;
}

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="font-bold text-[10px] md:text-xs uppercase mr-2 text-blue-900/70">{children} :</span>
);

const DataLine: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="border-b border-dotted border-blue-900/30 mb-2 pb-0.5 flex items-baseline">
        <Label>{label}</Label>
        <span className="text-xs md:text-sm font-bold  text-blue-950 font-mono">{value}</span>
    </div>
);

export const InfoBurundiLeftPanel: React.FC<LeftPanelProps> = ({
    myInfos,
    cniPaperStyle,
    isLeftFolded,
    setIsLeftFolded,
}) => (
    <div
        onClick={() => setIsLeftFolded(!isLeftFolded)}
        className={`flex-1 p-6 transition-all duration-700 cursor-pointer z-40 relative origin-right border-r border-blue-400/20 shadow-[-10px_0_15px_-5px_rgba(0,0,0,0.3)]
            ${isLeftFolded ? 'rotate-y--180' : 'rotate-y-0'}`}
        style={{ ...cniPaperStyle, transformStyle: 'preserve-3d' }}
    >
        {/* FACE A : LES INFOS (Visible quand ouvert) */}
        <div className="backface-hidden">
            <DataLine label="IZINA" value={myInfos.nom} />
            <DataLine label="AMATAZIRANO" value={myInfos.prenom} />
            <DataLine label="SE" value={myInfos.pere} />
            <DataLine label="NYINA" value={myInfos.mere} />
            <DataLine label="PROVENSI" value={myInfos.province} />
            <DataLine label="KOMINE" value={myInfos.commune} />
            <DataLine label="YAVUKIYE" value={myInfos.colline} />
            <DataLine label="ITALIKI" value={myInfos.naissance} />
            <DataLine label="ARUBATSE" value={myInfos.etatCivil} />
            <DataLine label="NTIYUBATSE" value={myInfos.etatCivil2} />
            <DataLine label="AKAZI AKORA" value={myInfos.profession} />
        </div>

        {/* FACE B : LA COUVERTURE (Extérieur - d'après ta photo) */}
        <div
            className="backface-hidden absolute inset-0 p-4 flex flex-col items-center text-gray-800"
            style={{
                transform: 'rotateY(-180deg)',
                backgroundColor: cniPaperStyle.backgroundColor,
                backfaceVisibility: 'hidden'
            }}
        >
            {/* 1. Entête République */}
            <div className="text-start mb-2">
                <h2 className="font-black text-[11px] border-b-2 border-gray-800 inline-block px-2 uppercase">
                    Republika y'Uburundi
                </h2>
            </div>

            {/* 2. Titre Encadré (Ikarata Karangamuntu) */}
            <div className="border-2 border-gray-800 px-3 py-0.5 my-4">
                <h1 className="font-black text-[12px] uppercase tracking-tighter">
                    Ikarata Karangamuntu
                </h1>
            </div>

            {/* 3. Zone de texte (N° MIFP, Date, etc.) */}
            <div className="w-full space-y-6 mt-10 text-[10px] font-bold">
                <div className="flex  gap-1 items-baseline">
                    <span className="text-xs md:text-sm font-bold  text-blue-950 font-mono">N° MIFP :</span>
                    <span className="text-xs md:text-sm font-bold  text-blue-950 font-mono">{myInfos.numberID}</span>
                </div>
                <div>

                    <DataLine label="ITANGIWE I" value={myInfos.donationPlace} />
                </div>
                <div>

                    <DataLine label="ITALIKI" value={myInfos.date} />
                </div>
                <DataLine label="Uwuyitanze" value={myInfos.datationName} />
            </div>
        </div>

        {/* Styles utilitaires locaux */}
        <style>{`
            .rotate-y--180 { transform: rotateY(-180deg); }
            .rotate-y-0 { transform: rotateY(0deg); }
            .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        `}</style>
    </div>
);
