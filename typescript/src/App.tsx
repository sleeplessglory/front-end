import Button from './components/Button';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
export default function App() {
    //TYPING VARIABLES
    let name = "Stefani";
    //name = 5; //Type error since TS already assigned a string type to it!
    name = "Adele";

    //TYPING FUNCTIONS
    function convertCurrency(amount: number, currency: string):boolean { //boolean has to be returned
    // ...
        //return 2; //Shows that the boolean has to be returned
        return true;
    }
    //convertCurrency("w", "USD"); //Shows that the 1st parameter can't be a string
    convertCurrency(20, "USD");

    return (
        <>
            <main>
                {/*TYPING PROPS & REACT COMPONENTS*/}
                <Button backgroundColour="blue" fontSize={20} textColour="white" padding={[3, 2, 3, 2]} />
                {/*REACT CSS PROPERTIES*/}
                <Button2 style={{
                    backgroundColor: "blue",
                    fontSize: "2rem",
                    color: "white",
                    padding: "1 rem",
                    //borderColor: 4, //error that it has to be a string
                    borderColor: "none",
                }} />
                {/*RECORD TYPE*/}
                <Button3 borderRadius={{
                    'topLeft': 5,
                    'topRight': 5,
                    'bottomLeft': 10,
                    'bottomRight': 10
                }} />
            </main>
        </>
    );
};