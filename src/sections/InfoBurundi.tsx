import React, { useState } from "react";
import { InfoBurundiCard } from "../components/InfoBurundiCard";
import type { CniData } from "../types/portfolio";

export default function InfoBurundi() {
    const [isLeftFolded, setIsLeftFolded] = useState<boolean>(false);
    const [isRightFolded, setIsRightFolded] = useState<boolean>(false);

    // Simulation de tes données
    const myInfos:CniData = {
        nom: "NDABUBAHA",
        prenom: "Janvier",
        pere: "NDIKUMANA Evaritse",
        mere: "NAHIMANA Papie Monique",
        province: "RUYIGI",
        commune: "KINYINYA",
        colline: "KINYINYA",
        naissance: "2002",
        etatCivil: "OYA",
        etatCivil2: "...........",
        profession: "ELEVE",
        donationPlace:"KINYINYA",
        datationName: "MUSITANTERI WA KOMINE, KWIZERA Fulgence",
        date:"18/01/2018",
        numberID:"1705/481.013/2018"

    };

    const cniPaperStyle = {
        backgroundColor: "#b3d9ff",
        backgroundImage: `linear-gradient(320deg, #b3d9ff 0%, #cae4ff 100%)`,
        color: "#1a3a5a",
    };

    return (
        <div className="py-10 bg-slate-50 min-h-screen flex flex-col items-center">
            <div className="text-center mb-12">
                <h1 className="text-2xl font-black text-slate-800 tracking-tighter uppercase">Republika y'Uburundi</h1>
                <p className="text-blue-600 font-serif ">IKARATA Y'INDANGAMUNTU</p>
            </div>
            <InfoBurundiCard
                myInfos={myInfos}
                cniPaperStyle={cniPaperStyle}
                isLeftFolded={isLeftFolded}
                setIsLeftFolded={setIsLeftFolded}
                isRightFolded={isRightFolded}
                setIsRightFolded={setIsRightFolded}
            />
            <style>{`
                .perspective-1000 { perspective: 2000px; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(-175deg); }
                .rotate-y--180 { transform: rotateY(175deg); }
            `}</style>
        </div>
    );
}