
/**
 * Expose `thunkify()`.
 */

module.exports = thunkify;

/**
 * Wrap a regular callback `fn` as a thunk.
 *
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

var arr_cast = Array.prototype.slice;

function thunkify(fn){
  return function(){
    var args = arr_cast.call(arguments);

    return function(cb){
			args.push(cb);
			fn.apply(this, args);
    }

	}
};
