import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function LocationCard({ name, type, dimension, residents }) {   
    return (
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Location: {name}</CardTitle>
            <CardText>{type}</CardText>
            <CardText>{dimension}</CardText>
            <Button>Residents:{residents}</Button>
          </Card>
        </Col>        
      </Row>
    );
};

  
 