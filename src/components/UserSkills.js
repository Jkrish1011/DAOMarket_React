import React , { useState , useEffect } from 'react';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// CSS
import './styles/UserSkills.css';

const UserSkills = () => {
  const [primarySkills, setPrimarySkills] = useState(null);
  const [secondarySkills, setSecondarySkills] = useState(null);

  const getPrimarySkillData = async (ownerAddress) => {
    try{

    }catch(error){
      console.log(error);
    }
  }

  const getSecondarySkillData = async (ownerAddress) => {
    try{

    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getPrimarySkillData();
    getSecondarySkillData();
  }, []);
  return (
    <>
      <div className='primarySkills'>
        <h3 style= {{ color: 'white'}}>Primary Skills</h3>
        {
              primarySkills ? 
              <Row xs={1} md={3} className="g-4">
              {
                  primarySkills.bids && primarySkills.bids.map((primarySkill, i) => {
                    return (
                      <Col key={i}>
                        <Card>
                          <Card.Header as="h5">{primarySkill.name}</Card.Header>
                          <Card.Body>
                            <Card.Title>{primarySkill.symbol}</Card.Title>
                            <Card.Text>
                                {primarySkill.id}
                            </Card.Text>
                            <Card.Text>
                                {primarySkill.metadata_type}
                            </Card.Text>
                            <Card.Text>
                                {primarySkill.base_url}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })
              }
            </Row>
            : <div style={{color: 'white'}}>Loading Primary Skills...</div>
            }
      </div>

      <div className='associatedAssets'>
        <h3 style= {{ color: 'white'}}>Associated Assets</h3>
        {
              secondarySkills ? 
              <Row xs={1} md={3} className="g-4">
              {
                  secondarySkills.bids && secondarySkills.bids.map((secondarySkill, i) => {
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
                            <Link to={{ pathname: '/startBid'}} state={{ id: secondarySkill.id, name: secondarySkill.name, symbol: secondarySkill.symbol, base_url: secondarySkill.base_url, metadata_type : secondarySkill.metadata_type, primarySkillName: secondarySkill.primarySkillName, primarySkillID: secondarySkill.primarySkillID }}>
                              Start a Bid!
                            </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })
              }
            </Row>
            : <div style={{color: 'white'}}>Loading Secondary Skills...</div>
            }
      </div>
    </>
  )
}

export default UserSkills