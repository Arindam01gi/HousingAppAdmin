import React from "react";
import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { StoreState } from "../../model/reduxModels";
import { LoadingState } from "../../model/loadingModels";

const Loading = ({ loading }: LoadingProps) => {
  console.log(loading);

  return (
    <>
      {!!loading && loading.count > 0 ? (
        <div
          style={{
            position: "fixed",
            display: "block",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "calc(50% - 100px)",
              left: "calc(50% - 200px)",
              height: "200px",
              width: "400px",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "40%" }}>
              <ReactLoading
                type={"spin"}
                color={"#fff"}
                height={"35%"}
                width={"35%"}
              />
            </div>
            <div style={{ color: "#fff" }}>{loading?.message}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    loading: state.loading,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);

interface LoadingProps {
  loading: LoadingState;
}
