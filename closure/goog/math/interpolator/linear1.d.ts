declare module goog.math.interpolator {

    /**
     * A one dimensional linear interpolator.
     * @implements {goog.math.interpolator.Interpolator1}
     * @constructor
     * @final
     */
    export class Linear1 {
        constructor();
        
        /** @override */
        setData(): void;
        
        /** @override */
        interpolate(): void;
        
        /** @override */
        getInverse(): void;
    }
}
