import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecastWeather = data => {
    return data.list.filter(item => {
        return (moment.unix(item.dt).hour() === 6) ||
        (moment.unix(item.dt).hour() === 12) ||
        (moment.unix(item.dt).hour() === 18);
    }).map(item => (
        {weekDay : moment.unix(item.dt).format('ddd'),
        hour : moment.unix(item.dt).hour(),
        data : transformWeather(item) })
    )
};

export default transformForecastWeather;