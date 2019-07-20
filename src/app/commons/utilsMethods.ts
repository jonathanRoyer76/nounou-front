/**
 * Some generic usefull methods
 */
export class UtilsMethods {

    /**
     * Return a date from a timestamp
     * @param p_timestamp the timestamp to convert
     */
    static getDateFromTimeStamp(p_timestamp: number) {

        let returnObject: Date = null;
        if (p_timestamp > 0) {
            returnObject = new Date(p_timestamp * 1000);
        }
        return returnObject;
    }
}
