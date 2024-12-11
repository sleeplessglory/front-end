type Button2Props = {
    style: React.CSSProperties;
}

export default function Button2({style}: Button2Props) {
    return(
        <button style={style}>
            TypeScript
        </button>
    );
}