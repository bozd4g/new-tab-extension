import axios from 'axios';

class ServiceManager {
   private readonly baseUrl = process.env.BASE_URL;

   async get(endpoint: string): Promise<any> {
      await axios
         .get(this.baseUrl + endpoint)
         .then((response: any) => response.data)
         .catch((reason: any) => {
            console.log(reason);
            return null;
         });
   }

   async post(endpoint: string, data: any): Promise<any> {
      await axios
         .post(this.baseUrl + endpoint, data)
         .then((response: any) => response.data)
         .catch((reason: any) => {
            console.log(reason);
            return null;
         });
   }

   async put(endpoint: string, data: any): Promise<any> {
      await axios
         .put(this.baseUrl + endpoint, data)
         .then((response: any) => response.data)
         .catch((reason: any) => {
            console.log(reason);
            return null;
         });
   }

   async delete(endpoint: string): Promise<any> {
      await axios
         .delete(this.baseUrl + endpoint)
         .then((response: any) => response.data)
         .catch((reason: any) => {
            console.log(reason);
            return null;
         });
   }
}

export default new ServiceManager();
