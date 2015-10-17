# svg-line-curved
![](http://img.shields.io/badge/stability-stable-green.svg?style=flat)
![](http://img.shields.io/npm/v/svg-line-curved.svg?style=flat)
![](http://img.shields.io/npm/dm/svg-line-curved.svg?style=flat)
![](http://img.shields.io/npm/l/svg-line-curved.svg?style=flat)

Generate the path attribute for a curved SVG line between two points:

![svg-line-curved](http://i.imgur.com/5fhLtZ8.png)

## Usage

[![NPM](https://nodei.co/npm/svg-line-curved.png)](https://nodei.co/npm/svg-line-curved/)

### `path = curve(x1, y1, x2, y2)`

Returns a path attribute for the line between `(x1, y1)` and `(x2, y2)`.

For example:

``` javascript
var createSVG = require('svg-create-element')
var curved = require('svg-line-curved')
var path = createSVG('path')

path.setAttribute('d', curved(0, 0, 100, 100))
```

### `path = curve.vertical(x1, y1, x2, y2)`

Equivalent to `curve(x1, y1, x2, y2)`, but curving with a vertical bias instead
of a horizontal one.

Here's an example screenshot of horizontal and vertical curves respectively:

![horizontal](http://i.imgur.com/uveU8eZ.png)
![vertical](http://i.imgur.com/NJIfMg1.png)

You can give as many pairs of points as you want to produce a path that connects them all with bezier curves. e.g.:

### `path = curve(0,0, 100,100, 300,50, 500,200)`

<svg>
  <path d="M 0 0 C 50 0 50 100 100 100 C 200 100 200 50 300 50 C 400 50 400 200 500 200" style="fill: none; stroke-width: 2px; stroke: black;"></path>
</svg>

## Tests

Run tests with `make test`.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/svg-line-curved/blob/master/LICENSE.md) for details.

## See Also

* [svg-line-step](http://github.com/hughsk/svg-line-step)
