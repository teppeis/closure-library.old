declare module goog.vec.Vec3 {

    /** @typedef {goog.vec.Float32} */
    export interface Float32 {
    }

    /** @typedef {goog.vec.Float64} */
    export interface Float64 {
    }

    /** @typedef {goog.vec.Number} */
    export interface Number {
    }

    /** @typedef {goog.vec.AnyType} */
    export interface AnyType {
    }

    /** @typedef {Float32Array} */
    export interface Type {
    }

    /** @typedef {goog.vec.ArrayType} */
    export interface Vec3Like {
    }

    /**
     * Creates a 3 element vector of Float32. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec3.Float32} The new 3 element array.
     */
    export function createFloat32(): goog.vec.Vec3.Float32;

    /**
     * Creates a 3 element vector of Float64. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec3.Float64} The new 3 element array.
     */
    export function createFloat64(): goog.vec.Vec3.Float64;

    /**
     * Creates a 3 element vector of Number. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec3.Number} The new 3 element array.
     */
    export function createNumber(): goog.vec.Vec3.Number;

    /**
     * Creates a 3 element vector of Float32Array. The array is initialized to zero.
     *
     * @deprecated Use createFloat32.
     * @return {!goog.vec.Vec3.Type} The new 3 element array.
     */
    export function create(): goog.vec.Vec3.Type;

    /**
     * Creates a new 3 element FLoat32 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec3.AnyType} vec The source 3 element array.
     * @return {!goog.vec.Vec3.Float32} The new 3 element array.
     */
    export function createFloat32FromArray(vec: goog.vec.Vec3.AnyType): goog.vec.Vec3.Float32;

    /**
     * Creates a new 3 element Float32 vector initialized with the supplied values.
     *
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @return {!goog.vec.Vec3.Float32} The new vector.
     */
    export function createFloat32FromValues(v0: number, v1: number, v2: number): goog.vec.Vec3.Float32;

    /**
     * Creates a clone of the given 3 element Float32 vector.
     *
     * @param {goog.vec.Vec3.Float32} vec The source 3 element vector.
     * @return {!goog.vec.Vec3.Float32} The new cloned vector.
     */
    export function cloneFloat32(vec: goog.vec.Vec3.Float32): goog.vec.Vec3.Float32;

    /**
     * Creates a new 3 element Float64 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec3.AnyType} vec The source 3 element array.
     * @return {!goog.vec.Vec3.Float64} The new 3 element array.
     */
    export function createFloat64FromArray(vec: goog.vec.Vec3.AnyType): goog.vec.Vec3.Float64;

    /**
    * Creates a new 3 element Float64 vector initialized with the supplied values.
    *
    * @param {number} v0 The value for element at index 0.
    * @param {number} v1 The value for element at index 1.
    * @param {number} v2 The value for element at index 2.
    * @return {!goog.vec.Vec3.Float64} The new vector.
    */
    export function createFloat64FromValues(v0: number, v1: number, v2: number): goog.vec.Vec3.Float64;

    /**
     * Creates a clone of the given 3 element vector.
     *
     * @param {goog.vec.Vec3.Float64} vec The source 3 element vector.
     * @return {!goog.vec.Vec3.Float64} The new cloned vector.
     */
    export function cloneFloat64(vec: goog.vec.Vec3.Float64): goog.vec.Vec3.Float64;

    /**
     * Creates a new 3 element vector initialized with the value from the given
     * array.
     *
     * @deprecated Use createFloat32FromArray.
     * @param {goog.vec.Vec3.Vec3Like} vec The source 3 element array.
     * @return {!goog.vec.Vec3.Type} The new 3 element array.
     */
    export function createFromArray(vec: goog.vec.Vec3.Vec3Like): goog.vec.Vec3.Type;

    /**
     * Creates a new 3 element vector initialized with the supplied values.
     *
     * @deprecated Use createFloat32FromValues.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @return {!goog.vec.Vec3.Type} The new vector.
     */
    export function createFromValues(v0: number, v1: number, v2: number): goog.vec.Vec3.Type;

    /**
     * Creates a clone of the given 3 element vector.
     *
     * @deprecated Use cloneFloat32.
     * @param {goog.vec.Vec3.Vec3Like} vec The source 3 element vector.
     * @return {!goog.vec.Vec3.Type} The new cloned vector.
     */
    export function clone(vec: goog.vec.Vec3.Vec3Like): goog.vec.Vec3.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.Vec3.AnyType} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @return {!goog.vec.Vec3.AnyType} Return vec so that operations can be
     *     chained together.
     */
    export function setFromValues(vec: goog.vec.Vec3.AnyType, v0: number, v1: number, v2: number): goog.vec.Vec3.AnyType;

    /**
     * Initializes the vector with the given array of values.
     *
     * @param {goog.vec.Vec3.AnyType} vec The vector to receive the
     *     values.
     * @param {goog.vec.Vec3.AnyType} values The array of values.
     * @return {!goog.vec.Vec3.AnyType} Return vec so that operations can be
     *     chained together.
     */
    export function setFromArray(vec: goog.vec.Vec3.AnyType, values: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The first addend.
     * @param {goog.vec.Vec3.AnyType} vec1 The second addend.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function add(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The minuend.
     * @param {goog.vec.Vec3.AnyType} vec1 The subtrahend.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function subtract(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The vector to negate.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function negate(vec0: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function abs(vec0: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function scale(vec0: goog.vec.Vec3.AnyType, scalar: number, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    export function magnitudeSquared(vec0: goog.vec.Vec3.AnyType): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    export function magnitude(vec0: goog.vec.Vec3.AnyType): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The vector to normalize.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function normalize(vec0: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.Vec3.AnyType} v0 The first vector.
     * @param {goog.vec.Vec3.AnyType} v1 The second vector.
     * @return {number} The scalar product.
     */
    export function dot(v0: goog.vec.Vec3.AnyType, v1: goog.vec.Vec3.AnyType): number;

    /**
     * Computes the vector (cross) product of v0 and v1 storing the result into
     * resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} v0 The first vector.
     * @param {goog.vec.Vec3.AnyType} v1 The second vector.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results. May be either v0 or v1.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function cross(v0: goog.vec.Vec3.AnyType, v1: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Returns the squared distance between two points.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 First point.
     * @param {goog.vec.Vec3.AnyType} vec1 Second point.
     * @return {number} The squared distance between the points.
     */
    export function distanceSquared(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType): number;

    /**
     * Returns the distance between two points.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 First point.
     * @param {goog.vec.Vec3.AnyType} vec1 Second point.
     * @return {number} The distance between the points.
     */
    export function distance(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType): number;

    /**
     * Returns a unit vector pointing from one point to another.
     * If the input points are equal then the result will be all zeros.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 Origin point.
     * @param {goog.vec.Vec3.AnyType} vec1 Target point.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function direction(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Linearly interpolate from vec0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.Vec3.AnyType} v0 The first vector.
     * @param {goog.vec.Vec3.AnyType} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function lerp(v0: goog.vec.Vec3.AnyType, v1: goog.vec.Vec3.AnyType, f: number, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec3.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function max(vec0: goog.vec.Vec3.AnyType, limit: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec3.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    export function min(vec0: goog.vec.Vec3.AnyType, limit: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.Vec3.AnyType} v0 The first vector.
     * @param {goog.vec.Vec3.AnyType} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    export function equals(v0: goog.vec.Vec3.AnyType, v1: goog.vec.Vec3.AnyType): boolean;
}
