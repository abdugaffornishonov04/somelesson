import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DebtsPage from "./pages/DebtsPage";
import TransactionPage from "./pages/TransactionPage";
import Layout from "./components/layout";
import { useState } from "react";

function App() {
  const [ show, setShow ] = useState( false );
  const [ validated, setValidated ] = useState( false );
  const [ debts ] = useState(
    [
      {
        id: 1,
        name: 'Mr Someone',
        amount: 1000,
        deadline: '2020-01-01',
        phone: "991111111",
        description: "I will be working to pay"
      },
      {
        id: 2,
        name: 'Mr Somebody',
        amount: 2000,
        deadline: '2020-03-03',
        phone: "992222222",
        description: "I literally be paying it next month"
      },
      {
        id: 3,
        name: 'Mr Somedude',
        amount: 500,
        deadline: '2020-04-04',
        phone: "993333333",
        description: "My bad, I swear I will pay it as soon as possible"
      },
    ]
  )
  const transactions = [
    {
      id: 1,
      name: 'Telefon',
      price: 1000,
      date: '2020-01-01',
      quantity: "1",
      description: "Telefon sotib oldim"
    },
    {
      id: 2,
      name: 'Kiyim',
      price: 2000,
      date: '2020-03-03',
      quantity: "4",
      description: "Kiyim sotib oldim"
    },
    {
      id: 3,
      name: 'Restoran',
      price: 400,
      date: '2020-04-04',
      quantity: "3",
      description: "3 marta restoran ga bordim"
    },
  ]


  const [ debt, setDebt ] = useState( {
    name: '',
    amount: '',
    deadline: '',
    phone: '',
    description: '',
  } )

  const handleTransaction = ( e ) => {
    setTransactionData( { ...transactionData, [ e.target.id ]: e.target.value } )
    console.log( e.target.value );
  }
  const [ transactionData, setTransactionData ] = useState( {
    name: '',
    quantity: '',
    date: '',
    price: '',
    description: '',
  } )

  const handleDebt = ( e ) => {
    setDebt( { ...debt, [ e.target.id ]: e.target.value } )
    console.log( e.target.value );
  }



  const handleSubmit = ( event ) => {
    event.preventDefault()

    const form = event.target;

    console.log( form );

    if ( form.checkValidity() ) {
      handleClose()
    } else {
      setValidated( true );
    }
    // if ( form.checkValidity() === false ) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

  };

  const handleClose = () => setShow( false );
  const handleShow = () => setShow( true );
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/transaction" element={<TransactionPage transactions={transactions} />} show={show} handleShow={handleShow} handleClose={handleClose} handleSubmit={handleSubmit} validated={validated} setValidated={setValidated} handleTransaction={handleTransaction} transactionData={transactionData} />
          <Route path="/debts" element={<DebtsPage handleDebt={handleDebt} debt={debt} debts={debts} show={show} handleShow={handleShow} handleClose={handleClose} handleSubmit={handleSubmit} validated={validated} setValidated={setValidated} />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
