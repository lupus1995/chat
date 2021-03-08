import React, { memo, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router';
import { Typography, Text } from 'styleguide-panfilov';
import { RootReducerInterface } from '../../../root.reducer';
import { verifyEmailRequestAction } from '../../redux/users/actions';
import icons from '../../resourse/icons';
import AuthFormContent from '../../wrappers/AuthFormContent/AuthFormContent';
import { FetchCancelContext } from '../../wrappers/FetchCancel/FetchCancel';
import MainAuthWrapper from '../../wrappers/MainAuthWrapper/MainAuthWrapper';

const VerifyEmail = memo(() => {
  const { abortController } = useContext(FetchCancelContext);
  const params: { id: string } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { verifyEmailError, verifyEmailSuccess } = useSelector(
    (state: RootReducerInterface) => ({
      verifyEmailError: state.users.fetchData.verifyEmailError,
      verifyEmailSuccess: state.users.fetchData.verifyEmailSuccess,
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
      history.push('/');
    }
  }, [verifyEmailError, verifyEmailSuccess]);

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
