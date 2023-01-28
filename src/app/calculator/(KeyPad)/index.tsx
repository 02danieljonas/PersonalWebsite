import Button from "./Button";

export default function ButtonGrid() {
    const y = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]
    // useEffect(() => {
    //     document.addEventListener("keydown", handleKeydown);
    //     return () => {
    //         document.removeEventListener("keydown", handleKeydown);
    //     };
    // }, []);

    return (
        <div className="grid gap-4 m-4 grid-cols-5 flex-grow">
            {y.map((e, i) => (
                <Button key={i} child={`${i}`} />
            ))}
        </div>
    );
}
