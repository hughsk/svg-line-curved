"use strict"

module.exports            = curvedHorizontal
module.exports.vertical   = curvedVertical
module.exports.horizontal = curvedHorizontal

function curvedHorizontal(x1, y1, x2, y2) {
  var line = []

  line.push('M', x1, y1)

  var controlPts = Array.prototype.slice.call(arguments, 2)
  var lastX = x1
  var lastY = y1

  for (var i = 0; i + 1 < controlPts.length; i += 2) {
    let nextX = controlPts[i]
    let nextY = controlPts[i + 1]

    console.log('Iter', i);
    console.log('lastX', lastX, 'lastY', lastY)
    console.log('nextX', nextX, 'nextY', nextY)
    console.log(cubicHorizontalBezierCommand(lastX, lastY, nextX, nextY));

    Array.prototype.push.apply(
      line, cubicHorizontalBezierCommand(lastX, lastY, nextX, nextY)
    )
    lastX = nextX
    lastY = nextY
  }

  return line.join(' ')
}

// [mx, y1] is the starting control point in the Bezier curve.
// [mx, y2] is the ending control point in the Bezier curve.
// [x2, y2] is the final destination of the Bezier curve.
// mx is the midway point between x1 and x2.
function cubicHorizontalBezierCommand(x1, y1, x2, y2) {
  var mx = x1 + (x2 - x1) / 2
  return ['C', mx, y1, mx, y2, x2, y2];
}

function curvedVertical(x1, y1, x2, y2) {
  var line = []
  var mx = x1 + (x2 - x1) / 2
  var my = y1 + (y2 - y1) / 2

  line.push('M', x1, y1)
  line.push('C', x1, my, x2, my, x2, y2)

  return line.join(' ')
}
