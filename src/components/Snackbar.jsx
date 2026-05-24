import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
function Snack({ HandleClose, Open }) {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={Open}
        slots={{ transition: Slide }}
        onClose={HandleClose}
        autoHideDuration={5000}
      >
        <Alert
          onClose={HandleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
        the prodect is added 
        </Alert>
      </Snackbar>
    </>
  );
}

export default Snack;
