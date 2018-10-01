import React, { Fragment } from 'react';
import {
  Wrapper,
  Section,
  Flex,
  Toolbar,
  Reset,
  Input,
  Label,
  FormGroup,
  FormState,
  Headline,
  Progress,
  Button,
  Tilt,
  Ripple,
  Fixed,
  Animate,
} from '../lib';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

console.log('Flex', Flex);

const charPoses = {
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 15,
    transition: { duration: 350 },
  },
  exit: { opacity: 0, scale: 0, y: 50 },
};

const GlobalStyle = createGlobalStyle`
  ${Reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 120%;
    background: rgb(245,245,245);
    background: #fff;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    @media (max-width: 768px) {
      font-size: 90%;
    }
  }

  * {
    box-sizing: border-box;
    font-weight: 300;
  }

`;

const App = () => (
  <ThemeProvider
    theme={{
      breakpoints: {
        mb: 0,
        tb: 768,
        dt: 1024,
      },
      colors: {
        primary: '#F69A37',
        secondary: '#6F481E',
        success: '',
        danger: '',
        warning: '',
        info: '',
        light: '#fff',
        dark: '#231c20',
        grey: 'rgb(240,240,240)',
      },
      globals: {
        wrapperWidth: '1200px',
        modalBackdropColor: 'rgba(0,0,0,0.25)',
        buttonRadius: '2rem',
      },
    }}
  >
    <Fragment>
      <GlobalStyle />
      <Toolbar position="sticky" top="0px" />
      <Section>
        <Wrapper maxWidth={'700px'}>
          <Flex justifyContent="center" marginBottom="50px">
            <Progress size={200} />
            <Progress size={130} progress={60} />
            <Progress size={80} progress={30} />
            <Progress size={30} />
            <Ripple color="#000" />
          </Flex>
          <Animate>
            <Button>Ripple</Button>
          </Animate>
          <Tilt
            options={{ max: 25, scale: 1.05 }}
            backgroundColor="rgb(240,240,240)"
            padding="20px 20px 5px 20px"
          >
            <Flex
              justifyContent="center"
              marginBottom="50px"
              className="Tilt-inner"
            >
              <Headline as="h1" charPoses={charPoses}>
                Build amazing e commerce products
              </Headline>
              <Ripple color="#000" />
            </Flex>
          </Tilt>

          <FormState
            initialState={{ sdfsf: 'sgdffgdgdf' }}
            validate={values => {
              console.log(values);
              let errors = {};

              return errors;
            }}
            onSubmit={(values, isSubmmitted, resetForm) => {
              console.log(values);
              setTimeout(() => {
                //alert(JSON.stringify(values, null, 2));
                isSubmmitted();
              }, 4000);
            }}
          >
            {({
              formState,
              errors,
              onSubmit,
              onChange,
              onBlur,
              submitting,
            }) => (
              <Fragment>
                {submitting && 'loading'}
                <FormGroup marginBottom="10px" error errorMessage="Required">
                  <Label htmlFor="sdfsf">test</Label>
                  <Input
                    type="text"
                    id="sdfsf"
                    name="sdfsf"
                    placeholder="das ist ein test"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormGroup>
                <FormGroup marginBottom="10px">
                  <Label htmlFor="sfsdfs">test</Label>
                  <Input
                    type="text"
                    id="sfsdfs"
                    name="sfsdfs"
                    placeholder="das ist ein test"
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </FormGroup>
                <FormGroup marginBottom="10px" padding="0 0 2px 0" floating>
                  <Input
                    type="text"
                    id="dgdfgd"
                    placeholder="das ist ein test"
                  />
                  <Label htmlFor="dgdfgd">test</Label>
                </FormGroup>
                <FormGroup marginBottom="10px" radius={8}>
                  <Label htmlFor="dfgfgd">test</Label>
                  <Input
                    as="textarea"
                    id="dfgdfg"
                    placeholder="das ist ein test"
                    disabled
                  />
                </FormGroup>
                <FormGroup marginBottom="10px" floating>
                  <Input id="test" placeholder="das ist ein test" as="select">
                    <option value="" disabled selected>
                      Bitte auswählen
                    </option>
                    <option>createGlobalStyle</option>
                    <option>dfgd</option>
                    <option>test</option>
                  </Input>
                  <Label htmlFor="test">test</Label>
                </FormGroup>
                <Tilt options={{ max: 25, scale: 1.05 }}>
                  <FormGroup>
                    <Input
                      type="checkbox"
                      id="fdsdsf"
                      placeholder="das ist ein test"
                    />
                    <Label htmlFor="fdsdsf">test</Label>
                  </FormGroup>
                </Tilt>
                <Button onClick={onSubmit} disabled={submitting}>
                  submit
                </Button>
                <Button type="secondary" size="medium" loading>
                  submit
                </Button>

                <Button type="tertiary" size="medium">
                  submit
                </Button>
                <Animate>
                  <Button>Ripple</Button>
                </Animate>
              </Fragment>
            )}
          </FormState>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper maxWidth={'700px'}>
          <Flex justifyContent="center">test</Flex>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper maxWidth={'700px'}>
          <Flex justifyContent="center">test</Flex>
        </Wrapper>
      </Section>
    </Fragment>
  </ThemeProvider>
);

