import posed, { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";
const VisibilitySensor = require("react-visibility-sensor");

export { posed, PoseGroup, SplitText, VisibilitySensor };

export { default as Wrapper } from "./components/Wrapper";
export { default as Section } from "./components/Section";
export { default as Toolbar } from "./components/Toolbar";
export { default as Reset } from "./components/Reset";
export { default as FormState } from "./components/FormState";
export { Input, Label, Fieldset, FormGroup } from "./components/Input";
export { default as Progress } from "./components/Progress";

//UI
export { default as Button } from "./components/ui/Button";
export { default as Avatar } from "./components/ui/Avatar";
export { default as Headline } from "./components/ui/Headline";
export { default as Overlay } from "./components/ui/Overlay";

//theme
export { default as DefaultTheme } from "./components/DefaultTheme";

//helper
export { default as State } from "./components/helper/State";

//primitives
export { default as Flex } from "./components/primitives/Flex";
export { default as Box } from "./components/primitives/Box";
export { default as Grid } from "./components/primitives/Grid";
export { default as InlineFlex } from "./components/primitives/InlineFlex";
export { default as InlineBlock } from "./components/primitives/InlineBlock";

export { default as Absolute } from "./components/primitives/Absolute";
export { default as Fixed } from "./components/primitives/Fixed";
export { default as Sticky } from "./components/primitives/Sticky";

//effects
export { default as Tilt } from "./components/effects/Tilt";
export { default as Ripple } from "./components/effects/Ripple";
export { default as Animate } from "./components/effects/Animate";
