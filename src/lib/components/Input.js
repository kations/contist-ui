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

  ${p => propsToStyle(p, p.theme)};
`;

export const Label = styled.label`
  font-size: 0.8rem;
  text-tranform: uppercase;
  color: ${p => p.theme.colors.primary};

  ${p => propsToStyle(p, p.theme)};
`;

export const Fieldset = styled.fieldset`
  ${props => propsToStyle(props)};
`;

export const Form = styled.form`
  width: 100%;
  ${p => propsToStyle(p, p.theme)};
`;

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  background: rgb(245, 245, 245);
  padding: 2px;
  ${p => p.radius && `border-radius: ${p.radius}px`};
  ${p => propsToStyle(p, p.theme)};

  label {
    position: ${p => (p.floating ? "absolute" : "relative")};
    left: ${p => (p.floating ? "0px" : "auto")};
    top: ${p => (p.floating ? "0px" : "auto")};
    font-size: ${p => (p.floating ? "1rem" : "")};
    z-index: 2;
    padding: 10px ${paddingVertical} 0 ${paddingVertical};
    transition: all 300ms ease-in-out;
    ${p => p.error && `color: ${p.theme.colors.error || "#f44336"}`};
    ${p =>
      p.radius && `border-radius: ${p.radius - 2}px ${p.radius - 2}px 0 0`};
  }

  ${p =>
    p.floating
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
    padding: ${p => (p.floating ? "24px" : "6px")} ${paddingVertical} 10px
      ${paddingVertical};
    color: ${p => p.theme.colors.dark};
    ${p =>
      p.radius && `border-radius: 0 0 ${p.radius - 2}px ${p.radius - 2}px`};
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
      color: ${p => p.theme.colors.dark};

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
          background: ${p => p.theme.colors.primary};
        }

        &:after {
          content: "";
          transform: translate3d(20px, 0, 0);
          border: 3px solid ${p => p.theme.colors.primary};
        }
      }
    }
  }

  &:after {
    ${p => p.errorMessage && `content: "${p.errorMessage}"`};
    position: absolute;
    right: ${paddingVertical};
    top: 0;
    font-size: 0.8rem;
    padding: 10px 0 0 0;
    z-index: 3;
    ${p => p.error && `color: ${p.theme.colors.error || "#f44336"}`};
  }

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: ${p => p.theme.colors.primary};
    ${p => p.radius && `border-radius: ${p.radius}px`};
    ${p => p.error && `background: ${p.theme.colors.error || "#f44336"}`};
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
