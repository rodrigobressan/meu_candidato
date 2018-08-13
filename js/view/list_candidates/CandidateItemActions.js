var CandidateItemActions = {
    message: {
        EDIT_CANDIDATE: "Editar"
    },

    /**
     * This function is used to create the actions (edit) to a given candidate on the table
     * @param candidate
     * @returns {Element}
     */
    createViewActions(candidate) {
        let container = document.createElement("div");

        let btnEdit = document.createElement("input");
        btnEdit.type = "submit";
        btnEdit.value = CandidateItemActions.message.EDIT_CANDIDATE;
        btnEdit.className = "btn-info btn-xs";

        $(btnEdit).click(function () {
            AnimationUtils.moveToTop();
            if (CandidatesPresenter.isNotCurrentlyBeingEdited(candidate)) {
                current_edit_id = candidate.idcandidato;
                CandidateItemActions.initEditMode(candidate);
            }
        });

        container.appendChild(btnEdit);

        return container;
    },

    /**
     * This function is used to init the edit candidate action
     * @param candidate the candidate that is being edited
     */
    initEditMode(candidate) {
        AddCandidate.view.txtNome.val(candidate.nome);
        AddCandidate.view.txtEmail.val(candidate.email);
        AddCandidate.view.txtSexo.val(candidate.sexo);
        AddCandidate.view.txtDataNasc.val(candidate.datanasc);
        AddCandidate.view.txtCpf.val(candidate.cpf);
        AddCandidate.view.txtCadjus.val(candidate.cadjus);
        AddCandidate.view.txtBairro.val(candidate.bairro);
        AddCandidate.view.txtRua.val(candidate.rua);
        AddCandidate.view.txtNumero.val(candidate.numero);
        AddCandidateLocation.setNewLocation(candidate.estado, candidate.cidade);

        AddCandidate.view.btnSubmit.hide();
        AddCandidate.view.btnEdit.show();
        AddCandidate.view.btnRemove.show();
        AddCandidate.view.btnCancel.show();

        AddCandidateActions.initEditCandidateListener(candidate);
        AddCandidateActions.initRemoveCandidateListener(candidate);
        AddCandidateActions.initCancelEditListener();
    },
};