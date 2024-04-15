import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Yosra_Gallah.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { PDFObject } from "react-pdfobject";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [origin, setorigin] = useState(1200);


  useEffect(() => {
    setWidth(window.innerWidth);
    setorigin(window.location.origin);
  }, []);

  useEffect(() => {
    console.log('https://drive.google.com/viewerng/viewer?url='+window.location.origin);
  }, [origin]);

  return (
    <div>
      <Container
        fluid
        className="resume-section"
        style={{
          height: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Particle />
        <h1 className="resume-title">{pdf}</h1>
        <Row className="resume">
          {/* <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
          <iframe style={{position:'relative',zIndex:99,width:'100vw',height:'100vh'}} src={'https://drive.google.com/viewerng/viewer?url='+origin+'/Yosra_Gallah.pdf?pid=explorer&efh=false&a=v&chrome=false&embedded=true'} />
        </Row>
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
