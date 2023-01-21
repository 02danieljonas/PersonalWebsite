import Image from "next/image";

type KNumeralsProps = {
    value?: number;
    height: number;
};

interface Base20ToSVGProps {
    value?: number;
    height: number;
    id?: number;
}

function Base20ToSVG({ value = 0, height, id = 0 }: Base20ToSVGProps) {
    return (
        <Image
            src={`/static/k_numerals/${value}.svg`}
            key={id}
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
        <div
            id="KNumerals-container"
            className="flex flex-nowrap p-1 w-fit bg-transparent"
        >
            {kNumeralsList.map((e, i) => (
                <Base20ToSVG value={e} height={height} id={i} key={i} />
            ))}
        </div>
    );
}
