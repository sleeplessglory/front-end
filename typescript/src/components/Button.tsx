//TYPING PROPS & REACT COMPONENTS
//EXTRACTING TYPES
type Colour = "red" | "blue" | "green" | "white"; //a union type
type ButtonProps = { //props is an object
    //backgroundColour: string;
    backgroundColour: Colour; //if we wanna use a UNION type
    textColour: Colour;
    //OPTIONAL PROPS
    fontSize?: number; //"?" makes it optional (no need to pass this prop every time)
    //padding: number[]; //array of numbers, since padding can be applied to top, bottom, ...
    padding: [number, number, number, number] //if we wanna specify the array size
}
export default function Button({backgroundColour, textColour, fontSize, padding}: ButtonProps) { //destructure props and assign a type
    //fontSize.slice(); //error that the string method can't be applied to a number (benefit of TS)
    return(
        <button style={{
            backgroundColor: backgroundColour,
            color: textColour,
            fontSize: fontSize,
            padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`
        }}>
            TypeScript
        </button>
    );
}