import classNames from 'classnames';
import { Form, FormWrapper, Input, KeyFormInterface } from 'form-panfilov';
import React, { memo, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '../../../../../../root.reducer';
import CreateRequestDialogInterface from '../../../../../interfaces/dialogs/CreateRequestDialogInterface';
import { createDialogRequest as createDialogRequestFunc } from '../../../../../redux/dialogs/dialogs/actions';
import { FetchCancelContext } from '../../../../../wrappers/FetchCancel/FetchCancel';

const defaultValue: KeyFormInterface[] = [
  {
    type: {
      defaultValue: '',
      defaultError: true,
    },
  },
  {
    members: {
      defaultValue: '',
      defaultError: true,
    },
  },
];

const CreateDialogForm = memo(() => {
  const dispatch = useDispatch();
  const { abortController } = useContext(FetchCancelContext);
  const { createDialogRequest } = useSelector(
    (state: RootReducerInterface) => ({
      createDialogRequest: state.dialogs.dialogs.fetchData.createDialogRequest,
    }),
  );
  return (
    <Form
      data={defaultValue}
      onSubmit={(fields: CreateRequestDialogInterface) => {
        dispatch(
          createDialogRequestFunc({
            ...fields,
            signal: abortController.signal,
          }),
        );
      }}
      className={classNames('d-flex flex-direction-column', {
        disabled: createDialogRequest,
      })}
    >
      {/* <FormWrapper errors={[]} form={defaultValue}>
        
      </FormWrapper> */}
    </Form>
  );
});

export default CreateDialogForm;
