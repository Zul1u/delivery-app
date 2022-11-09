import moment from 'moment';

const formatDate = (date) => moment(date).locale('pt-br').format('DD/MM/YYYY');

export default formatDate;
