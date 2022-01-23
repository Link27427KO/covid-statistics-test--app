import axios from 'axios'
import { SERVICE_NAME } from '../helpers/common'

class CovidStatisticsService {
    public getCovidStatistics() {
        return axios.get(SERVICE_NAME + '/summary').then((res) => {
            return res.data
        }).catch((e) => {
            console.log(e)
        })
    }
}

export default new CovidStatisticsService()