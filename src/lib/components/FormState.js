import React, { Fragment } from 'react';
import styled from 'styled-components';

import { propsToStyle, styleProps } from '../utils';
//
// const Form = styled.form`
//   width: 85%;
//   max-width: ${props => props.theme.globals.wrapperWidth || '1000px'};
//   margin: 0 auto;
//   ${props => propsToStyle(props)};
// `;
//
// class AutoForm extends React.Component {
//   constructor(props) {
//     super(props);
//
//     const { initialState } = this.props;
//
//     this.state = {
//       formState: initialState || {},
//     };
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.initialState === this.props.initialState) {
//       return;
//     }
//
//     this.setState({
//       formState: nextProps.initialState,
//     });
//   }
//
//   setSubmitting = bool => {
//     this.setState({ submit: bool });
//   };
//
//   handleChange = event => {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;
//
//     this.setState({
//       [name]: value,
//     });
//   };
//
//   render() {
//     const {
//       initialState,
//       schema,
//       validate,
//       onSubmit,
//       onChange,
//       disabled,
//       children,
//     } = this.props;
//
//     var schema = {
//       key: {
//         type: 'text',
//         label: 'Label',
//         placeholder: 'text',
//         component: 'MultiSelect',
//         required: false,
//         disabled: false,
//       },
//     };
//
//     return (
//       <Form>
//         {schema &&
//           schema.map(input => {
//             return <div />;
//           })}
//         {children}
//         <button type="submit" disabled={disabled}>
//           Submit
//         </button>
//       </Form>
//     );
//   }
// }
//
// const flip = () => ({
//   flipResults: Math.random(),
// });

class FormState extends React.Component {
  state = {};
  constructor(props) {
    super(props);

    const { initialState } = this.props;

    this.state = { form: initialState || {}, submitting: false };
  }

  onSubmit = () => {
    this.setState({ submitting: true });
    const errors = this.props.validate(this.state);
    console.log('errors', errors);
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state, this.isSubmmitted, this.resetForm);
    }
  };

  onChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  onBlur = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  isSubmmitted = () => {
    this.setState({ submitting: false });
  };

  resetForm = () => {
    this.setState({ form: this.props.initialState });
  };

  render() {
    return this.props.children({
      onSubmit: this.onSubmit,
      onChange: this.onChange,
      onBlur: this.onBlur,
      formState: this.state.form,
      submitting: this.state.submitting,
    });
  }
}

export default FormState;
