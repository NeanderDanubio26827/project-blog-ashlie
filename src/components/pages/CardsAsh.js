import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import anime from "../img/anime.png";

function CardsAsh() {
  return (
    <>
    <div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="anime" />
        <Card.Body>
          <Card.Title>Na escola</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="anime" />
        <Card.Body>
          <Card.Title>Na Piscina</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={anime} />
        <Card.Body>
          <Card.Title>Em Família</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </div>
    
    </>
  );
}

export default CardsAsh;
