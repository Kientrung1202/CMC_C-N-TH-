import { useEffect } from "react";
import { Dimmer } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function Modals({
  children,
  active,
  handleClose,
}: {
  children: any;
  active: boolean;
  handleClose: () => void;
}) {
  useEffect(() => console.log({ active }));
  return (
    <Dimmer active={active} onClickOutside={handleClose} page>
      {children}
    </Dimmer>
  );
}
