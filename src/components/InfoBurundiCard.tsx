import React from "react";
import { InfoBurundiLeftPanel } from "./InfoBurundiLeftPanel";
import { InfoBurundiCenterPanel } from "./InfoBurundiCenterPanel";
import { InfoBurundiRightPanel } from "./InfoBurundiRightPanel";
import type { CniData } from "../types/portfolio";



interface InfoBurundiCardProps {
    myInfos: CniData;
    cniPaperStyle: React.CSSProperties;
    isLeftFolded: boolean;
    setIsLeftFolded: (v: boolean) => void;
    isRightFolded: boolean;
    setIsRightFolded: (v: boolean) => void;
    isFlipped: boolean;
    setIsFlipped: (v: boolean) => void;
}

export const InfoBurundiCard: React.FC<InfoBurundiCardProps> = ({
    myInfos,
    cniPaperStyle,
    isLeftFolded,
    setIsLeftFolded,
    isRightFolded,
    setIsRightFolded,
    isFlipped,
    setIsFlipped,
}) => {
    return (
        <div
            className={`relative flex w-full max-w-237.5 h-100 perspective-1000 flip-card ${isFlipped ? "flipped" : ""}`}
            style={{ cursor: "pointer" }}
        >
            <InfoBurundiLeftPanel
                isFlipped={isFlipped}
                myInfos={myInfos}
                cniPaperStyle={cniPaperStyle}
                isLeftFolded={isLeftFolded}
                setIsLeftFolded={setIsLeftFolded}
                isRightFolded={isRightFolded}
            />
            {!isFlipped ? (
                <InfoBurundiCenterPanel
                    handleFlip={() => setIsFlipped(!isFlipped)}
                    cniPaperStyle={cniPaperStyle}
                />
            ) : (
                <div
                    className="flex-1 p-4 flex flex-col items-center justify-around relative z-50 cursor-pointer"
                    style={cniPaperStyle}
                    onClick={() => setIsFlipped(false)}
                />
            )}
            <InfoBurundiRightPanel
                myInfos={myInfos}
                cniPaperStyle={cniPaperStyle}
                isRightFolded={isRightFolded}
                setIsRightFolded={setIsRightFolded}
                isFlipped={isFlipped}
                isLeftFolded={isLeftFolded}
            />
        </div>
    );
};
