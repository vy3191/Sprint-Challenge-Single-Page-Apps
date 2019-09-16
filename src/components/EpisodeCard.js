import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function EpisodeCard(props) {   
    const {name, type, dimension, residents} = props.location;
    return (
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Location: {name}</CardTitle>
            <CardText>Planet: {type}</CardText>
            <CardText>{dimension}</CardText>
            <div className="button">
              <Button>Residents:{residents.length}</Button>
            </div>
          </Card>
        </Col>        
      </Row>
    );
};

  
 