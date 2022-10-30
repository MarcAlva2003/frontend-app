import { ModalWrapperStyle } from "./modal-wrapper-style";
import { useEffect } from "react";

interface IModalWrapper{
  children: any;
  active: boolean;
}

export const ModalWrapper = (props: IModalWrapper) => {
  const {children, active} = props;

  useEffect(()=>{
    active ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll'
  },[active])

  return(
    <ModalWrapperStyle
      className={`${active ? 'active' : ''}`}
    >
      <div className="modal-content">
        {children}
      </div>
    </ModalWrapperStyle>
  );
};
