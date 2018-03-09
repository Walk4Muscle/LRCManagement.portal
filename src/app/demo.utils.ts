import * as moment from 'moment/moment';

export const Demo = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    generateRandomData: (num, multiple = 50) => {
        const keys = Array(num).keys();
        return [...Array.from(keys)].map(i => {
            return Math.floor(Math.random() * multiple);
        });
    },
    generateRandomDataPercent: (num) => {
        const keys = Array(num).keys();
        return [...Array.from(keys)].map(i => {
            return Math.random();
        });
    },
    generateRandomTime: (num) => {
        const keys = Array(num).keys();
        return [...Array.from(keys)].map(i => {
            const random_datatime = moment((moment().unix() + Math.floor(Math.random() * 3600 * 24)) * 1000).format('HH:mm:ss');
            return moment(random_datatime, 'HH:mm:ss');
        });
    }
};
