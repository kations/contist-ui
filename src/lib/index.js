import posed, { PoseGroup } from 'react-pose';
import SplitText from 'react-pose-text';
const VisibilitySensor = require('react-visibility-sensor');

export { posed, PoseGroup, SplitText, VisibilitySensor };

export { default as Wrapper } from './components/Wrapper';
export { default as Section } from './components/Section';
export { default as Toolbar } from './components/Toolbar';
export { default as Reset } from './components/Reset';
export { default as FormState } from './components/FormState';
export { default as Headline } from './components/Headline';
export { Input, Label, Fieldset, FormGroup } from './components/Input';
export { default as Progress } from './components/Progress';
export { default as Button } from './components/Button';

//primitives
export { default as Flex } from './components/primitives/Flex';
export { default as Absolute } from './components/primitives/Absolute';
export { default as Fixed } from './components/primitives/Fixed';
export { default as Sticky } from './components/primitives/Sticky';
export { default as Box } from './components/primitives/Box';

//effects
export { default as Tilt } from './components/effects/Tilt';
export { default as Ripple } from './components/effects/Ripple';
export { default as Animate } from './components/effects/Animate';
