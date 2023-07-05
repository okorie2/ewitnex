/** @jsxImportSource @emotion/react */

import React from "react";
import Modal from "react-modal";
import { Button } from "styles/components/button";

interface IDeleteModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  overlay: {
    backgroundColor: "#00000029",
    zIndex: "3",
    width: "100%",
    height: "100vh",
  },
  content: {
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    border: "none",
    backgroundColor: "#00000029",
    fontFamily: "'Nunito', sans-serif",
  },
};

const DeleteModal = (props: IDeleteModal) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={(e) => {
        e.stopPropagation();
        props.onRequestClose;
      }}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <div
        css={{
          zIndex: "3",
          width: "100%",
          height: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={props.onRequestClose}
      >
        <div
          css={{
            width: "467px",
            height: "295px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            padding: "2rem",
            boxShadow: "0px 1px 10px #00000029",
            borderRadius: "20px",
          }}
        >
          <p
            css={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            This Action Cannot Be Reversed
          </p>
          <div>
            <p>Are you sure you want to delete this</p>
            <p>account?</p>
          </div>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5%",
              marginTop: "3rem",
            }}
          >
            <Button height="52px" width="100%" onClick={props.onRequestClose}>
              <p css={{ fontSize: "16px" }}>Cancel</p>
            </Button>
            <Button
              height="52px"
              width="100%"
              background="#E4E4E4"
              color="#7C35AB"
            >
              <p css={{ fontSize: "16px" }}>Delete my Account</p>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
