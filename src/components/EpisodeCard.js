import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import CharacterList from "./CharacterList";

export default function EpisodeCard(props) {   
    console.log(props.episode)
    const {name,air_date, episode, characters} = props.episode;
    return (
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>Episode: {name}</CardTitle>
            <CardText>Air Date: {air_date}</CardText>
            <CardText>Episode: {episode}</CardText>
            <div className="button">
              <Button>Characters:{characters.length}</Button>
            </div>
          </Card>
        </Col>        
      </Row>
    );
};

  
 