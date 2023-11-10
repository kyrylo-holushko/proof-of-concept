import { Button } from "react-materialize"
import useSWR from "swr"
import { useState } from "react";

export default function Menu() {

    const [show, setShow] = useState(false);

    const { data } = useSWR('http://localhost:3000/api/hello');

    //https://res.cloudinary.com/dmtjposo5/gab/appetizer/jz9bz8o4dreqxqqhhnr7
    //https://res.cloudinary.com/dmtjposo5/gab/main/xiqdzedfefrvcmakfp6u
    //https://res.cloudinary.com/dmtjposo5/gab/dessert/jlusmortt9bltxktrzxw
    //https://res.cloudinary.com/dmtjposo5/gab/beverage/kcppriy7nikyshpzxjmr
    
    return (
        <>
            <div className="center-align">
                <br/><br/>
                <h2>Menu Page</h2>
                <br/><br/>
                <h4>Click to show polled API response:</h4>
                <br/><br/><br/>
                <Button
                    className="yellow darken-3"
                    large
                    node="button"
                    waves="light"
                    onClick={e=>{setShow(true)}}
                >Show API Data</Button>
                <br/><br/>
                {show && <h5>{data?.name}</h5>}
                <br/><br/>
            </div>
        </>
    )
}