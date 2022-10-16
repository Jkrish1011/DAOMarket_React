import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// CSS
import './styles/Bids.css';


const Bid = () => {
  
  const [proposals, setProposals] = useState(null);

  const getBids = async () => {

    // const response = await axios.get("http://localhost:5000/bid");
    axios.get("http://localhost:5000/bid")
        .then((response)=>{
            setProposals(response.data)
            // console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
  };

  useEffect(() => {
    getBids();
  }, []);

  const goToSkill = (id, name, symbol, base_url, metadata_type) => {
    try{

      console.log({id: id, name: name, symbol: symbol, base_url: base_url, metadata_type: metadata_type});
    }catch(error){
      console.log(error);
    }
  }
  
// <div key={i.toString()} className='bids'>{bidData.bid}</div>
  return (
    <>
    <h1 className='bidHeader'>Active Proposals!</h1>
            <br />
            {
              proposals ? 
              <Row xs={1} md={3} className="g-4">
              {
                  proposals.bids && proposals.bids.map((secondarySkill, i) => {
                    return (
                      <Col key={i}>
                        <Card>
                          <Card.Header as="h5">{secondarySkill.name}</Card.Header>
                          <Card.Body>
                            <Card.Title>{secondarySkill.symbol}</Card.Title>
                            <Card.Text>
                                Related Primary Skill : <Link to={{ pathname: '/PrimarySkill'}} state={{ id: secondarySkill.primarySkillID }}>[{secondarySkill.primarySkillName}]</Link>
                            </Card.Text>
                            <Card.Text>
                                {secondarySkill.id}
                            </Card.Text>
                            <Card.Text>
                                {secondarySkill.metadata_type}
                            </Card.Text>
                            <Card.Text>
                                {secondarySkill.base_url}
                            </Card.Text>

                            {/* <Button variant="primary" onClick={() => goToSkill(primarySkill.id, primarySkill.name, primarySkill.symbol, primarySkill.base_url, primarySkill.metadata_type)}>Go!</Button> */}
                            <Link to={{ pathname: '/skill'}} state={{ id: secondarySkill.id, name: secondarySkill.name, symbol: secondarySkill.symbol, base_url: secondarySkill.base_url, metadata_type : secondarySkill.metadata_type, primarySkillName: secondarySkill.primarySkillName, primarySkillID: secondarySkill.primarySkillID }}>
                              Go!
                            </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })
              }
            </Row>
            : <Spinner animation="grow" variant="light" />
            }
    </>
  )
}

export default Bid