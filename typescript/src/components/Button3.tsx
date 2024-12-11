type Button3Props = {
    borderRadius: Record<string, number> //key: value pair types
}

export default function Button3({borderRadius}: Button3Props) {
    return(
        <button>
            TypeScript
        </button>
    );
}