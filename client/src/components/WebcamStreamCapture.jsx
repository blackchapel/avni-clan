import React from "react";
import Webcam from "react-webcam";
import {Button, Box, GlobalStyles} from "@mui/material";

const WebcamComponent = () => <Webcam />;

export const WebcamStreamCapture = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
  
    const handleStartCaptureClick = React.useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );
  
    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);
  
    const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "react-webcam-stream-capture.webm";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
    }, [recordedChunks]);
  
    return (<Box>
    <GlobalStyles
      styles={{
        ul: { margin: 0, padding: 0, listStyle: "none" },
        body: { margin: 0 },
      }}
    />
      <Box  sx={{margin:0, padding:0}}>
         <Box >
        {capturing ? (
          <Button onClick={handleStopCaptureClick} variant="contained"
          color="secondary"
          sx={{width: "20%", marginLeft: "40%", mt: 5, mb: 2}}>Stop Capturing</Button>
        ) : (
          <Button
          onClick={handleStartCaptureClick}
          variant="contained"
          color="secondary"
          sx={{width: "20%", marginLeft: "40%", mt: 5, mb: 2}}>
            Capture Camera
          </Button>
        )}
        </Box>
        {recordedChunks.length > 0 && (
          <Box>
          <Button onClick={handleDownload} variant="contained"
          color="secondary"
          sx={{width: "20%", marginLeft: "40%", mb: 3}}>Download my recorded video</Button>
          </Box>
        )}
        <Box sx={{padding: 5}}>
        <Webcam
        audio={true}
        ref={webcamRef}
        height={750}
        width={1500}
         />
        </Box>
       
      </Box>
     
      </Box>
    );
  };
  
  // ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));
  
  // https://www.npmjs.com/package/react-webcam