/**
 * Created by jtonic on 11.10.2015.
 */
var findSum = (x, y) => x + y;

var findSub = (x, y) => x - y;

exports.math = {
    sum: function (x, y) {
        return findSum(x, y);
    },
    sub: function (x, y) {
        return findSub(x, y);
    }
};
