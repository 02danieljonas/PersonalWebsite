import Image from "next/image";

type KNumeralsProps = {
    value?: number;
    height: number;
};

function Base20ToSVG({ value = 0, height }: KNumeralsProps) {
    return (
        <Image
            src={`/static/k_numerals/${value}.svg`}
            alt="K numerals"
            width={height / 1.6}
            height={height}
        />
    );
}

export function toBase20(decimal: number, binary: number[] = []): number[] {
    if (decimal === 0) {
        return binary;
    }
    return toBase20(Math.floor(decimal / 20), [decimal % 20, ...binary]);
}

export default function KNumerals({ value = 0, height }: KNumeralsProps) {
    let kNumeralsList: number[] = toBase20(value);
    if (kNumeralsList.length === 0) {
        kNumeralsList = [0];
    }

    return (
        <div>
            {kNumeralsList.map((e) => (
                <Base20ToSVG value={e} height={height} />
            ))}
        </div>
    );
}
