import React, { useState, useEffect } from "react";
import { Container, Card, CardColumns } from "react-bootstrap";
import "./MainRequest.css";
function MainRequest() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://api.jikan.moe/v3/top/anime/3")
      .then((res) => res.json())
      .then((result) => setItems(result.top));
  }, []);
  //useeffect means code which contains data that can be changed if the value/props change
  //use state is the data that changes

  console.log(items);

  return (
    <div className="MainRequest" style={{ marginTop: "7%" }}>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <Card
              style={{
                width: "20em",
                height: "30em",
                backgroundColor: "grey",
                marginBottom: "3%",
                marginLeft: "3%",
              }}
              key={item.mal_id}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    fontWeight: "bolder",
                    fontFamily: "fantasy",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Card.Title>
                <Card.Img
                  style={{ width: "100%", height: "80%" }}
                  variant="top"
                  src={item.image_url}
                  key={item.mal_id}
                />
                <Card.Text style={{ fontStyle: "italic" }}>
                  Score: {item.score}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainRequest;
