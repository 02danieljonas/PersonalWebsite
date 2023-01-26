import Button from "./Button";

type ButtonGridProps = {
    handleKeyPress: (e: string) => void;
}

export default function ButtonGrid({handleKeyPress}:ButtonGridProps) {
    const y = [
        "7",
        "8",
        "9",
        "y^x",
        "del",
        "4",
        "5",
        "6",
        "*",
        "/",
        "1",
        "2",
        "3",
        "+",
        "-",
        "+/-",
        "0",
        ".",
        "c",
        "="
    ];
    return (
        <div className="grid gap-4 m-4 grid-cols-5 flex-grow">
            {y.map((e) => (
                <Button key={e} onClick={()=>handleKeyPress(e)} value={e} />
            ))}
        </div>
    );
}
