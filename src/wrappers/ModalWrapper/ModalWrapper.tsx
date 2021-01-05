import React, { createContext, FC } from 'react';

export interface ModalWrapperContextInterface {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalWrapperContext = createContext(
  {} as ModalWrapperContextInterface,
);

const ModalWrapper: FC<ModalWrapperContextInterface> = ({
  children,
  open,
  setOpen,
}) => {
  return (
    <ModalWrapperContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalWrapperContext.Provider>
  );
};

export default ModalWrapper;
