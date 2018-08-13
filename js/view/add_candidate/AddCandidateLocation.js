var AddCandidateLocation = {

    view: {
        listStates: $("#estados"),
        listCities: $("#cidades"),
    },
    messages: {
        SELECT_STATE: "Selecione o estado"
    },

    data: {
        provinces: null
    },

    /**
     * This function is used to render the cities selector based on a given province
     * @param provinces all the location data
     * @param selectedProvince the current province
     * @returns {string} the html containing the selector data
     */
    renderCitiesSelector(provinces, selectedProvince) {
        var optionsCities = '';
        provinces.forEach(function (province) {
            if (province.sigla == selectedProvince) {
                province.cidades.forEach(function (city) {
                    optionsCities += '<option value="' + city + '">' + city + '</option>';
                })
            }
        });

        return optionsCities;
    },

    /**
     * This function is used to init the change listener for the option select for 'Estado'
     * @param provinces the provinces list with the associated cities
     */
    initStateChangeListener(provinces) {
        AddCandidateLocation.view.listStates.change(function () {

            let selected = $("#estados option:selected").text();
            var optionsCities = AddCandidateLocation.renderCitiesSelector(provinces, selected);

            $("#cidades").html(optionsCities);
        }).change();
    },

    /**
     * This function is used (as the name says) to set a new location on the add form
     * @param state the new state/province
     * @param city the new city
     */
    setNewLocation(state, city) {
        AddCandidateLocation.view.listStates.val(state);

        var optionsCities = AddCandidateLocation.renderCitiesSelector(AddCandidateLocation.data.provinces, state);

        AddCandidateLocation.view.listCities.html(optionsCities);
        AddCandidateLocation.view.listCities.val(city);
    },

    /**
     * This method is used to render the list of all the provinces
     * @param estados the received list of provinces
     */
    renderListProvinces(estados) {
        AddCandidateLocation.data.provinces = estados;

        let options = '<option value="">' + AddCandidateLocation.messages.SELECT_STATE + '</option>';

        $.each(estados, function (key, val) {
            options += '<option value="' + val.sigla + '">' + val.sigla + '</option>';
        });

        AddCandidateLocation.view.listStates.html(options);
        AddCandidateLocation.initStateChangeListener(estados);
    }
};