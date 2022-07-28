import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
      <h1>Task</h1>
      <h2>Receipt Details </h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="email" placeholder="Enter date"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="Amount" placeholder="Enter Amount (in INR)" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPaymentMode">
      <Form.Label>Payment Mode</Form.Label>
        <Form.Select Amount>
          <option>Cash</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRemarks">
      <Form.Label>Remarks</Form.Label>
        <Form.Control type="Remarks" placeholder="Enter remark"/>
      </Form.Group>
    
      <Button variant="outline-danger">CANCEL(ESC)</Button>{' '}
      <Button variant="success">SUBMIT </Button>{' '}
    </Form>
    </div>
  );
}

export default App;
