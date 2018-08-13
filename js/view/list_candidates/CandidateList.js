var CandidateList = {
    view: {
        table: $("#candidates-table")
    },

    /**
     * Function used to create a new column with text content inside of it and adds it to a parent view
     * @param text the text to be added
     * @param parent the parent view where the column will be added
     * @returns {Element} the column with text
     */
    createColumnWithText(text, parent) {
        var column = CandidateList.createColumn();
        var textNode = document.createTextNode(text);
        column.appendChild(textNode);
        parent.appendChild(column);
        return column;
    },

    /**
     * Function used to create a simple column
     * @returns {Element} the column
     */
    createColumn() {
        return document.createElement("td");
    },

    /**
     * Function used to update a given row in the table
     * @param candidate the candidate used to find the row
     */
    updateCandidateTableValue(candidate) {
        $('table#candidates-table tr#' + candidate.idcandidato).replaceWith(CandidateList.makeCandidateTableItem(candidate));
    },

    /**
     * Function used to remove a given row in the table
     * @param candidate the candidate used to find the row
     */
    removeCandidateTable(candidate_id) {
        $('table#candidates-table tr#' + candidate_id).remove();
    },

    /**
     * Renders a single item into the candidate table
     * @param candidate the item to be rendered
     */
    makeCandidateTableItem(candidate) {
        let row = document.createElement("tr");
        row.setAttribute("id", candidate.idcandidato);

        CandidateList.createColumnWithText(candidate.nome, row);
        CandidateList.createColumnWithText(candidate.sexo, row);
        CandidateList.createColumnWithText(candidate.datanasc, row);
        CandidateList.createColumnWithText(candidate.rua, row);
        CandidateList.createColumnWithText(candidate.numero, row);
        CandidateList.createColumnWithText(candidate.cidade, row);
        CandidateList.createColumnWithText(candidate.estado, row);
        CandidateList.createColumnWithText(candidate.cpf, row);
        CandidateList.createColumnWithText(candidate.cadjus, row);
        CandidateList.createColumnWithText(candidate.email, row);

        let colActions = CandidateList.createColumn();
        let txtActions = CandidateItemActions.createViewActions(candidate);
        colActions.appendChild(txtActions);
        row.appendChild(colActions);

        return row;
    },

    /**
     * This function is used to add a given candidate to our table
     * @param candidate
     */
    addCandidateToTable(candidate) {
        var item = CandidateList.makeCandidateTableItem(candidate);

        // need to get the first element because otherwise it returns a jQuery object instead of a DOM
        CandidateList.view.table[0].appendChild(item);
    }
};
