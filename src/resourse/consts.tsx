export default {
  pages: {
    auth: '/auth',
    register: '/register',
    chat: '/chat',
  },
  typeInputPassword: 'password',
  path: 'http://localhost:4000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  modalStyles: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  },
};
