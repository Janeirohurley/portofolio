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
}

export const InfoBurundiCard: React.FC<InfoBurundiCardProps> = ({
    myInfos,
    cniPaperStyle,
    isLeftFolded,
    setIsLeftFolded,
    isRightFolded,
    setIsRightFolded,
}) => {
    return (
        <div className="relative flex w-full max-w-237.5 h-100  perspective-1000 ">
            <InfoBurundiLeftPanel
                myInfos={myInfos}
                cniPaperStyle={cniPaperStyle}
                isLeftFolded={isLeftFolded}
                setIsLeftFolded={setIsLeftFolded}
            />
            <InfoBurundiCenterPanel
                cniPaperStyle={cniPaperStyle}
            />
            <InfoBurundiRightPanel
                myInfos={myInfos}
                cniPaperStyle={cniPaperStyle}
                isRightFolded={isRightFolded}
                setIsRightFolded={setIsRightFolded}
            />
        </div>
    );
};
