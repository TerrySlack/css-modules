import { MouseEvent } from "react";
import { Layout, Col, Row } from "antd"; // These controls can also go into the ECL V2

import { Button } from "Components/Button";
import { Switch } from "Components/Switch";
// Using Css modules, import your css classes from a css file
import classes from "./cssexample.module.css";

interface Props {
  title: string;
  swapCheckBox1Class: boolean;
  swapCheckBox2Class: boolean;
  button1Message: string;
  button2Message: string;
  onButton1Click: (e: MouseEvent<HTMLAnchorElement>) => void;
  onButton2Click: (e: MouseEvent<HTMLAnchorElement>) => void;
}

/*
  Using css modules to pass components classNames
  Note, they will be scoped when used in the site, but in here, you access the class names you created in home.module.css

 The imported Button component is styled using css modules.  You can also pass in a className to apply stylings to it
 that will override antd styles or work along side them.
 See below how a class is passed throug className

 Same for the switch.

 Using styled-components, in googling, I read it's not a good practice to create the components inside a component.
 We could use an external function and then use useMemo on it.  But that adds overhead, while also adding the overhead of styled-components adding
 styles with JavaScript
*/

export function CssModulesExample({
  title,
  swapCheckBox1Class,
  swapCheckBox2Class,
  button1Message,
  button2Message,
  onButton1Click,
  onButton2Click,
}: Props) {
  return (
    <Layout className={classes.container}>
      <Row justify="center">
        <Col span={9} className={classes.titleContainer}>
          <label className={classes.title}>{title}</label>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <Button
            type="primary"
            onClick={onButton1Click}
            className={`${swapCheckBox1Class ? classes.button1 : ""}`}
          >
            {button1Message}
          </Button>
        </Col>
        <Col span={6}>
          <Button
            type="primary"
            onClick={onButton2Click}
            className={`${swapCheckBox2Class ? classes.button2 : ""}`}
          >
            {button2Message}
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <Switch
            size="small"
            className={swapCheckBox1Class ? classes["checkbox-green"] : ""}
            defaultChecked
          />
        </Col>
        <Col span={6}>
          <Switch
            size="small"
            className={swapCheckBox2Class ? classes["checkbox-salmon"] : ""}
            defaultChecked
          />
        </Col>
      </Row>
    </Layout>
  );
}
