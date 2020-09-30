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

class expense extends React.Component{
    render() {
        return (
          <>
            <div className="content">
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader>Today Expense</CardHeader>
                    <CardBody>
                        //TODO Today Expense table 
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
                          <Button className="btn-round" color="warning" type="submit">Add</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );
    }
}

export default expense;