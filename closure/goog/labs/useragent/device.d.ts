declare module goog.labs.userAgent.device {

    /**
     * Currently we detect the iPhone, iPod and Android mobiles (devices that have
     * both Android and Mobile in the user agent string).
     *
     * @return {boolean} Whether the user is using a mobile device.
     */
    export function isMobile(): boolean;

    /**
     * Currently we detect Kindle Fire, iPad, and Android tablets (devices that have
     * Android but not Mobile in the user agent string).
     *
     * @return {boolean} Whether the user is using a tablet.
     */
    export function isTablet(): boolean;

    /**
     * @return {boolean} Whether the user is using a desktop computer (which we
     *     assume to be the case if they are not using either a mobile or tablet
     *     device).
     */
    export function isDesktop(): boolean;
}
