import Button from "./Button";

export default function ButtonGrid() {
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
        <div className="grid grid-cols-5 flex-grow">
            {y.map((e) => (
                <Button key={e} value={e} />
            ))}
        </div>
    );
}
