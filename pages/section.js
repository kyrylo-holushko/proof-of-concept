import useSWR from "swr"
import { useContext } from "react";
import { MenuContext } from "./_app";
//<p><a href="#">This is a link</a></p>
//"card-title grey-text text-darken-4"
export default function Section(){

    const { menu } = useContext(MenuContext);

    const { data } = useSWR(menu ? `http://localhost:3000/api/${menu}` : null);

    return (
        <>
            <style jsx>{`
                .card-reveal {
                    background-color: rgba(0, 0, 0, 0.8);
                }
            `}</style>
            <div className="container">
                <div className="row">
                    <div className="col xl4 l3 m2 s1"></div>
                    <div className="col xl4 l6 m8 s10 center-align">
                        <br/><br/>
                        <h3>{data?.title}</h3>
                        <br/><br/>
                    {data ? 
                    data.list.map((item,i)=>{
                        return (
                            <> 
                                <div className="row">
                                    
                                    <div className="card" key={i}>
                                        <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src={item?.image}/>
                                        </div>
                                        <div className="card-content">
                                        <span className="card-title activator grey-text text-darken-4">{item?.name}<i className="material-icons right">more_vert</i></span>
                                        
                                        </div>
                                        <div className="card-reveal white-text">
                                        <span className="card-title text-darken-4">{item?.name}<i className="material-icons right">close</i></span>
                                            <div className="menu-item">
                                                <div><br/>{item?.description}<br/></div>
                                                <div className="menu-item-details">
                                                    <p>
                                                    {item?.kcal_s && item?.price_s && `Small - ${item?.kcal_s} Cal $${item?.price_s}`}
                                                    <br/> 
                                                    {item?.kcal_s && item?.price_s && 'Large - '}
                                                    {item?.kcal_l && item?.price_l && `${item?.kcal_l} Cal $${item?.price_l}`}
                                                    <br/><br/>
                                                    {item?.spicy && 'spicy'}
                                                    <br/>
                                                    {item?.vegan && 'vegan'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    })  
                    : <h4>Error</h4>}
                    </div>
                    <div className="col xl4 l3 m2 s1"></div>
                </div>
            </div>
        </>
    )
}