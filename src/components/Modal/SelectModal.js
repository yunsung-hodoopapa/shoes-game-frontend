import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ButtonInputBox = styled.div``;
const InputTitle = styled.div``;
const InputText = styled.input``;

export default function SelectModal() {
  return (
    <>
    <ButtonInputBox>
    <inputTitle> 스니커즈 사이즈 (선택) </inputTitle>
    <Modal
      handleModal={handleModal}
      isModalShown={isModalShown}
    ></Modal>
    <InputText
      type='text'
      placeholder='선택하세요'
      onClick={handleModal}
    />
  </ButtonInputBox>
    </>
    
  );
}
