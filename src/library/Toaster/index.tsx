import { closeSnackbar, useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { connect } from "react-redux";

// import { Button } from "@mui/material";
import { StoreState } from "../../model/reduxModels";
import { ErrorModel } from "../../model/errorModels";

const Toaster = ({ error }: ToasterProps) => {
  console.log(error);

  const { enqueueSnackbar } = useSnackbar();

  const ShowMessage = async (
    data: string,
    type: "default" | "error" | "success" | "warning" | "info"
  ) => {
    await enqueueSnackbar(data, {
      variant: type,
      autoHideDuration: 5000,
      action,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    });
  };
  const action = (snackbarId: any) => (
    <>
      {/* <button
        onClick={() => {
          closeSnackbar(snackbarId);
        }}
        // variant="text"
        color={"inherit"}
      >
        close
      </button> */}
    </>
  );
  useEffect(() => {
    if (!!error) {
      if (!!error.status && error.status.length > 0) {
        // error.Info.forEach(async (element) => {
        //   await ShowMessage(element.MESSAGE, "error");
        // });
        ShowMessage(error.status, "error");
      }
    }
  }, [error]);


  
  return <div></div>;
};

const mapStateToProps = (state: StoreState) => {
  return {
    error: state.error.error,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);

interface ToasterProps {
  error?: ErrorModel;
}
