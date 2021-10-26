import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { CenteredDiv } from '../styles/ViewStyles';
import ResumePDF from '../assets/Resume.pdf'

const ResumeComponent = () =>{
    const [setNumPages] = useState(null);
    const [pageNumber] = useState(1);
    const pageError = "Failed to load PDF"
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return(
        <CenteredDiv className="text-white">
            <Document
             file={ResumePDF} 
             onDocumentLoadSuccess={onDocumentLoadSuccess}>
                <Page loading="Please wait!" error={pageError} pageNumber={pageNumber}/>
            </Document>

            <div className="pl-3">
                <div>
                    <h3 className="position-absolute">Download my resume <a href={ResumePDF} download="Resume.pdf">here!</a></h3>
                </div>
            </div>
        </CenteredDiv>
    )
}

export default ResumeComponent;

