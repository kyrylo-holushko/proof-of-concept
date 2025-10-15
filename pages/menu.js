
import { useContext } from "react";
import { MenuContext } from "./_app";
import { useRouter } from "next/router";

export default function Menu() {

    const router = useRouter();
    
    const { menu, setMenu } = useContext(MenuContext);

    function handleSelection(section){
        localStorage.setItem('section', section);
        setMenu(section);
        router.push("/section");
    }
    
    return (
        <>
            <div className="page-grid">
                <div></div>
                <div className="center-align">
                    <br/><br/>
                    <h2>Menu Page</h2>
                    <br/><br/>
                    <div className="menu-canvas">
                        <div className="menu-section center-align appetizer-bg-img"
                            onClick={e=>{handleSelection('appetizer')}}
                            >
                            <h3 className="menu-title">Appetizers</h3>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="menu-canvas">
                        <div className="menu-section center-align main-bg-img"
                            onClick={e=>{handleSelection('main')}}
                            >
                            <h3 className="menu-title">Mains</h3>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="menu-canvas">
                        <div className="menu-section center-align dessert-bg-img"
                            onClick={e=>{handleSelection('dessert')}}
                            >
                            <h3 className="menu-title">Desserts</h3>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="menu-canvas">
                        <div className="menu-section center-align beverage-bg-img"
                            onClick={e=>{handleSelection('beverage')}}
                            >
                            <h3 className="menu-title">Beverages</h3>
                        </div>
                    </div>
                    <br/><br/>
                </div>
                <div></div>
            </div>
        </>
    )
}