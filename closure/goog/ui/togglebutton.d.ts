declare module goog.ui {

    /**
     * A toggle button, with checkbox-like semantics.  Rendered using
     * {@link goog.ui.CustomButtonRenderer} by default, though any
     * {@link goog.ui.ButtonRenderer} would work.
     *
     * @param {goog.ui.ControlContent} content Text caption or existing DOM
     *     structure to display as the button's caption.
     * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
     *     decorate the button; defaults to {@link goog.ui.CustomButtonRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Button}
     */
    export class ToggleButton extends goog.ui.Button {
        constructor(content: goog.ui.ControlContent, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}
