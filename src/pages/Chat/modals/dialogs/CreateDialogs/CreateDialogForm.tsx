import classNames from 'classnames';
import {
  Form,
  FormWrapper,
  Select,
  KeyFormInterface,
  requiredInputRules,
} from 'form-panfilov';
import React, { memo, useContext, useEffect, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '../../../../../../root.reducer';
import enabledBody from '../../../../../helpers/enabledBody';
import {
  createDialogRequest as createDialogRequestFunc,
  editDialogRequest as editDialogRequestFunc,
  setToggleModaEditModalDialog,
  setToggleModalCreateDialog,
} from '../../../../../redux/dialogs/dialogs/actions';
import { getTypesRequest } from '../../../../../redux/dialogs/types/actions';
import { getMembersRequest } from '../../../../../redux/users/actions';
import consts from '../../../../../resourse/consts';
import AuthFormContent from '../../../../../wrappers/AuthFormContent/AuthFormContent';
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
  const {
    activeDialog,
    dialogs,

    toggleModalCreateDialog,
    toggleModalEditDialog,

    createDialogRequest,
    createDialogSuccess,

    editDialogRequest,
    editDialogSuccess,

    types,
    getTypesSuccess,

    members,
    getMembersSuccess,
  } = useSelector(
    (state: RootReducerInterface) => ({
      activeDialog: state.dialogs.dialogs.activeDialog,
      dialogs: state.dialogs.dialogs.dialogs,

      toggleModalCreateDialog: state.dialogs.dialogs.toggleModalCreateDialog,
      toggleModalEditDialog: state.dialogs.dialogs.toggleModalEditDialog,

      createDialogRequest: state.dialogs.dialogs.fetchData.createDialogRequest,
      createDialogSuccess: state.dialogs.dialogs.fetchData.createDialogSuccess,

      editDialogRequest: state.dialogs.dialogs.fetchData.editDialogRequest,
      editDialogSuccess: state.dialogs.dialogs.fetchData.editDialogSuccess,

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
        id: consts.testUserId,
        signal: abortController.signal,
      }),
    );
  }, []);

  useEffect(() => {
    if (createDialogSuccess || editDialogSuccess) {
      dispatch(setToggleModalCreateDialog(false));
      dispatch(setToggleModaEditModalDialog(false));
      enabledBody();
    }
  }, [createDialogSuccess, editDialogSuccess]);

  const dataMembers = useMemo(() => {
    const data = members.map((item) => ({
      value: item._id,
      label: `${item.name} ${item.surname}`,
    }));

    if (toggleModalEditDialog && activeDialog) {
      data.unshift({
        value: activeDialog?.company.memberId,
        label: activeDialog.company.fullname,
      });
    }

    return data;
  }, [getMembersSuccess]);

  const defaultMember = useMemo(() => {
    if (toggleModalCreateDialog) return null;
    const member = dataMembers.find((item) => {
      return item.value === activeDialog?.company.memberId;
    });

    return member || null;
  }, [dataMembers]);

  const dataTypes = useMemo(() => {
    return types.map((item) => ({ value: item, label: item }));
  }, [getTypesSuccess]);

  const defaultType = useMemo(() => {
    if (toggleModalCreateDialog) return null;
    const type = dataTypes.find(
      (item) => item.value === activeDialog?.company.typeDialog,
    );
    return type || null;
  }, [dataTypes]);

  const defaultValueForForm = useMemo(() => {
    if (toggleModalCreateDialog) {
      return defaultValue;
    }

    return [
      {
        type: {
          defaultValue: activeDialog?.company.typeDialog || '',
          defaultError: false,
        },
      },
      {
        members: {
          defaultValue: activeDialog?.company.memberId || '',
          defaultError: true,
        },
      },
    ];
  }, []);

  const handleSubmit = (fields: any) => {
    if (toggleModalCreateDialog) {
      dispatch(
        createDialogRequestFunc({
          type: fields.type.value,
          members: [consts.testUserId, fields.members.value],
          signal: abortController.signal,
        }),
      );
    }

    if (toggleModalEditDialog && activeDialog) {
      dispatch(
        editDialogRequestFunc({
          _id: activeDialog?.company.dialogId,
          type: fields.type.value,
          members: [consts.testUserId, fields.members.value],
          signal: abortController.signal,
        }),
      );
    }
  };

  return (
    <>
      {(!getTypesSuccess || !getMembersSuccess) && <div>Загрузка</div>}
      {getTypesSuccess && getMembersSuccess && (
        <AuthFormContent>
          <Form
            buttonText="Создать диалог"
            data={defaultValueForForm}
            onSubmit={handleSubmit}
            className={classNames('d-flex flex-direction-column', {
              disabled: createDialogRequest,
            })}
          >
            <FormWrapper errors={[]} form={defaultValue}>
              <Select
                name="type"
                defaultItemSelect={defaultType}
                options={dataTypes}
                rules={{ requiredInputRules }}
              />

              <Select
                defaultItemSelect={defaultMember}
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
