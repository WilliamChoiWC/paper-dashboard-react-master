import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col,} from "reactstrap";

class input extends React.Component{
    render() {
        return (
          <>
            <div className="content">
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader>Income</CardHeader>
                    <CardBody>
                          <Input id="income" type="text"/>
                          <Button className="btn-round" color="primary" type="submit">Add</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader>Expense</CardHeader>
                    <CardBody>
                          <Input id="expense" type="text"/>
                          <Button className="btn-round" color="primary" type="submit">Add</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );
    }
}

export default input;