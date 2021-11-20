export = AxiosApi;
declare class AxiosApi {
    /**
     * Constructor to initialize configs
     *
     * @param {object} config an object with this data: { environment: 'development'/'production' }
     */
    constructor(config: object);
    config: any;
    /**
     * Method to get baseUrl to new axios instance
     *
     * @param {string} environment text with development or production to select specific url to test
     * @returns an text with base url to instance an new axios
     */
    getBaseUrl(environment: string): "https://api-dev.cryptum.io" | "https://api.cryptum.io";
    /**
     * Method to get an axios instance or create an new.
     *
     * @returns axios instance
     */
    getInstance(): any;
    api: any;
}
