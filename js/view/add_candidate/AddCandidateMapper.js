var AddCandidateMapper = {
    /**
     * This function is used to retrieve all the form data into a single object
     * @returns the object containing the candidate
     */
    getCandidateFormData() {
        let candidate = {
            nome: AddCandidate.view.txtNome.val(),
            sexo: AddCandidate.view.txtSexo.val(),
            dataNasc: AddCandidate.view.txtDataNasc.val(),
            rua: AddCandidate.view.txtRua.val(),
            numero: AddCandidate.view.txtNumero.val(),
            cidade: $("#cidades option:selected").text(),
            estado: $("#estados option:selected").text(),
            bairro: AddCandidate.view.txtBairro.val(),
            cpf: AddCandidate.view.txtCpf.val(),
            cadjus: AddCandidate.view.txtCadjus.val(),
            email: AddCandidate.view.txtEmail.val(),
            senha: AddCandidate.view.txtSenha.val()
        };

        return candidate;
    }
};