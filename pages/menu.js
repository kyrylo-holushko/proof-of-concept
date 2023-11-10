import { Container, Row, Col, Card, CardTitle, Icon } from "react-materialize"
import useSWR from "swr"
import { useState } from "react";

export default function Menu() {

    const [show, setShow] = useState(false);

    const { data } = useSWR('http://localhost:3000/api/hello');

    //https://res.cloudinary.com/dmtjposo5/gab/appetizer/jz9bz8o4dreqxqqhhnr7
    //https://res.cloudinary.com/dmtjposo5/gab/main/xiqdzedfefrvcmakfp6u
    //https://res.cloudinary.com/dmtjposo5/gab/dessert/jlusmortt9bltxktrzxw
    //https://res.cloudinary.com/dmtjposo5/gab/beverage/kcppriy7nikyshpzxjmr

    // TEST https://soranews24.com/wp-content/uploads/sites/3/2021/10/pad-thai-oatmeal1.jpg?resize=640,480
    
    return (
        <>
            <Container>
                <Row>
                    <Col l={3} m={2} s={1}/>
                    <Col l={6} m={8} s={10} className="center-align">
                        <br/><br/>
                        <h2>Menu Page</h2>
                        <br/><br/>
                        <div className="menu-canvas">
                            <div className="menu-section center-align appetizer-bg-img">
                                <h3 className="menu-title">Appetizers</h3>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="menu-canvas">
                            <div className="menu-section center-align main-bg-img">
                                <h3 className="menu-title">Mains</h3>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="menu-canvas">
                            <div className="menu-section center-align dessert-bg-img">
                                <h3 className="menu-title">Desserts</h3>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="menu-canvas">
                            <div className="menu-section center-align beverage-bg-img">
                                <h3 className="menu-title">Beverages</h3>
                            </div>
                        </div>
                        <br/><br/>
                    </Col>
                    <Col l={3} m={2} s={1}/>
                </Row>
            </Container>
        </>
    )
}
//image="https://materializecss.com/images/sample-1.jpg"
{/* <br/><br/>
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
                <br/><br/> */}