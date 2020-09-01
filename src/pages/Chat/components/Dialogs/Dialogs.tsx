import React, { useEffect, useContext, Suspense } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCancelContext } from '../../../../wrappers/FetchCancel/FetchCancel';
import DialogWrapper from '../../../../wrappers/ChatWrappers/DialogWrapper/DialogWrapper';
import { RootReducerInterface } from '../../../../../root.reducer';
import DialogPlaceholders from './DialogPlaceholders';
import Loadeble from 'react-loadable';
import { getDialogsRequest as getDialogsRequestFunction } from '../../../../redux/dialogs/actions';

const DialogList = Loadeble({
  loader: () => import('./DialogList'),
  loading: () => null,
});

const Dialogs = () => {
  const dispatch = useDispatch();
  const { abortController } = useContext(FetchCancelContext);
  const { getDialogsRequest, getDialogsSuccess } = useSelector(
    (state: RootReducerInterface) => ({
      getDialogsRequest: state.dialogs.fetchData.getDialogsRequest,
      getDialogsSuccess: state.dialogs.fetchData.getDialogsSuccess,
    }),
  );

  useEffect(() => {
    dispatch(getDialogsRequestFunction(abortController.signal));
  }, []);
  return (
    <DialogWrapper>
      {getDialogsSuccess && <DialogList />}
      {getDialogsRequest && <DialogPlaceholders />}
    </DialogWrapper>
  );
};

export default Dialogs;
