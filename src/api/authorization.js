import axios from 'axios';
import { apiHelper } from 'heplers/helpers';

export default {
  adminLogin ({account, password}) {
    return apiHelper.post('/adminSignin' ,{
      account,
      password
    })
  }
}