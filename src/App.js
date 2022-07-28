import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React ,{ useState } from 'react';
function App() {
  const [register,setRegister]= useState({
    date: "",
    amount: "",
    paymode:"",
    remarks: "",

  })
  const [records,setRecords]=useState([])
  let handleInput=(e)=>{
    const name=e.target.name;
    const value= e.target.value;
    // console.log(name,value)
    setRegister({...register,[name]:value})
    // console.log("active")
  }
  let submitbutton=()=>{
    console.log("submit")
    const newRecord={...register,id:new Date().getTime().toString()}
    // console.log(records);
    setRecords([...records,newRecord])
    setRegister({
      date: "",
    amount: "",
    paymode:"",
    remarks: "",

    })
  }

  return (
    <>
    <div className="App">
      <h1>Task</h1>
    </div>
    <div className="Container">

        <h2>Receipt Details </h2>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            {/* <Form.Control type="date" placeholder="Enter date" /> */}
            <input type="text" size="30"  placeholder='Enter Date'onChange={handleInput} value={register.date} name="date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAmount">
            <Form.Label>Amount</Form.Label>
            {/* <Form.Control type="Amount" placeholder="Enter Amount (in INR)" /> */}
            <input type="text" size="50" placeholder='Enter Amount (in INR)'onChange={handleInput} value={register.amount} name="amount"/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicPaymentMode">
            <Form.Label>Payment Mode</Form.Label>
            <Form.Select Amount>
              <option>Cash</option>
            </Form.Select>
          </Form.Group> */}
          <label htmlFor="Cash">Payment Mode</label>
          <select className="dropdown" id="cash" size="50,75">
          <option value="cash">cash</option>
          <option value="cheque">cheque</option>
          </select>
          <Form.Group className="mb-3" controlId="formBasicRemarks">
            <Form.Label>Remarks</Form.Label>
            {/* <Form.Control type="Remarks" placeholder="Enter remark" /> */}
            <input type="text" size="50" placeholder='remarks' onChange={handleInput} value={register.remarks} name="remarks" />
          </Form.Group>
         <div className="button">
          <Button variant="outline-danger">CANCEL(ESC)</Button>{' '}
          <Button variant="success" onClick={submitbutton}>SUBMIT </Button>{' '}
          </div>
        </Form>
        <div>
            {records.map((curr)=>{
              const {id,date,amount,paymode,remarks}=curr
              return (
                <div key={id}>
                <p>{date}</p>
                <p>{amount}</p>
                <p>{paymode}</p>
                <p>{remarks}</p>
                </div>
              )
            })}
          </div>
      </div>
      </>
  );
}

export default App;
