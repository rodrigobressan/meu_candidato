var AddCandidateActions = {
    /**
     * This function is used to define the listener for when the action to remove an existing user is called
     * @param candidate the candidate to be removed
     */
    initRemoveCandidateListener(candidate) {
        AddCandidate.view.btnRemove.click(function () {
            if (isPasswordMatching(candidate.senha, AddCandidate.view.txtSenha.val())) {

                let candidate_data = AddCandidateMapper.getCandidateFormData();
                candidate_data.idcandidato = candidate.idcandidato;

                CandidatesPresenter.removeCandidate(candidate_data.idcandidato, function (status) {
                    CandidateList.removeCandidateTable(candidate_data.idcandidato);
                    AddCandidate.showDefaultMessage(AddCandidate.messages.MSG_SUCCESSFULLY_REMOVED);
                    AddCandidate.resetForm();
                    AnimationUtils.moveToBottom();
                });
            } else {
                AddCandidate.showDefaultMessage(AddCandidate.messages.MSG_INCORRECT_PASSWORD);
            }
        });
    },


    /**
     * This function is used to define the listener for when the action to edit an existing user is called
     * @param candidate the candidate to be edited
     */
    initEditCandidateListener(candidate) {
        AddCandidate.view.btnEdit.click(function () {
            if (isPasswordMatching(candidate.senha, AddCandidate.view.txtSenha.val())) {

                var candidate_data = AddCandidateMapper.getCandidateFormData();
                candidate_data.idcandidato = candidate.idcandidato;

                CandidatesPresenter.editCandidate(candidate_data, function (status) {
                    CandidateList.updateCandidateTableValue(candidate_data);
                    AddCandidate.resetForm();
                    AddCandidate.showDefaultMessage(AddCandidate.messages.MSG_SUCCESSFULLY_EDITED);
                    AnimationUtils.moveToBottom();
                });
            } else {
                AddCandidate.showDefaultMessage(AddCandidate.messages.MSG_INCORRECT_PASSWORD);
            }
        });
    },

    /**
     * This function is called when the edit mode is canceled in the middle of an edition
     */
    initCancelEditListener() {
        AddCandidate.view.btnCancel.click(function () {
            // TODO check if there is something on the form before clearing it
            AddCandidate.resetForm();
            AnimationUtils.moveToBottom();
        });
    }
};