import moment from 'moment';

import styles from './assets/style/css/style.css';
import styles from './assets/style/sass/index.scss';


var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
// "October 23rd 2016, 9:30:24 pm"