export default App;

const styles = [
  [
    'icon',
    'Provides the author the ability to style an element with an iconic equivalent',
    '3',
  ],
  [
    'imageOrientation',
    'Specifies a rotation in the right or clockwise direction that a user agent applies to an image',
    '3',
  ],
  [
    'isolation',
    'Defines whether an element must create a new stacking content',
    '3',
  ],
  [
    'justifyContent',
    'Sets or returns the alignment between the items inside a flexible container when the items do not use all available space.',
    '3',
  ],
  ['left', 'Sets or returns the left position of a positioned element', '2'],
  [
    'letterSpacing',
    'Sets or returns the space between characters in a text',
    '1',
  ],
  ['lineHeight', 'Sets or returns the distance between lines in a text', '1'],
  [
    'listStyle',
    'Sets or returns listStyleImage, listStylePosition, and listStyleType in one declaration',
    '1',
  ],
  ['listStyleImage', 'Sets or returns an image as the list-item marker', '1'],
  [
    'listStylePosition',
    'Sets or returns the position of the list-item marker',
    '1',
  ],
  ['listStyleType', 'Sets or returns the list-item marker type', '1'],
  [
    'margin',
    'Sets or returns the margins of an element (can have up to four values)',
    '1',
  ],
  ['marginBottom', 'Sets or returns the bottom margin of an element', '1'],
  ['marginLeft', 'Sets or returns the left margin of an element', '1'],
  ['marginRight', 'Sets or returns the right margin of an element', '1'],
  ['marginTop', 'Sets or returns the top margin of an element', '1'],
  ['maxHeight', 'Sets or returns the maximum height of an element', '2'],
  ['maxWidth', 'Sets or returns the maximum width of an element', '2'],
  ['minHeight', 'Sets or returns the minimum height of an element', '2'],
  ['minWidth', 'Sets or returns the minimum width of an element', '2'],
  [
    'navDown',
    'Sets or returns where to navigate when using the arrow-down navigation key',
    '3',
  ],
  ['navIndex', 'Sets or returns the tabbing order for an element', '3'],
  [
    'navLeft',
    'Sets or returns where to navigate when using the arrow-left navigation key',
    '3',
  ],
  [
    'navRight',
    'Sets or returns where to navigate when using the arrow-right navigation key',
    '3',
  ],
  [
    'navUp',
    'Sets or returns where to navigate when using the arrow-up navigation key',
    '3',
  ],
  [
    'objectFit',
    'Specifies how the contents of a replaced element should be fitted to the box established by its used height and width',
    '3',
  ],
  [
    'objectPosition',
    'Specifies the alignment of the replaced element inside its box',
    '3',
  ],
  ['opacity', 'Sets or returns the opacity level for an element', '3'],
  [
    'order',
    'Sets or returns the order of the flexible item, relative to the rest',
    '3',
  ],
  [
    'orphans',
    'Sets or returns the minimum number of lines for an element that must be left at the bottom of a page when a page break occurs inside an element',
    '2',
  ],
  [
    'outline',
    'Sets or returns all the outline properties in one declaration',
    '2',
  ],
  [
    'outlineColor',
    'Sets or returns the color of the outline around a element',
    '2',
  ],
  [
    'outlineOffset',
    'Offsets an outline, and draws it beyond the border edge',
    '3',
  ],
  [
    'outlineStyle',
    'Sets or returns the style of the outline around an element',
    '2',
  ],
  [
    'outlineWidth',
    'Sets or returns the width of the outline around an element',
    '2',
  ],
  [
    'overflow',
    'Sets or returns what to do with content that renders outside the element box',
    '2',
  ],
  [
    'overflowX',
    "Specifies what to do with the left/right edges of the content, if it overflows the element's content area",
    '3',
  ],
  [
    'overflowY',
    "Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area",
    '3',
  ],
  [
    'padding',
    'Sets or returns the padding of an element (can have up to four values)',
    '1',
  ],
  ['paddingBottom', 'Sets or returns the bottom padding of an element', '1'],
  ['paddingLeft', 'Sets or returns the left padding of an element', '1'],
  ['paddingRight', 'Sets or returns the right padding of an element', '1'],
  ['paddingTop', 'Sets or returns the top padding of an element', '1'],
  [
    'pageBreakAfter',
    'Sets or returns the page-break behavior after an element',
    '2',
  ],
  [
    'pageBreakBefore',
    'Sets or returns the page-break behavior before an element',
    '2',
  ],
  [
    'pageBreakInside',
    'Sets or returns the page-break behavior inside an element',
    '2',
  ],
  [
    'perspective',
    'Sets or returns the perspective on how 3D elements are viewed',
    '3',
  ],
  [
    'perspectiveOrigin',
    'Sets or returns the bottom position of 3D elements',
    '3',
  ],
  [
    'position',
    'Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed)',
    '2',
  ],
  [
    'quotes',
    'Sets or returns the type of quotation marks for embedded quotations',
    '2',
  ],
  [
    'resize',
    'Sets or returns whether or not an element is resizable by the user',
    '3',
  ],
  ['right', 'Sets or returns the right position of a positioned element', '2'],
  [
    'tableLayout',
    'Sets or returns the way to lay out table cells, rows, and columns',
    '2',
  ],
  ['tabSize', 'Sets or returns the length of the tab-character', '3'],
  ['textAlign', 'Sets or returns the horizontal alignment of text', '1'],
  [
    'textAlignLast',
    'Sets or returns how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"',
    '3',
  ],
  ['textDecoration', 'Sets or returns the decoration of a text', '1'],
  [
    'textDecorationColor',
    'Sets or returns the color of the text-decoration',
    '3',
  ],
  [
    'textDecorationLine',
    'Sets or returns the type of line in a text-decoration',
    '3',
  ],
  [
    'textDecorationStyle',
    'Sets or returns the style of the line in a text decoration',
    '3',
  ],
  [
    'textIndent',
    'Sets or returns the indentation of the first line of text',
    '1',
  ],
  [
    'textJustify',
    'Sets or returns the justification method used when text-align is "justify"',
    '3',
  ],
  [
    'textOverflow',
    'Sets or returns what should happen when text overflows the containing element',
    '3',
  ],
  ['textShadow', 'Sets or returns the shadow effect of a text', '3'],
  ['textTransform', 'Sets or returns the capitalization of a text', '1'],
  ['top', 'Sets or returns the top position of a positioned element', '2'],
  ['transform', 'Applies a 2D or 3D transformation to an element', '3'],
  [
    'transformOrigin',
    'Sets or returns the position of transformed elements',
    '3',
  ],
  [
    'transformStyle',
    'Sets or returns how nested elements are rendered in 3D space',
    '3',
  ],
  [
    'transition',
    'A shorthand property for setting or returning the four transition properties',
    '3',
  ],
  [
    'transitionProperty',
    'Sets or returns the CSS property that the transition effect is for',
    '3',
  ],
  [
    'transitionDuration',
    'Sets or returns how many seconds or milliseconds a transition effect takes to complete',
    '3',
  ],
  [
    'transitionTimingFunction',
    'Sets or returns the speed curve of the transition effect',
    '3',
  ],
  [
    'transitionDelay',
    'Sets or returns when the transition effect will start',
    '3',
  ],
  [
    'unicodeBidi',
    'Sets or returns whether the text should be overridden to support multiple languages in the same document',
    '2',
  ],
  [
    'userSelect',
    'Sets or returns whether the text of an element can be selected or not',
    '2',
  ],
  [
    'verticalAlign',
    'Sets or returns the vertical alignment of the content in an element',
    '1',
  ],
  ['visibility', 'Sets or returns whether an element should be visible', '2'],
  [
    'whiteSpace',
    'Sets or returns how to handle tabs, line breaks and whitespace in a text',
    '1',
  ],
  ['width', 'Sets or returns the width of an element', '1'],
  ['wordBreak', 'Sets or returns line breaking rules for non-CJK scripts', '3'],
  ['wordSpacing', 'Sets or returns the spacing between words in a text', '1'],
  [
    'wordWrap',
    'Allows long, unbreakable words to be broken and wrap to the next line',
    '3',
  ],
  [
    'widows',
    'Sets or returns the minimum number of lines for an element that must be visible at the top of a page',
    '2',
  ],
  ['zIndex', 'Sets or returns the stack order of a positioned element', '2'],
];

var styleProps = {};
styles.map(style => {
  styleProps[style[0] + 'd'] = `/**
   * ${style[1]} */`;
  styleProps[style[0]] = 'func';
});
console.log(styleProps);
