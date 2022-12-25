import React from 'react';
import Card from "../UI/Card/Card";
import CardTitle from "../UI/Card/CardTitle/CardTitle";
import CardBody from "../UI/Card/CardBody/CardBody";
import CardFooter from "../UI/Card/CardFooter/CardFooter";

const Widget = (props) => (
  <Card className="card mb20" style={{width: '285px'}}>
    <CardTitle className="card-title">{props.title}</CardTitle>
    <CardBody className="card-body">
      {props.children}
    </CardBody>
    {props.footer && <CardFooter/>}
  </Card>
);

export default Widget;
