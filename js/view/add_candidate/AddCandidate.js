var AddCandidate = {
    view: {
        form: $("#formCadastro"),

        btnEdit: $("#edit"),
        btnCancel: $("#cancel"),
        btnRemove: $("#remove"),
        btnSubmit: $("#submit"),

        txtNome: $("#txtName"),
        txtSexo: $("#txtSexo"),
        txtDataNasc: $("#txtNascimento"),
        txtRua: $("#txtRua"),
        txtNumero: $("#txtNumero"),
        txtBairro: $("#txtBairro"),
        txtCpf: $("#txtCpf"),
        txtCadjus: $("#txtCadjus"),
        txtEmail: $("#txtEmail"),
        txtSenha: $("#txtSenha"),
        txtSenhaConfirma: $("#txtSenhaConfirma"),

        txtStatus: $("#spanStatus")
    },
    messages: {
        MSG_SUCCESSFULLY_REMOVED: "Removido com sucesso",
        MSG_SUCCESSFULLY_EDITED: "Senha incorreta",
        MSG_INCORRECT_PASSWORD: "Senha incorreta"
    },

    /**
     * This function is used to reset the add form to its original state
     */
    resetForm() {
        current_edit_id = -1;

        AddCandidate.view.form[0].reset();
        AddCandidate.view.btnEdit.hide();
        AddCandidate.view.btnCancel.hide();
        AddCandidate.view.btnRemove.hide();
        AddCandidate.view.btnSubmit.show();
    },

    /**
     * This method is used to render the list of all the provinces
     * @param estados the received list of provinces
     */
    renderListProvinces(estados) {
        AddCandidateLocation.renderListProvinces(estados)
    },

    /**
     * This function is used to show a default message to the user (Success, failed, invalid inputs, etc)
     * @param message the message to show
     */
    showDefaultMessage(message) {
        AddCandidate.view.txtStatus.text(message);
    },

    /**
     * This function is used to initialize the email listener, mostly to validate the received input
     */
    initEmailListener() {
        AddCandidate.view.txtEmail.on('change keyup paste', function () {
            if (!isEmailValid(AddCandidate.view.txtEmail.val())) {
                makeFieldInvalid(AddCandidate.view.txtEmail);
            } else {
                makeFieldValid(AddCandidate.view.txtEmail);
            }
        });
    },

    /**
     * This function is used to initialize the CadJus listener, mostly to validate the received input
     */
    initCadjusListener() {
        AddCandidate.view.txtCadjus.on('change keyup paste', function () {
            if (!isCadjusValid(AddCandidate.view.txtCadjus.val())) {
                makeFieldInvalid(AddCandidate.view.txtCadjus);
            } else {
                makeFieldValid(AddCandidate.view.txtCadjus);
            }
        });
    },

    /**
     * This function is used to initialize the CPF field listener, mostly to validate the received input
     */
    initCpfListener() {
        AddCandidate.view.txtCpf.on('change keyup paste', function () {
            if (!isCpfValid(AddCandidate.view.txtCpf.val())) {
                makeFieldInvalid(AddCandidate.view.txtCpf);
            } else {
                makeFieldValid(AddCandidate.view.txtCpf);
            }
        });
    },

    /**
     * This function is used to initialize the name field listener, mostly to validate the received input
     */
    initNameListener() {
        AddCandidate.view.txtNome.on('change keyup paste', function () {
            if (!isNameValid(AddCandidate.view.txtNome.val())) {
                makeFieldInvalid(AddCandidate.view.txtNome);
            } else {
                makeFieldValid(AddCandidate.view.txtNome);
            }
        });
    },

    /**
     * This function is used to initialize the birth field listener, mostly to validate the received input
     */
    initBirthdayListener() {
        AddCandidate.view.txtDataNasc.on('change keyup paste', function () {
            if (!isBirthdayValid(AddCandidate.view.txtDataNasc.val())) {
                makeFieldInvalid(AddCandidate.view.txtDataNasc);
            } else {
                makeFieldValid(AddCandidate.view.txtDataNasc);
            }
        });
    },

    /**
     * This function is used to initialize the birth field listener, mostly to validate the received input
     */
    initPasswordListener() {
        AddCandidate.view.txtSenhaConfirma.on('change keyup paste', function () {
            if (!isPasswordMatching(AddCandidate.view.txtSenha.val(), AddCandidate.view.txtSenhaConfirma.val())) {
                makeFieldInvalid(AddCandidate.view.txtSenhaConfirma);
            } else {
                makeFieldValid(AddCandidate.view.txtSenhaConfirma);
            }
        });
    },

    /**
     * This function is used to set up the listeners for our form to add new candidates.
     *
     * Question: callbacks vs direct call on Presenter???
     */
    initFormListener() {
        AddCandidate.view.form.on("submit", function (event) {
            event.preventDefault();
            let candidate = AddCandidateMapper.getCandidateFormData();
            CandidatesPresenter.addCandidate(candidate, function (RETURN_CODE) {
                CandidatesView.processAddCandidateResponse(RETURN_CODE, candidate);
            });
        });

        AddCandidate.initEmailListener();
        AddCandidate.initNameListener();
        AddCandidate.initCadjusListener();
        AddCandidate.initCpfListener();
        AddCandidate.initBirthdayListener();
        AddCandidate.initPasswordListener();
    }

};

