import React, { memo, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Typography, Text } from 'styleguide-panfilov';
import { RootReducerInterface } from '../../../root.reducer';
import useNotification from '../../components/Notification/useNotification';
import getRandomString from '../../helpers/getRandomString';
import consts from '../../resourse/consts';
import icons from '../../resourse/icons';
import AuthFormContent from '../../wrappers/AuthFormContent/AuthFormContent';
import { FetchCancelContext } from '../../wrappers/FetchCancel/FetchCancel';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';

const VerifyEmail = memo(() => {
  const { addNotification } = useNotification();
  const { abortController } = useContext(FetchCancelContext);
  const params: { id: string } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { verifyEmailError, verifyEmailSuccess, user } = useSelector(
    (state: RootReducerInterface) => ({
      verifyEmailError: state.users.users.fetchData.verifyEmailError,
      verifyEmailSuccess: state.users.users.fetchData.verifyEmailSuccess,
      user: state.users.users.user,
    }),
  );

  useEffect(() => {
    dispatch(
      verifyEmailRequestAction({
        id: params.id,
        signal: abortController.signal,
      }),
    );
  }, []);

  useEffect(() => {
    if (verifyEmailSuccess || verifyEmailError) {
      const successMessage = `Email ${user?.email} подтвержден`;
      const dangerMessage = `Email ${user?.email} не подтвержден`;

      addNotification({
        message: user?.verifyEmail ? successMessage : dangerMessage,
        type: user?.verifyEmail
          ? consts.message.success
          : consts.message.danger,
        id: getRandomString(),
        delete: false,
      });
      history.push('/');
    }
  }, [verifyEmailError, verifyEmailSuccess, user]);

  return (
    <MainAuthWrapper>
      <AuthFormContent>
        <div className="text-center">
          <div style={{ marginBottom: 15 }}>{icons.successRegister}</div>
          <Typography tag="h2">Подтвердите свой аккаунт</Typography>
          <Text className="subtitle-h2">Ожидайте подтвеждение почты</Text>
        </div>
      </AuthFormContent>
    </MainAuthWrapper>
  );
});

export default VerifyEmail;
