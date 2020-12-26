import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import lodash from 'lodash';
import { RootReducerInterface } from '../../../../../root.reducer';
import DialogItem from './DialogItem';
import DialogsInterface from '../../../../interfaces/dialogs/Dialogs';

const DialogList = (): JSX.Element => {
  const { dialogs, searchInputUsers } = useSelector(
    (state: RootReducerInterface) => ({
      dialogs: state.dialogs.dialogs,
      searchInputUsers: state.dialogs.searchInputUsers,
    }),
  );

  const [filterDialogs, setFilterDialogs] = useState<DialogsInterface[]>([]);

  useEffect(() => {
    if (searchInputUsers.length === 0) {
      setFilterDialogs(dialogs);
      return;
    }
    setFilterDialogs(
      lodash.filter(
        dialogs,
        (dialog: DialogsInterface) =>
          dialog.user.name.search(searchInputUsers) !== -1,
      ),
    );
  }, [searchInputUsers]);

  return (
    <>
      {filterDialogs.length === 0 && <h2>Нет диалогов</h2>}
      {filterDialogs.length > 0 &&
        filterDialogs.map((item) => {
          return <DialogItem item={item} key={item._id} />;
        })}
    </>
  );
};

export default DialogList;
