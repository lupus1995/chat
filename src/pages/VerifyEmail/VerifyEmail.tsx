import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { verifyEmailRequestAction } from '../../redux/users/verifyEmail/actions';
import { FetchCancelContext } from '../../wrappers/FetchCancel/FetchCancel';

const VerifyEmail = () => {
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const dispatch = useDispatch();
  const { abortController } = useContext(FetchCancelContext);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const { id } = params;
    dispatch(
      verifyEmailRequestAction({
        id,
        signal: abortController.signal,
      }),
    );

    return () => {};
  }, []);

  return null;
};

export default VerifyEmail;
