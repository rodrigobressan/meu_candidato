var AnimationUtils = {
    /**
     * Animate to the specified div
     * @param divName div to focus
     */
    moveToDiv(divName) {
        $('html, body').animate({
            scrollTop: $("#" + divName).offset().top
        }, 300);
    },

    /**
     * Animate to the bottom
     */
    moveToBottom() {
        AnimationUtils.moveToDiv("bottom");
    },

    /**
     * Animate to the top
     */
    moveToTop() {
        AnimationUtils.moveToDiv("top");
    }
};