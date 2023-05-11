import axios from "axios";
import { COMPOSITION, DOCTOR_DETAILS } from "../interfaces";




 export interface DISCHARGE_SUMMARY {
 
  abhaAddress?: string;
  patientId?: number;
  text: string;
  doctorDetails: DOCTOR_DETAILS[];
  /**
   * only data marked as final will be shared with ABDM
   */
  status: "final" | "draft";
  /**
   * please the format "2023-05-08T19:21:23.918Z"
   */
  date: string;

}



/**
 * You send data by using abhaAddress or patientId of Nice HMS
 * try sending discharge summary in html format so pdf geneated at our end is nicely formated
 * keep HTML format as simple as possible, complaex HTML may not genrate good PDF
 * @param options 
 * @param token 
 * @param baseUrl 
 * @returns 
 */
export const dischareSummary = async (options:DISCHARGE_SUMMARY,   token: string,
    baseUrl: string): Promise<COMPOSITION> => {
  const url = `${baseUrl}discharge_summary`;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
}
  const res = await axios
    .post(url, options, config)
    .then((res) => res.data);
  return res;
};



