import React, { Fragment } from "react";
import styled from "styled-components";

import propsToStyle from "../utils/propsToStyle";

let paddingVertical = "12px";

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  background: transparent;
  background-image: none;
  appearance: none;
  border-radius: 0px;
  vertical-align: top;
  box-shadow: none;
  border: none;
  outline: none;
  margin: 0;

  ${props => propsToStyle(props)};
`;

export const Label = styled.label`
  font-size: 0.8rem;
  text-tranform: uppercase;
  color: ${props => props.theme.colors.primary};

  ${props => propsToStyle(props)};
`;

export const Fieldset = styled.fieldset`
  ${props => propsToStyle(props)};
`;

export const Form = styled.form`
  width: 100%;
  ${props => propsToStyle(props)};
`;

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${props => propsToStyle(props)};
  overflow: hidden;
  justify-content: center;
  background: rgb(245, 245, 245);
  padding: 2px;
  ${props => props.radius && `border-radius: ${props.radius}px`};

  label {
    position: ${props => (props.floating ? "absolute" : "relative")};
    left: ${props => (props.floating ? "0px" : "auto")};
    top: ${props => (props.floating ? "0px" : "auto")};
    font-size: ${props => (props.floating ? "1rem" : "")};
    z-index: 2;
    padding: 10px ${paddingVertical} 0 ${paddingVertical};
    transition: all 300ms ease-in-out;
    ${props =>
      props.error && `color: ${props.theme.colors.error || "#f44336"}`};
    ${props =>
      props.radius &&
      `border-radius: ${props.radius - 2}px ${props.radius - 2}px 0 0`};
  }

  ${props =>
    props.floating
      ? `

      input,
  select,
  textarea {
    &::placeholder {
      color: transparent;
    }
  }
      label {
        pointer-events: none;
        width: 100%;
        background: transparent;
        padding: 17px ${paddingVertical}
          5px ${paddingVertical};
          color: rgba(0, 0, 0, 0.5);
      }
      &:focus-within {
        label {
          transform: translate3d(0, -10px, 0);
          font-size: 0.8rem;
        }
      }

      input:not(:placeholder-shown) + label {
          transform: translate3d(0, -10px, 0);
          font-size: 0.8rem;
      }

      select:not([value=""]):valid + label {
        transform: translate3d(0, -10px, 0);
        font-size: 0.8rem;
}`
      : ""} input,
  select,
  textarea {
    position: relative;
    z-index: 1;
    padding: ${props => (props.floating ? "24px" : "6px")} ${paddingVertical}
      10px ${paddingVertical};
    color: ${props => props.theme.colors.dark};
    ${props =>
      props.radius &&
      `border-radius: 0 0 ${props.radius - 2}px ${props.radius - 2}px`};
  }

  input:disabled,
  textarea:disabled,
  option:disabled {
    color: rgba(0, 0, 0, 0.5);
  }

  input[type="checkbox"] {
    display: none;
    + label {
      padding: 13px ${paddingVertical};
      font-size: 1.2rem;
      position: relative;
      color: ${props => props.theme.colors.dark};

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -15px;
        right: ${paddingVertical};
        background: #ccc;
        width: 50px;
        height: 30px;
        border-radius: 25px;
        transition: all 300ms ease-in-out;
      }

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -15px;
        right: 32px;
        background: #fff;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        transition: all 300ms ease-in-out;
        border: 3px solid #ccc;
      }
    }

    &:checked {
      + label {
        &:before {
          content: "";
          background: ${props => props.theme.colors.primary};
        }

        &:after {
          content: "";
          transform: translate3d(20px, 0, 0);
          border: 3px solid ${props => props.theme.colors.primary};
        }
      }
    }
  }

  &:after {
    ${props => props.errorMessage && `content: "${props.errorMessage}"`};
    position: absolute;
    right: ${paddingVertical};
    top: 0;
    font-size: 0.8rem;
    padding: 10px 0 0 0;
    z-index: 3;
    ${props =>
      props.error && `color: ${props.theme.colors.error || "#f44336"}`};
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    ${props => props.radius && `border-radius: ${props.radius}px`};
    ${props =>
      props.error && `background: ${props.theme.colors.error || "#f44336"}`};
    transition: all 300ms ease-in-out;
  }

  &:focus-within {
    &:before {
      content: "";
      width: 100%;
      left: 0%;
    }
  }
`;
