//import Card component
import useSWR from "swr"
import { Card, CardTitle, Icon, Col, Row, Container } from "react-materialize";
import { useContext } from "react";
import { MenuContext } from "./_app";


export default function Section(){

    const { menu } = useContext(MenuContext);
 
    //const { data } = useSWR('http://localhost:3000/api/hello');
    const { data } = useSWR(menu ? `http://localhost:3000/api/${menu}` : null);

    /* ,
		kcal_s: 800,
		kcal_l: 1000,
		price_s: 9.99,
		price_l: 11.99,
		spicy: true,
		vegan: false, */

    return (
        <>
            <Container>
                <Row>
                    <Col l={3} m={2} s={1}/>
                    <Col l={6} m={8} s={10} className="center-align">
                        <br/><br/>
                        <h3>{data?.title}</h3>
                        <br/><br/>
                    {data ? 
                    data.list.map(item=>{
                        return (
                            <> 
                                <Row className="p1">
                                    <Card
                                        actions={[
                                            <a key="1" href="#">This is a link</a>
                                        ]}
                                        closeIcon={<Icon>close</Icon>}
                                        header={<CardTitle image={item?.image} reveal waves="light"/>}
                                        horizontal
                                        reveal={<p>{item?.description}</p>}
                                        revealIcon={<Icon>more_vert</Icon>}
                                        className="menu-item"
                                        >
                                        {item?.name}<br/><br/>
                                        {item?.kcal_s && item?.price_s && <p>Small - {item?.kcal_s} Cal ${item?.price_s}<br/></p>}
                                        {item?.kcal_l && item?.price_l && <p>{item?.kcal_s && item?.price_s && <span>Large - </span>}{item?.kcal_l} Cal ${item?.price_l}</p>}
                                        {item?.spicy && <p><br/>spicy</p>}
                                        {item?.vegan && <p><br/>vegan</p>}
                                    </Card>
                                </Row>
                            </>
                        )
                    })  
                    : <h4>Error</h4>}
                    </Col>
                    <Col l={3} m={2} s={1}/>
                </Row>
            </Container>
        </>
    )

}

/* {(favouritesList.length>0) && favouritesList.map(artID=>{
    return (<>
      <Col lg={3} key={`${artID}`}>
        <ArtworkCard objectID={`${artID}`}/>
      </Col>
    </>)
  })}
  {(favouritesList.length===0) && <h4>Nothing Here. Try adding some new artwork to the list.</h4>} */