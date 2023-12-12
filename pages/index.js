import { Container } from 'react-materialize'
//Proof of Concept V2 (Without React-Materialize dependancy)
export default function Home() {
    return (
		<>
			<div className='center-align'>
				<br/>
				<h3>Golden Abalone Bistro</h3>
				<br/>
				<hr/>
				<br/><br/><br/>
				<Container>
					<h6>A small family-owned Chinese bistro that have been serving the community for 35 years.  We value our customers, and that is why our bistro have been committed to serving only the freshest ingredients at the lowest price possible.
					</h6>
				</Container>
				<br/><br/><br/>
			</div>
		</>
  	)
}