import { Button } from "react-materialize"

export default function Menu() {
    
    return (
        <>
            <div className="center-align">
                <br/><br/>
                <h2>Menu Page</h2>
                <br/><br/>
                <h4>Click to get API response:</h4>
                <br/><br/><br/>
                <Button
                    className="yellow darken-3"
                    large
                    node="button"
                    waves="light"
                >API Button</Button>
            </div>
        </>
    )
}