import Button from "./Button";

type ButtonGridProps = {
    handleKeyPress: (e: string) => void;
}

export default function ButtonGrid({handleKeyPress}:ButtonGridProps) {

    const y = [
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["y^x", "^"],
        ["del", "Delete"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["*", "*"],
        ["/", "/"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["+", "+"],
        ["-", "-"],
        ["+/-", "+/-"],
        ["0", "0"],
        [".", "."],
        ["C", "C"],
        ["=", "="]
    ];
    return (
        <div className="grid gap-4 m-4 grid-cols-5 flex-grow">
            {y.map(([face, value]) => (
                <Button key={face} onClick={()=>handleKeyPress(value)} value={face} />
            ))}
        </div>
    );
}
