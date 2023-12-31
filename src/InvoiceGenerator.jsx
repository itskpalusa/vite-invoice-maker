import React, {useState} from "react";
import {
	Button,
	Input,
	Card,
	CardBody,
	CardTitle,
	Form,
	FormGroup,
	Label,
	Container,
} from "reactstrap";
import jsPDF from "jspdf";

const InvoiceGenerator = () => {
	const [invoiceData, setInvoiceData] = useState({
		clientName: "",
		invoiceNumber: "",
		items: [],
	});

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setInvoiceData({
			...invoiceData,
			[name]: value,
		});
	};

	const handleItemAdd = () => {
		setInvoiceData({
			...invoiceData,
			items: [...invoiceData.items, {description: "", quantity: 0, price: 0}],
		});
	};

	const handleItemChange = (index, e) => {
		const {name, value} = e.target;
		const updatedItems = [...invoiceData.items];
		updatedItems[index][name] = value;

		setInvoiceData({
			...invoiceData,
			items: updatedItems,
		});
	};

	const generateInvoice = () => {
		const pdf = new jsPDF();

		pdf.setFont("Arial", "normal");
		pdf.setFontSize(12);

		pdf.text(`Invoice for ${invoiceData.clientName}`, 20, 20);
		pdf.text(`Invoice Number: ${invoiceData.invoiceNumber}`, 20, 30);
		pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, 40);

		pdf.text("Items:", 20, 60);

		let y = 70;
		invoiceData.items.forEach((item, index) => {
			pdf.text(
				`Item ${index + 1}: ${item.description}, Quantity: ${
					item.quantity
				}, Price: $${Number(item.price).toFixed(2)}`,
				20,
				y,
			);
			y += 10;
		});

		const total = invoiceData.items.reduce(
			(acc, item) => acc + item.quantity * Number(item.price),
			0,
		);
		pdf.text(`Total: $${total.toFixed(2)}`, 20, y + 10);

		pdf.save("basic_invoice.pdf");
	};

	return (
		<Container className="d-flex justify-content-center align-items-center vh-100">
			<Card>
				<CardBody>
					<CardTitle tag="h5" className="text-center">
						Invoice Generator
					</CardTitle>
					<Form>
						<FormGroup>
							<Label for="clientName">Client Name:</Label>
							<Input
								type="text"
								name="clientName"
								id="clientName"
								value={invoiceData.clientName}
								onChange={handleInputChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="invoiceNumber">Invoice Number:</Label>
							<Input
								type="text"
								name="invoiceNumber"
								id="invoiceNumber"
								value={invoiceData.invoiceNumber}
								onChange={handleInputChange}
							/>
						</FormGroup>
						<h6 className="text-underline">Items:</h6>
						{invoiceData.items.map((item, index) => (
							<div key={index}>
								<FormGroup>
									<Label for={`description${index}`}>Description:</Label>
									<Input
										type="text"
										name="description"
										id={`description${index}`}
										value={item.description}
										onChange={(e) => handleItemChange(index, e)}
									/>
								</FormGroup>
								<FormGroup>
									<Label for={`quantity${index}`}>Quantity:</Label>
									<Input
										type="number"
										name="quantity"
										id={`quantity${index}`}
										value={item.quantity}
										onChange={(e) => handleItemChange(index, e)}
									/>
								</FormGroup>
								<FormGroup>
									<Label for={`price${index}`}>Price:</Label>
									<Input
										type="number"
										name="price"
										id={`price${index}`}
										value={item.price}
										onChange={(e) => handleItemChange(index, e)}
									/>
								</FormGroup>
							</div>
						))}
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button color="primary" onClick={handleItemAdd}>
								Add Item
							</Button>
						</div>
						<br />
						<br />
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Button color="success" onClick={generateInvoice}>
								Generate Invoice
							</Button>
						</div>
					</Form>
				</CardBody>
			</Card>
		</Container>
	);
};

export default InvoiceGenerator;
