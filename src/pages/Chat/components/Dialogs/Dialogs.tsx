import React, { useEffect, useContext, Suspense } from 'react';
import './style.scss';
import DialogItem from './DialogItem';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCancelContext } from '../../../../wrappers/FetchCancel/FetchCancel';
import { getUsersRequest as getUsersRequestFunction } from '../../../../redux/users/actions';
import DialogWrapper from '../../../../wrappers/ChatWrappers/DialogWrapper/DialogWrapper';
import { RootReducerInterface } from '../../../../../root.reducer';
import DialogPlaceholders from './DialogPlaceholders';
import Loadeble from 'react-loadable';

const DialogList = Loadeble({
  loader: () => import('./DialogList'),
  loading: () => null,
});

const Dialogs = () => {
  const dispatch = useDispatch();
  const { abortController } = useContext(FetchCancelContext);
  const { getUsersRequest, getUsersSuccess, users } = useSelector(
    (state: RootReducerInterface) => ({
      getUsersRequest: state.users.fetchData.getUsersRequest,
      getUsersSuccess: state.users.fetchData.getUsersSuccess,
      users: state.users.users,
    }),
  );

  useEffect(() => {
    dispatch(getUsersRequestFunction(abortController.signal));
  }, []);
  return (
    <DialogWrapper>
      {getUsersSuccess && <DialogList />}
      {getUsersRequest && <DialogPlaceholders />}
    </DialogWrapper>
  );
};

export default Dialogs;
