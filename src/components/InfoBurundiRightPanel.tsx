import React from "react";

interface CniData {
    province: string;
    commune: string;
    colline: string;
}

interface RightPanelProps {
    myInfos: CniData;
    cniPaperStyle: React.CSSProperties;
    isRightFolded: boolean;
    setIsRightFolded: (v: boolean) => void;
}

export const InfoBurundiRightPanel: React.FC<RightPanelProps> = ({
    myInfos,
    cniPaperStyle,
    isRightFolded,
    setIsRightFolded,
}) => {
    return (
        <div
            onClick={() => setIsRightFolded(!isRightFolded)}
            className={`flex-1 p-2 transition-all duration-1000 cursor-pointer z-30 relative origin-left border-l border-black/10 justify-start flex items-center shadow-[10px_0_15px_-5px_rgba(0,0,0,0.3)]
              ${isRightFolded ? 'rotate-y-180' : 'rotate-y-0'}`}
            style={{ ...cniPaperStyle, transformStyle: 'preserve-3d' }}
        >
            {/* FACE A : TABLEAU (Visible quand ouvert) */}
            <div
                className="backface-hidden flex flex-col absolute -right-7"
                style={{
                    transform: 'rotate(-90deg)',
                    width: '380px',
                    transformOrigin: 'center center',
                    backfaceVisibility: 'hidden' // Empêche de voir le tableau à l'envers
                }}
            >
                <h3 className="text-[10px] font-black mb-4 text-center border-b border-black/20 pb-1 uppercase tracking-widest">
                    Aho y'ikwirikiranije kuba
                </h3>
                <div className="overflow-hidden">
                    <table className="w-full border-collapse text-[10px] h-full">
                        <thead>
                            <tr className="bg-black/10 border-b-2 border-black">
                                <th className="border-r border-black p-1 font-black">PROVENSI</th>
                                <th className="border-r border-black p-1 font-black">KOMINE</th>
                                <th className="border-r border-black p-1 font-black">UMUSOZI</th>
                                <th className="p-1 font-black">ITALIKI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-black/40 font-bold text-blue-900">
                                <td className="border-r border-black/40 p-2 text-center uppercase">{myInfos.province}</td>
                                <td className="border-r border-black/40 p-2 text-center uppercase">{myInfos.commune}</td>
                                <td className="border-r border-black/40 p-2 text-center uppercase">{myInfos.colline}</td>
                                <td className="p-2 text-center uppercase">2024</td>
                            </tr>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="border-b border-black/20 h-8">
                                    <td className="border-r border-black/20"></td>
                                    <td className="border-r border-black/20"></td>
                                    <td className="border-r border-black/20"></td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FACE B : COUVERTURE (Visible quand isRightFolded est true) */}
            {/* On utilise absolute inset-0 pour épouser parfaitement la taille du parent sans la modifier */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-blue-100 border border-blue-300"
                style={{
                    transform: 'rotateY(180deg)', // Retournée par défaut
                    backfaceVisibility: 'hidden', // Cache la couverture quand le volet est ouvert
                    backgroundColor: cniPaperStyle.backgroundColor // Garde la même couleur de papier
                }}
            >
                <div
                    className="backface-hidden flex flex-col absolute -right-7"
                    style={{
                        transform: 'rotate(-90deg)',
                        width: '380px',
                        transformOrigin: 'center center',
                        backfaceVisibility: 'hidden' // Empêche de voir le tableau à l'envers
                    }}
                >
                    <h3 className="text-[10px] font-black mb-4 text-center border-b border-black/20 pb-1 uppercase tracking-widest">
                        Aho y'ikwirikiranije kuba
                    </h3>
                    <div className="overflow-hidden">
                        <table className="w-full border-collapse text-[10px] h-full">
                            <thead>
                                <tr className="bg-black/10 border-b-2 border-black">
                                    <th className="border-r border-black p-1 font-black">PROVENSI</th>
                                    <th className="border-r border-black p-1 font-black">KOMINE</th>
                                    <th className="border-r border-black p-1 font-black">UMUSOZI</th>
                                    <th className="p-1 font-black">ITALIKI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-black/40 font-bold text-blue-900">
                                    <td className="border-r border-black/40 p-2 text-center uppercase">{myInfos.province}</td>
                                    <td className="border-r border-black/40 p-2 text-center uppercase">{myInfos.commune}</td>
                                    <td className="border-r border-black/40 p-2 text-center uppercase">{myInfos.colline}</td>
                                    <td className="p-2 text-center uppercase">2024</td>
                                </tr>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="border-b border-black/20 h-8">
                                        <td className="border-r border-black/20"></td>
                                        <td className="border-r border-black/20"></td>
                                        <td className="border-r border-black/20"></td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* CSS pour gérer le retournement propre */}
            <style>{`
                .rotate-y-180 { transform: rotateY(180deg); }
                .rotate-y-0 { transform: rotateY(0deg); }
                .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
            `}</style>
        </div>
    );
};