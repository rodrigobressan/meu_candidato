PATH_DATA = 'http://demo0080297.mockable.io/cidades_estados';

/**
 * This object is used to retrieve all the information related to the available locations to pick
 */
var LocationRepository = {
    /**
     * This function is used to retrieve all the locations from our json file
     * @param callback
     */
    getProvinces(callback) {
        $.get(PATH_DATA, function(data) {
            callback(data);
        });
    }
};