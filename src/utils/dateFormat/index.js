import moment from 'moment';
import 'moment/locale/id';

export const dateFormat = date => {
  moment.locale('id');

  return moment.unix(date).format('MMM Do, YYYY');
};
