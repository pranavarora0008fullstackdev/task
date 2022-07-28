import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <>
    <div className="App">
      <h1>Task</h1>
    </div>
    <div className="Container">

        <h2>Receipt Details </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            {/* <Form.Control type="date" placeholder="Enter date" /> */}
            <input type="text" size="30" placeholder='Enter Date' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label>Amount</Form.Label>
            {/* <Form.Control type="Amount" placeholder="Enter Amount (in INR)" /> */}
            <input type="text" size="50" placeholder='Enter Amount (in INR)' />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicPaymentMode">
            <Form.Label>Payment Mode</Form.Label>
            <Form.Select Amount>
              <option>Cash</option>
            </Form.Select>
          </Form.Group> */}
          <label htmlFor="Cash">Payment Mode</label>
          <select class="dropdown" id="cash" size="50,75">
          <option value="cash" >cash</option>
          <option value="cheque">cheque</option>
          </select>
          <Form.Group className="mb-3" controlId="formBasicRemarks">
            <Form.Label>Remarks</Form.Label>
            {/* <Form.Control type="Remarks" placeholder="Enter remark" /> */}
            <input type="text" size="50" placeholder='remarks' />
          </Form.Group>
         <div class="button">
          <Button variant="outline-danger">CANCEL(ESC)</Button>{' '}
          <Button variant="success">SUBMIT </Button>{' '}
          </div>
        </Form>
      </div>
      </>
  );
}

export default App;
