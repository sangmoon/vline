import React from "react";
import AppearanceForm from "./Appearance";
import NoseForm from "./Nose";
import PalateForm from "./Palate";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReviewForm from "./Review";


function Contact() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      If you want to request, please mail me via cholsoo22001@gmail.com !
    </Typography>
  );
}

function Summary() {
  return <>Hello world</>

}

const copyToClipboard = () => {
  const text = document.getElementById("text")!.innerHTML.replace(/<br[^>]*>/g, "\n");
  navigator.clipboard.writeText(text).then(function() {
    const length = text.length
    if (length <=512) {
      alert("Copying to clipboard was successful!\nlength is " + text.length + "/512.")
    } else {
      alert("Copying succeed but your text(" +length + ") are longer than vivino limit 512, how about reduce?")
    }
    console.log("Copying to clipboard was successful!\n length is " + text.length)
  }, function(err) {
    console.error("Could not copy text: ", err);
  });
}

const steps = ["Appearance", "Nose", "Palate", "review"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AppearanceForm />;
    case 1:
      return <NoseForm />;
    case 2:
      return <PalateForm />;
    case 3:
      return <ReviewForm />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Vlind
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Review your blind.
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography >
                  <Summary></Summary>
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={activeStep === steps.length - 1
                      ? copyToClipboard :handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? "Copy the review"
                      : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Contact />
      </Container>
    </ThemeProvider>
  );
}
