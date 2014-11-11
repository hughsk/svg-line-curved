var createSVG = require('svg-create-element')
var mousePos = require('mouse-position')
var horizontal = require('./').horizontal
var vertical = require('./').vertical
var raf = require('raf')

var svg = createSVG('svg')
var path1 = createSVG('path')
var path2 = createSVG('path')
var mouse = mousePos(svg)
var width = window.innerWidth
var height = window.innerWidth

svg.setAttribute('width', width)
svg.setAttribute('height', height)
path1.setAttribute('fill', 'none')
path1.setAttribute('stroke', '#f00')
path2.setAttribute('fill', 'none')
path2.setAttribute('stroke', '#00f')
path2.setAttribute('opacity', '0.2')

document.body.appendChild(svg)
svg.appendChild(path1)
svg.appendChild(path2)

raf(update)
function update() {
  var width = window.innerWidth
  var height = window.innerHeight

  raf(update)

  path1.setAttribute('d', horizontal(width / 2, height / 2, mouse.x, mouse.y))
  path2.setAttribute('d', vertical(width / 2, height / 2, mouse.x, mouse.y))
}
