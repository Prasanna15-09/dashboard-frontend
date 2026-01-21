import {BaseRecord, DataProvider , GetListParams, GetListResponse} from "@refinedev/core";
import {Mock_Subjects} from "@/constants/mock-data.ts";

export const dataProvider : DataProvider = {
  getList :  async <TData extends BaseRecord = BaseRecord>({resource}:GetListParams):
      Promise<GetListResponse<TData>> => {
        if(resource != 'subjects'){
          return {
            data : [] as TData[], total: 0
          };
        }
    return {
      data :Mock_Subjects as unknown as TData[],
      total : Mock_Subjects.length,
    }
},

  getOne : async ()=> {throw new Error('This function is not present in mock')},
  create : async ()=> {throw new Error('This function is not present in mock')},
  update : async ()=> {throw new Error('This function is not present in mock')},
  deleteOne : async ()=> {throw new Error('This function is not present in mock')},

  getApiUrl : () => '',





}

