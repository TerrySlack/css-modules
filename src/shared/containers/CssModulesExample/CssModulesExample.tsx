import { useMemo, useState } from "react";

import { CssModulesExample } from "Components/CssModulesExample";

export function CssModulesExampleContainer() {
  const [swapCheckBox1Class, setCheckBox1Class] = useState<boolean>(false);
  const [swapCheckBox2Class, setCheckBox2Class] = useState<boolean>(false);

  const onButton1Click = (e: any) => {
    e.preventDefault();
    // Set with the opposite value
    setCheckBox1Class(!swapCheckBox1Class);
  };
  const onButton2Click = (e: any) => {
    e.preventDefault();
    // Set with the opposite value
    setCheckBox2Class(!swapCheckBox2Class);
  };

  // Set each buttons message, based on whether a button was clicked or not
  const button1Message = useMemo(
    () =>
      `Click to ${
        swapCheckBox1Class ? "Reset" : "Change"
      } the CSS  on the left checkbox`,
    [swapCheckBox1Class]
  );

  const button2Message = useMemo(
    () =>
      `Click to ${
        swapCheckBox2Class ? "Reset" : "Change"
      } the CSS  on the left checkbox`,
    [swapCheckBox2Class]
  );
  return (
    // Only render if our api call is not loading, there is no error and some photos have been returned
    <CssModulesExample
      swapCheckBox1Class={swapCheckBox1Class}
      swapCheckBox2Class={swapCheckBox2Class}
      button1Message={button1Message}
      button2Message={button2Message}
      title="Click the buttons to change classes on the  switch (toggle) and Button, one at a time"
      onButton1Click={onButton1Click}
      onButton2Click={onButton2Click}
    />
  );
}
export { CssModulesExampleContainer as CssModulesExample };
