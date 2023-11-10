//import Card component
import useSWR from "swr"
import { Card } from "react-materialize";


export default function Section(){

    //const { data } = useSWR('http://localhost:3000/api/hello');
    const { data } = useSWR(menu ? `http://localhost:3000/api/${menu}` : null);

    return (
        <>

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