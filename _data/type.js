/* references
https://github.com/KyleAMathews/typography.js/blob/master/docs/what.md
https://www.modularscale.com/
1.618 is golden  (1.272 is sq root)
1.333

*/


const basefont = "20"
const basefontRm = basefont / 20
const line = 1.5
scale = 1.618
//const scale = (1 / (ratio)).toFixed(3)
scale = Math.sqrt(scale)


const type = {}
type.xl = {}
type.lg = {}
type.md = {}
type.p = {}
type.sm = {}
type.half = {}

type.bodyfont = basefont
type.bodyfontRm = basefontRm + "rem"

/* pixel values */

type.xl.px = (Math.pow(scale, 5) * basefont).toFixed(2)
type.lg.px = (Math.pow(scale, 4) * basefont).toFixed(2)
type.md.px = (Math.pow(scale, 2) * basefont).toFixed(2)
type.p.px = basefont
type.sm.px = (basefont / scale).toFixed(2)

/* rem values */
type.xl.rm = (type.xl.px / 16) + "rem"
type.lg.rm = (type.lg.px / 16) + "rem"
type.md.rm = (type.md.px / 16) + "rem"
type.p.rm = (type.p.px / 16) + "rem"
type.sm.rm = (type.sm.px / 16) + "rem"


type.xl.line = line * 4 + "rem"
type.lg.line = line * 3 + "rem"
type.p.line = line + "rem"
type.md.line = line + "rem"
type.sm.line = line + "rem"
type.half.line = (line / 2).toFixed(2) + "rem"

/* font families must be run through safe filter in template */

type.systemFont = ' -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'


module.exports = type