/**
 * This function is called once the page is loaded
 */
$(document).ready(function () {
    CandidatesPresenter.loadCandidates();
    CandidatesPresenter.loadProvincesFields();
    AddCandidate.initFormListener();
});
