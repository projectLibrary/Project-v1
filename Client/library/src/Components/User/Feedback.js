import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useState, useEffect } from 'react';

import { feedbackCreate } from '../../Services/FeedbackService'
import {
  MDBCard,

  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';


function FeedBack() {
  const [feedback, setFeedback] = useState("");
  return (
    <>
      <div className="container">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Give your feedback</h5>

              </CardHeader>
              <CardBody>

                <MDBCard style={{ borderRadius: "15px", width: "560px", marginTop: "30px", marginLeft: "100px", boxShadow: '1px 2px 9px #9a9a9a' }}>
                  <MDBCardBody style={{ height: "470px" }}>
                    <MDBCardTitle> Send us your Feedback</MDBCardTitle> <br />
                    <label>Comments</label>
                    <MDBTextArea wrapperClass='mb-4' name='feedback' id='feedback' rows={50} value={feedback} onChange={(e) => {
                      setFeedback(e.target.value);
                    }} />
                  </MDBCardBody>
                  <MDBBtn style={{ width: "150px", marginLeft: "350px", marginBottom: "10px" }} onClick={()=>{
                    feedbackCreate({feedback: feedback}).then(res=>{
                    alert("Feedback submitted successfully");
                    });
                  }}>Submit</MDBBtn>
                </MDBCard>


              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FeedBack;
