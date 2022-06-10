import StudentsTable from "./components/StudentsTable";
import {
  Button,
  Col,
  Row,
  Form,
  Container,
  Modal,
  Pagination,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  //States
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [Students, setStudents] = useState([]);
  const [limit, setlimit] = useState(5);
  //Functio ns
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    console.log(firstname, lastname, age, email);
    SubmitStudent();
    handleClose();
    setFirstname("");
    setlastname("");
    setage("");
    setemail("");
  };
  const SubmitStudent = async () => {
    const res = await Axios({
      method: "post",
      url: "http://localhost:9999/students",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ firstname, lastname, age, email }),
    });
  };
  const GetStudents = async () => {
    const res = await Axios({
      method: "get",
      url: "http://localhost:9999/students",
    });
    setStudents(res?.data.data);
  };

  useEffect(() => {
    GetStudents();
  }, []);

  return (
    <Container className="justify-content-center p-5">
      <Row className="py-5">
        <Col>
          <Form.Control type="email" placeholder="Search" />
        </Col>
        <Col>
          <Button className="px-4" variant="primary">
            Search
          </Button>
        </Col>
        <Col>
          <Form.Select onChange={(e) => setlimit(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Form.Select>
        </Col>
        <Col>
          <Button
            className="mx-1 px-4 "
            variant="secondary"
            onClick={handleShow}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <StudentsTable students={Students} />
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="justify-content-center">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>firstname</Form.Label>
                <Form.Control
                  value={firstname}
                  type="text"
                  placeholder="firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>lastname</Form.Label>
                <Form.Control
                  value={lastname}
                  type="text"
                  placeholder="lastname"
                  onChange={(e) => setlastname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Pagination>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
        </Pagination>
      </Row>
    </Container>
  );
}

export default App;
