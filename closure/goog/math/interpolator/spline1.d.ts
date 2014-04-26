declare module goog.math.interpolator {

    /**
     * A one dimensional cubic spline interpolator with natural boundary conditions.
     * @implements {goog.math.interpolator.Interpolator1}
     * @constructor
     */
    export class Spline1 {
        constructor();
        
        /** @override */
        setData(): void;
        
        /** @override */
        interpolate(): void;
        
        /**
         * Computes the derivative at each point of the spline such that
         * the curve is C2. It uses not-a-knot boundary conditions.
         * @param {Array.<number>} dx The spacing between consecutive data points.
         * @param {Array.<number>} slope The slopes between consecutive data points.
         * @return {!Array.<number>} The Spline derivative at each data point.
         * @protected
         */
        computeDerivatives(dx: Array<number>, slope: Array<number>): Array<number>;
        
        /**
         * Note that the inverse of a cubic spline is not a cubic spline in general.
         * As a result the inverse implementation is only approximate. In
         * particular, it only guarantees the exact inverse at the original input data
         * points passed to setData.
         * @override
         */
        getInverse(): void;
    }
}
