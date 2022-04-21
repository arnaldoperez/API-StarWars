import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import List from "./List.jsx";

//create your first component
const Home = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<h1 className="text-center mt-5">Star Wars Data</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<List />
				</Col>
			</Row>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</Container>
	);
};

export default Home;
