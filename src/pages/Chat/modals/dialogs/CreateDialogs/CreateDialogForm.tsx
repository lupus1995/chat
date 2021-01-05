import classNames from 'classnames';
import {
  Form,
  FormWrapper,
  Select,
  KeyFormInterface,
  requiredInputRules,
  Input,
  emailRules,
} from 'form-panfilov';
import React, { memo, useContext, useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '../../../../../../root.reducer';
import enabledBody from '../../../../../helpers/enabledBody';
import CreateRequestDialogInterface from '../../../../../interfaces/dialogs/CreateRequestDialogInterface';
import { createDialogRequest as createDialogRequestFunc } from '../../../../../redux/dialogs/dialogs/actions';
import { getTypesRequest } from '../../../../../redux/dialogs/types/actions';
import { getMembersRequest } from '../../../../../redux/users/actions';
import AuthFormContent from '../../../../../wrappers/AuthFormContent/AuthFormContent';
import { FetchCancelContext } from '../../../../../wrappers/FetchCancel/FetchCancel';
import { ModalWrapperContext } from '../../../../../wrappers/ModalWrapper/ModalWrapper';

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
  const { setOpen } = useContext(ModalWrapperContext);
  const {
    createDialogRequest,
    createDialogSuccess,

    types,
    getTypesSuccess,

    members,
    getMembersSuccess,
  } = useSelector(
    (state: RootReducerInterface) => ({
      createDialogRequest: state.dialogs.dialogs.fetchData.createDialogRequest,
      createDialogSuccess: state.dialogs.dialogs.fetchData.createDialogSuccess,

      members: state.users.members,
      getMembersSuccess: state.users.fetchData.getMembersSuccess,

      types: state.dialogs.types.types,
      getTypesSuccess: state.dialogs.types.fetchData.getTypesSuccess,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getTypesRequest(abortController.signal));
    dispatch(
      getMembersRequest({
        id: '5fe251b307941833081e7f16',
        signal: abortController.signal,
      }),
    );
  }, []);

  useEffect(() => {
    if (createDialogSuccess) {
      setOpen(false);
      enabledBody();
    }
  }, [createDialogSuccess]);

  const dataMembers = useMemo(() => {
    return members.map((item) => ({
      value: item._id,
      label: `${item.name} ${item.surname}`,
    }));
  }, [getMembersSuccess]);

  const dataTypes = useMemo(() => {
    return types.map((item) => ({ value: item, label: item }));
  }, [getTypesSuccess]);

  return (
    <>
      {(!getTypesSuccess || !getMembersSuccess) && <div>Загрузка</div>}
      {getTypesSuccess && getMembersSuccess && (
        <AuthFormContent>
          <Form
            buttonText="Создать диалог"
            data={defaultValue}
            onSubmit={(fields) => {
              dispatch(
                createDialogRequestFunc({
                  type: fields.type.value,
                  members: ['5fe251b307941833081e7f16', fields.members.value],
                  signal: abortController.signal,
                }),
              );
            }}
            className={classNames('d-flex flex-direction-column', {
              disabled: createDialogRequest,
            })}
          >
            <FormWrapper errors={[]} form={defaultValue}>
              <Select
                name="type"
                options={dataTypes}
                rules={{ requiredInputRules }}
              />

              <Select
                name="members"
                options={dataMembers}
                rules={{ requiredInputRules }}
              />
            </FormWrapper>
          </Form>
        </AuthFormContent>
      )}
    </>
  );
});

export default CreateDialogForm;
