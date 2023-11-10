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
                    <Col l={3}/>
                    <Col l={6} className="center-align">
                        <br/><br/>
                        <h2>Menu Page</h2>
                        <br/><br/>
                        <Card
                            actions={[
                                <a key="1" href="#">This is a Link</a>
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
                            revealIcon={<Icon>more_vert</Icon>}
                            >
                            Here is the standard card with an image thumbnail.
                        </Card>
                    </Col>
                    <Col l={3}/>
                </Row>
            </Container>
        </>
    )
}

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