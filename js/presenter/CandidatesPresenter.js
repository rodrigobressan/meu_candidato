var current_edit_id = -1;

var CandidatesPresenter = {

    /**
     * Function used to load all candidates
     */
    loadCandidates() {
        CandidatesRepository.getCandidatesRemote(function (data) {
            var candidates = JSON.parse(data);
            CandidatesView.renderListCandidates(candidates);
        });
    },

    /**
     * Function to check if the candidate is not already being edited
     * @param candidate the candidate to be checked
     */
    isNotCurrentlyBeingEdited(candidate) {
        return current_edit_id !== candidate.id;
    },

    /**
     * Function used to validate a candidate fields
     * @param candidate the candidate to be validated
     */
    isCandidateValid(candidate) {
        if (!isNameValid(candidate.nome)) return false;
        if (!isCadjusValid(candidate.cadjus)) return false;
        if (!isCpfValid(candidate.cpf)) return false;
        if (!isEmailValid(candidate.email)) return false;
        //if (!isBirthdayValid(candidate.datanasc)) return false;

        return true
    },

    /**
     * Function used when action to add a candidate is called
     * @param candidate the candidate to be added
     * @param callback the response
     */
    addCandidate(candidate, callback) {
        if (CandidatesPresenter.isCandidateValid(candidate)) {
            CandidatesRepository.addCandidateRemote(candidate, function () {
                callback(CandidatesView.states.SUCCESS_ADDED)
            });
        } else {
            callback(CandidatesView.states.ERROR_INVALID_FORM);
        }
    },

    /**
     * Function used when action to remove a candidate is called
     * @param candidate the candidate to be removed
     * @param callback the response
     */
    removeCandidate(candidate_id, callback) {
        CandidatesRepository.deleteCandidateRemote(candidate_id, function () {
            callback(CandidatesView.states.SUCCESS_REMOVED)
        })
    },

    /**
     * Function used when action to edit a candidate is called
     * @param candidate the candidate to be edited
     * @param callback the response
     */
    editCandidate(candidate, callback) {
        CandidatesRepository.editCandidateRemote(candidate, function () {
            callback(CandidatesView.states.SUCCESS_EDITED)
        });
    },

    /**
     * Function used to load the location fields
     */
    loadProvincesFields() {
        LocationRepository.getProvinces(function (data) {
            AddCandidate.renderListProvinces(data);
        });
    }
};

