import React, {Component} from "react";
import {
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	Form,
	FormGroup,
	Label,
	Table,
	Container,
} from "reactstrap";

const Invoice = () => {
	const outlinedContainer = {
		border: "2px solid black",
		marginTop: "20px",
		padding: "10px",
		borderRadius: "8px",
	};
	const cardStyles = {
		border: "2px solid black",
		margin: "20px",
		padding: "20px",
		borderRadius: "8px",
	};
	const headerStyles = {
		fontWeight: "bold",
	};

	const rightAligned = {
		textAlign: "right",
	};

	const leftAligned = {
		textAlign: "left",
	};

	return (
		<Container style={outlinedContainer}>
			<Row xs="2">
				<Col style={headerStyles}>Karthik Palusa</Col>
				<Col style={rightAligned}>INVOICE NUMBER</Col>
			</Row>

			<h1>Invoice</h1>
			<div style={cardStyles}>
				<h2>Invoice for CLIENT NAME</h2>
				<br />
				<Row xs="2">
					<Col className="">Billed To:</Col>
					<Col className="">From:</Col>
				</Row>
				<Row xs="2">
					<Col className="">CLIENT NAME</Col>
					<br />
					<Col className="">Karthik Palusa</Col>
				</Row>
				<br />
				<div>
					<Table bordered striped>
						<thead>
							<tr>
								<th>Item</th>
								<th style={rightAligned}>Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Mark</td>
								<td style={rightAligned}>Otto</td>
							</tr>
							<tr>
								<td>Jacob</td>
								<td style={rightAligned}>Thornton</td>
							</tr>
							<tr>
								<td>Larry</td>
								<td style={rightAligned}>the Bird</td>
							</tr>
						</tbody>
					</Table>
					<hr />
					<Table>
						<tbody>
							<tr className="table-dark">
								<th style={rightAligned}>Total: &nbsp; $$$</th>
							</tr>
						</tbody>
					</Table>
				</div>
				<br />
				<Row xs="1">
					<Col className="">Notes:</Col>
					<br />
					<Col className="">Payment Method:</Col>
				</Row>
			</div>
		</Container>
	);
};

export default Invoice;
