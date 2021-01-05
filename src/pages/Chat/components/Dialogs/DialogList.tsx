import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootReducerInterface } from '../../../../../root.reducer';
import DialogItem from './DialogItem';
import DialogsInterface from '../../../../interfaces/dialogs/DialogsInterface';

const DialogList = (): JSX.Element => {
  const { dialogs, searchInputUsers } = useSelector(
    (state: RootReducerInterface) => ({
      dialogs: state.dialogs.dialogs.dialogs,

      searchInputUsers: state.dialogs.dialogs.searchInputUsers,
    }),
  );

  const [filterDialogs, setFilterDialogs] = useState<DialogsInterface[]>([]);

  // useEffect(() => {
  //   if (searchInputUsers.length === 0) {
  //     setFilterDialogs(dialogs);
  //   }
  //   // setFilterDialogs(
  //   //   lodash.filter(
  //   //     dialogs,
  //   //     (dialog: DialogsInterface) =>
  //   //       dialog.user.name.search(searchInputUsers) !== -1,
  //   //   ),
  //   // );
  // }, [searchInputUsers]);

  useEffect(() => {
    setFilterDialogs(dialogs);
  }, [dialogs]);

  return (
    <>
      {filterDialogs.length === 0 && <h2>Нет диалогов</h2>}
      {filterDialogs.length > 0 &&
        filterDialogs.map((item) => {
          return <DialogItem item={item} key={item.company.dialogId} />;
        })}
    </>
  );
};

export default DialogList;
