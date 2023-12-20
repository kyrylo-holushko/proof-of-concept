import NavigationBar from "./NavigationBar"
import FooterBar from "./FooterBar"

export default function Layout(props){

    return(
        <>
            <NavigationBar/>
                {props.children}
            <FooterBar/>
        </>
    )
}