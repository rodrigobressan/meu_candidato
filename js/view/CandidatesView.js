// first thing to do, so on top of file :-)
AddCandidate.resetForm();

var CandidatesView = {
    view: {},
    messages: {
        MSG_INVALID_FORM: "Por favor, preencha o formulário corretamente",
        MSG_SERVER_OFF: "Erro ao comunicar-se com o servidor. Por favor, tente novamente mais tarde.",
        MSG_ERROR_DEFAULT: "Algo de errado aconteceu. Tente novamente mais tarde.",
        MSG_EMPTY_CANDIDATES: "Não há candidatos cadastrados!"
    },
    states: {
        ERROR_INVALID_FORM: 0,
        ERROR_SERVER_OFF: 1,
        SUCCESS_ADDED: 2,
        SUCCESS_EDITED: 3,
        SUCCESS_REMOVED: 4
    },

    /**
     * This function is used to render our received candidates list into the screen
     */
    renderListCandidates(candidates) {
        if (isIterable(candidates)) {
            for (const candidate of candidates) {
                CandidateList.addCandidateToTable(candidate);
            }
        } else {
            AddCandidate.showDefaultMessage(CandidatesView.messages.MSG_EMPTY_CANDIDATES)
        }
    },

    /**
     * This function is used to process the received response to the action of adding a new user
     * @param RETURN_CODE the response code of the action
     * @param candidate the candidate (if any)
     */
    processAddCandidateResponse(RETURN_CODE, candidate) {
        switch (RETURN_CODE) {
            case CandidatesView.states.ERROR_INVALID_FORM:
                AddCandidate.showDefaultMessage(CandidatesView.messages.MSG_INVALID_FORM);
                break;

            case CandidatesView.states.ERROR_SERVER_OFF:
                AddCandidate.showDefaultMessage(CandidatesView.messages.MSG_SERVER_OFF);
                break;

            case CandidatesView.states.SUCCESS_ADDED:
                CandidateList.addCandidateToTable(candidate);
                AnimationUtils.moveToBottom();
                break;

            default:
                AddCandidate.showDefaultMessage(CandidatesView.messages.MSG_ERROR_DEFAULT);
                break;
        }
    },
};
