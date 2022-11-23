import { Button } from "../../ui/button/button";
import { DeleteCompanyModalStyle } from "./delete-company-modal-style";
import { ModalWrapper } from "../../ui/modal-wrapper/modal-wrapper";
import { Subhead1 } from "../../ui/styles/typography";

interface IDeleteCompanyModal{
  active: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const DeleteCompanyModal = (props: IDeleteCompanyModal) => {
  const {
    active,
    onClose,
    onAccept,
  } = props;
  return(
    <DeleteCompanyModalStyle>
      <ModalWrapper
        active={active}
      >
        <div className="delete-company-modal">
          <div className="delete-company-modal--message">
            <Subhead1>Are you sure you want to delete this company? This action cannot be revesed</Subhead1>
          </div>
          <div className="delete-company-modal--buttons">
            <div className="delete-company-modal--buttons__item">
              <Button
                type="secondary"
                text="Cancel"
                size="large"
                radius="low"
                onClick={()=>{
                  onClose();
                }}
              />
            </div>
            <div className="delete-company-modal--buttons__item">
              <Button
                type="danger1"
                text="Delete"
                size="large"
                radius="low"
                onClick={()=>{
                  onAccept();
                }}
              />
            </div>
          </div>
        </div>
      </ModalWrapper>
    </DeleteCompanyModalStyle>
  );
};
