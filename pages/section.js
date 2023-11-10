//import Card component
import useSWR from "swr"
import { Card, CardTitle, Icon, Col, Row } from "react-materialize";
import { useContext } from "react";
import { MenuContext } from "./_app";


export default function Section(){

    const { menu } = useContext(MenuContext);
 
    //const { data } = useSWR('http://localhost:3000/api/hello');
    const { data } = useSWR(menu ? `http://localhost:3000/api/${menu}` : null);

    return (
        <>
        <Col>
            {data ? 
            data.map(item=>{
                return (
                    <> 
                        <Row className="p5">
                            <Card
                                actions={[
                                    <a key="1" href="#">This is a link</a>
                                ]}
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={data?.image} />}
                                horizontal
                                revealIcon={<Icon>more_vert</Icon>}
                                >
                                {data?.description}
                            </Card>
                        </Row>
                    </>
                )
            })  
            : <h4>Error</h4>}
            </Col>
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