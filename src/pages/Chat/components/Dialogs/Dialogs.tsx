import React, { useEffect, useContext, lazy, Suspense } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCancelContext } from '../../../../wrappers/FetchCancel/FetchCancel';
import DialogWrapper from '../../../../wrappers/ChatWrappers/DialogWrapper/DialogWrapper';
import { RootReducerInterface } from '../../../../../root.reducer';
import DialogPlaceholders from './DialogPlaceholders';
import { getDialogsRequest as getDialogsRequestFunction } from '../../../../redux/dialogs/actions';

const DialogList = lazy(() => import('./DialogList'));

const Dialogs = (): JSX.Element => {
  const dispatch = useDispatch();
  const { abortController } = useContext(FetchCancelContext);
  const { getDialogsRequest, getDialogsSuccess } = useSelector(
    (state: RootReducerInterface) => ({
      getDialogsRequest: state.dialogs.fetchData.getDialogsRequest,
      getDialogsSuccess: state.dialogs.fetchData.getDialogsSuccess,
    }),
  );

  useEffect(() => {
    dispatch(
      getDialogsRequestFunction({
        signal: abortController.signal,
        id: '5fe251b307941833081e7f16',
      }),
    );
  }, []);
  return (
    <DialogWrapper>
      {getDialogsSuccess && (
        <Suspense fallback={null}>
          <DialogList />
        </Suspense>
      )}
      {getDialogsRequest && <DialogPlaceholders />}
    </DialogWrapper>
  );
};

export default Dialogs;
