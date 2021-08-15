import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Transaction from './components/Transaction';
import Wallet from './components/Wallet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SetupWallet from './components/SetupWallet';
import AddTransaction from './components/AddTransaction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>React-Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Wallet
                </Nav.Link>
                <Nav.Link as={Link} to="/transactions">
                  Transactions
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="main-border">
          <Switch>
            <Route path="/transactions">
              <Transaction />
            </Route>
            <Route path="/setup">
              <SetupWallet />
            </Route>
            <Route path="/add">
              <AddTransaction />
            </Route>
            <Route path="/">
              <Wallet />
            </Route>
          </Switch>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
