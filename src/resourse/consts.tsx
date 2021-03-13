export default {
  pages: {
    auth: '/auth',
    register: '/register',
    chat: '/chat',
    verifyEmail: '/verify/:id',
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
      padding: 0,
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
  },

  testUserId: '5fe251b307941833081e7f16',

  message: {
    danger: 'danger',
    success: 'success',
  },
};
