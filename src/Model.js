import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

export const Model = ({ title, renderComponent, onClose, open }) => {
  return (
    <>
      <Dialog open={open} fullwidth onClose={onClose}>
        <DialogTitle
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h6">{title}</Typography>{" "}
          <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
        </DialogTitle>
        <DialogContent>{renderComponent}</DialogContent>
      </Dialog>
    </>
  );
};

export default Model;
