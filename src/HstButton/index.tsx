import React, { memo } from "react";
import { Button, ButtonProps } from "antd";

type IHstButtonProps = Omit<ButtonProps, 'type'>

const HstButton: React.FC<IHstButtonProps> = (props) => {

  const { children, ...rest } = props

  return (
    <Button {...rest} type='primary'>
      {children}
    </Button>
  );
};

export default memo(HstButton);
