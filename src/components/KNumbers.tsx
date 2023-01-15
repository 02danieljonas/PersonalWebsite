type ButtonProps = {
    value: number;
};

const Button = ({ value }: ButtonProps) => {
    const toBase20 = (number: number) => {
        let a = number;
        while (a!==0) {
            a--;
        }
        return number / 2;
    };
    console.log(toBase20(20));
    return <div>{value}</div>;
};
export default Button;
