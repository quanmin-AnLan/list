import apis from '@/api'

class RouteInit {
  constructor() {
    this.path = '/'
  }

  run(to) {
    const { path } = to
    this.path = path
    this.handler()
  }

  handler() {
    this.spmReport()
  }

  // pv上报
  spmReport() {
    let spmC = ''
    if (this.path === '/') {
      spmC = 'home'
    } else {
      const baseSpmC = this.path.split('/')
      if (baseSpmC[0] === '') {
        baseSpmC.shift()
      }
      const end = baseSpmC[baseSpmC.length - 1]
      var n = Number(end);
      if (!isNaN(n) && n !== 404) {
        baseSpmC.pop()
      }
      spmC = baseSpmC.join('-')
    }
    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    const params = {
      setDate: `${year}/${month}/${day}`,
      spm: `smpc.anlan-list.${spmC}`
    }
    apis.reportPV(params)
  }
}

export default new RouteInit()
