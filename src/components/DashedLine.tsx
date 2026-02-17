interface DashedSeparatorProps {
    orientation?: 'vertical' | 'horizontal';
    color?: string;
    thickness?: number;
    dashSize?: number;
    gapSize?: number;
    length?: string | number;
}

export const  DashedSeparator: React.FC<DashedSeparatorProps> = ({
    orientation = 'vertical',
    color = 'orange',
    thickness = 1,
    dashSize = 12,
    gapSize = 4,
    length = '100%'
}) => {
    const isVertical = orientation === 'vertical';

    return (
        <div
            style={{
                width: isVertical ? `${thickness}px` : length,
                height: isVertical ? length : `${thickness}px`,
                backgroundImage: `linear-gradient(${isVertical ? 'to bottom' : 'to right'}, ${color} ${dashSize}px, transparent ${dashSize}px)`,
                backgroundSize: isVertical
                    ? `${thickness}px ${dashSize + gapSize}px`
                    : `${dashSize + gapSize}px ${thickness}px`,
                backgroundRepeat: 'repeat',
            }}
        />
    );
};