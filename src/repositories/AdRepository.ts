import AdModel from '../models/AdModel'
import IAd from '../interfaces/IAd'

class AdRespository {
  private ad: AdModel = new AdModel()

  public async create (data: IAd): Promise<IAd> {
    return this.ad.create(data)
  }
}

export default new AdRespository()
