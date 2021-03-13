import React, { memo, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Typography, Text } from 'styleguide-panfilov';
import { RootReducerInterface } from '../../../root.reducer';
import useNotification from '../../components/Notification/useNotification';
import getRandomString from '../../helpers/getRandomString';
import { verifyEmailRequestAction } from '../../redux/users/verifyEmail/actions';
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
      verifyEmailError: state.users.verifyEmail.fetchData.verifyEmailError,
      verifyEmailSuccess: state.users.verifyEmail.fetchData.verifyEmailSuccess,
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
    console.log('verifyEmailSuccess', verifyEmailSuccess);
    console.log('verifyEmailError', verifyEmailError);
    if (verifyEmailSuccess || verifyEmailError) {
      const successMessage = `Email ${user?.email} подтвержден`;
      const dangerMessage = `Email ${user?.email} не подтвержден`;

      addNotification({
        message: user?.verifyEmail ? successMessage : dangerMessage,
        type: user?.verifyEmail ?
          consts.message.success :
          consts.message.danger,
        id: getRandomString(),
        delete: false,
      });
      history.push(consts.pages.auth);
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
