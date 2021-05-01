import { Action, action } from 'easy-peasy';
interface Inotice {
  content: string;
  show: boolean;
  type: string;
}
export interface NoticeModel {
  noticeDataInit: Inotice;
  noticeData: Inotice;
  setSnackbarNotice: Action<NoticeModel, {}>;
}

const notice: NoticeModel = {
  noticeDataInit: { content: '', show: false, type: 'success' },
  noticeData: {
    content: '',
    show: false,
    type: 'success',
  },
  setSnackbarNotice: action((state, payload) => {
    state.noticeData = { ...state.noticeDataInit, ...payload };
  }),
};

export default notice;
