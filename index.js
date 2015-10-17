var curvedHorizontal = createCurved(cubicHorizontalBezierCommand)
var curvedVertical = createCurved(cubicVerticalBezierCommand)

module.exports            = curvedHorizontal
module.exports.vertical   = curvedVertical
module.exports.horizontal = curvedHorizontal

function createCurved(bezierCommandFn) {
  function curved(x1, y1, x2, y2) {
    var line = []

    line.push('M', x1, y1)

    var controlPts = Array.prototype.slice.call(arguments, 2)
    var lastX = x1
    var lastY = y1
    var nextX
    var nextY

    for (var i = 0; i + 1 < controlPts.length; i += 2) {
      nextX = controlPts[i]
      nextY = controlPts[i + 1]

      Array.prototype.push.apply(
        line, bezierCommandFn(lastX, lastY, nextX, nextY)
      )
      lastX = nextX
      lastY = nextY
    }

    return line.join(' ')
  }
  return curved;
}

// [mx, y1] is the starting control point in the Bezier curve.
// [mx, y2] is the ending control point in the Bezier curve.
// [x2, y2] is the final destination of the Bezier curve.
// mx is the midway point between x1 and x2.
function cubicHorizontalBezierCommand(x1, y1, x2, y2) {
  var mx = x1 + (x2 - x1) / 2
  return ['C', mx, y1, mx, y2, x2, y2];
}

function cubicVerticalBezierCommand(x1, y1, x2, y2) {
  var my = y1 + (y2 - y1) / 2
  return ['C', x1, my, x2, my, x2, y2];
}
