

import { mkConfig, generateCsv, download } from "export-to-csv";
export const BASE_URL = 'https://tick.thrida.com/api'

export const csvConverter=(data:any)=>{
    console.log(data)
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)(data);
    return{
        csvConfig ,csv
    }
    

}
 

 
  
  // Converts your Array<Object> to a CsvOutput string based on the configs
  
  