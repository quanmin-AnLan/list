import Http from '../../service/index'

const apis = {
  // pv上报
  reportPV: (params) => Http.get(`http://api.wnw.icu/report/pv`, params)
}

export default apis
