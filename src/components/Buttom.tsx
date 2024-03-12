import { count } from "console";

export function Buttom(){
    //let it change, explicação do let
    let counter = 0;

    function increments(){
        counter++;
        console.log(counter);
        
    }

    return (
        <button onClick={increments}>
            {counter}
        </button>
    )
}
