BASE_ENDPOINT = "http://andrebordignon.esy.es/php/";

URL_ADD_CANDIDATE = BASE_ENDPOINT + "incluicandidato.php";
URL_GET_CANDIDATES = BASE_ENDPOINT + "consultacandidatos.php";
URL_EDIT_CANDIDATE = BASE_ENDPOINT + "atualizacandidato.php";
URL_DELETE_CANDIDATE = BASE_ENDPOINT + "deletacandidato.php";

/**
 * This object is used to interact with the Candidates API
 */
var CandidatesRepository = {

    /**
     * This function is used to add a new candidate into the API
     * @param candidate the candidate to be added
     * @param callback response
     */
    addCandidateRemote(candidate, callback) {
        $.post(URL_ADD_CANDIDATE, candidate, function (data) {
            callback(data)
        });
    },

    /**
     * This function is used to get all candidates from API
     * @param callback response with all candidates
     */
    getCandidatesRemote(callback) {
        $.get(URL_GET_CANDIDATES, function (data) {
            callback(data)
        });
    },

    /**
     * This function is used to edit a candidate from the API
     * @param candidate the candidate to be edited
     * @param callback the response
     */
    editCandidateRemote(candidate, callback) {
        $.post(URL_EDIT_CANDIDATE, candidate, function (data) {
            callback(data)
        });
    },

    /**
     * This function is used to delete a candidate from the API
     * @param candidate the candidate to be delete
     * @param callback the response
     */
    deleteCandidateRemote(candidateId, callback) {

        var data = {
            idcandidato: candidateId
        };

        $.post(URL_DELETE_CANDIDATE, data, function (data) {
            callback(data)
        });
    }
};
