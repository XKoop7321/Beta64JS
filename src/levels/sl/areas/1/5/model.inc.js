import * as Gbi from "../../../../../include/gbi"
import {
    snow_09000800} from "../../../../../textures/snow"
const sl_seg7_lights_07007910 = Gbi.gdSPDefLights1(
	    0x7f, 0x7f, 0x7f,
	    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
)

const sl_seg7_vertex_07007928 = [
	{ pos: [ 3967, 1638, 4054 ], flag: 0, tc: [ 0, 172 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 4582, 1843, 4156 ], flag: 0, tc: [ -1256, -236 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 4786, 1638, 4054 ], flag: 0, tc: [ -1666, 172 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 4786, 1434, 4054 ], flag: 0, tc: [ 0, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1638, 5078 ], flag: 0, tc: [ 2012, 172 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1434, 5078 ], flag: 0, tc: [ 2012, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1638, 4054 ], flag: 0, tc: [ 0, 172 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 3967, 1434, 4054 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4786, 1638, 4054 ], flag: 0, tc: [ -1666, 172 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4786, 1434, 4054 ], flag: 0, tc: [ -1666, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 3967, 1638, 4054 ], flag: 0, tc: [ 0, 172 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4582, 1843, 4156 ], flag: 0, tc: [ 172, -236 ], color: [ 90, 89, 0, 255 ] },
	{ pos: [ 4582, 1843, 5078 ], flag: 0, tc: [ 2012, -236 ], color: [ 90, 89, 0, 255 ] },
	{ pos: [ 4786, 1638, 5078 ], flag: 0, tc: [ 2012, 172 ], color: [ 90, 89, 0, 255 ] },
	{ pos: [ 4786, 1638, 4054 ], flag: 0, tc: [ 0, 172 ], color: [ 90, 89, 0, 255 ] },
]

const sl_seg7_vertex_07007A18 = [
	{ pos: [ 4582, 1434, 4873 ], flag: 0, tc: [ 1604, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4786, 1229, 4873 ], flag: 0, tc: [ 1604, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4582, 1229, 4873 ], flag: 0, tc: [ 1604, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 3967, 1638, 4054 ], flag: 0, tc: [ 0, 172 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 4172, 1843, 4156 ], flag: 0, tc: [ -438, -236 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 4582, 1843, 4156 ], flag: 0, tc: [ -1256, -236 ], color: [ 0, 56, 143, 255 ] },
	{ pos: [ 3967, 1638, 5078 ], flag: 0, tc: [ 2012, 172 ], color: [ 167, 89, 0, 255 ] },
	{ pos: [ 4172, 1843, 4156 ], flag: 0, tc: [ 172, -236 ], color: [ 167, 89, 0, 255 ] },
	{ pos: [ 3967, 1638, 4054 ], flag: 0, tc: [ 0, 172 ], color: [ 167, 89, 0, 255 ] },
	{ pos: [ 4172, 1843, 5078 ], flag: 0, tc: [ 2012, -236 ], color: [ 167, 89, 0, 255 ] },
	{ pos: [ 4786, 1434, 4873 ], flag: 0, tc: [ 1604, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4786, 1434, 4873 ], flag: 0, tc: [ 1604, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1229, 5078 ], flag: 0, tc: [ 2012, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1229, 4873 ], flag: 0, tc: [ 1604, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1434, 5078 ], flag: 0, tc: [ 2012, 582 ], color: [ 127, 0, 0, 255 ] },
]

const sl_seg7_vertex_07007B08 = [
	{ pos: [ 3967, 1434, 4668 ], flag: 0, tc: [ 1194, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1229, 4054 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1229, 4668 ], flag: 0, tc: [ 1194, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1229, 5078 ], flag: 0, tc: [ 2012, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1434, 4873 ], flag: 0, tc: [ 1604, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1229, 4873 ], flag: 0, tc: [ 1604, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1434, 5078 ], flag: 0, tc: [ 2012, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4786, 1229, 4054 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1434, 4668 ], flag: 0, tc: [ 1194, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1229, 4668 ], flag: 0, tc: [ 1194, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1434, 4054 ], flag: 0, tc: [ 0, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4786, 1434, 4668 ], flag: 0, tc: [ -1666, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3967, 1434, 4668 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3967, 1229, 4668 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4786, 1229, 4668 ], flag: 0, tc: [ -1666, 990 ], color: [ 0, 0, 127, 255 ] },
]

const sl_seg7_vertex_07007BF8 = [
	{ pos: [ 4377, 1434, 4873 ], flag: 0, tc: [ 1604, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4377, 1638, 4668 ], flag: 0, tc: [ 1194, 172 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4377, 1434, 4668 ], flag: 0, tc: [ 1194, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1434, 4668 ], flag: 0, tc: [ 1194, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1434, 4054 ], flag: 0, tc: [ 0, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1229, 4054 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4172, 1434, 4873 ], flag: 0, tc: [ -438, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4377, 1638, 4873 ], flag: 0, tc: [ -848, 172 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4377, 1229, 4873 ], flag: 0, tc: [ -848, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4172, 1843, 4873 ], flag: 0, tc: [ -438, -236 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4582, 1843, 4873 ], flag: 0, tc: [ -1256, -236 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4582, 1638, 4873 ], flag: 0, tc: [ -1256, 172 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4377, 1638, 4873 ], flag: 0, tc: [ 1604, 172 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1434, 4873 ], flag: 0, tc: [ 1604, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4172, 1434, 4668 ], flag: 0, tc: [ 1194, 1396 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4172, 1434, 4873 ], flag: 0, tc: [ 1604, 1396 ], color: [ 0, 129, 0, 255 ] },
]

const sl_seg7_vertex_07007CF8 = [
	{ pos: [ 4377, 1434, 4668 ], flag: 0, tc: [ -848, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4172, 1843, 4668 ], flag: 0, tc: [ -438, -236 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4172, 1434, 4668 ], flag: 0, tc: [ -438, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4377, 1638, 4668 ], flag: 0, tc: [ -848, 172 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4172, 1434, 4668 ], flag: 0, tc: [ 1194, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4172, 1843, 4873 ], flag: 0, tc: [ 1604, -236 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4172, 1434, 4873 ], flag: 0, tc: [ 1604, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4172, 1843, 4668 ], flag: 0, tc: [ 1194, -236 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4377, 1434, 4668 ], flag: 0, tc: [ 1194, 1806 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4786, 1434, 4668 ], flag: 0, tc: [ 1194, 2624 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4786, 1434, 4873 ], flag: 0, tc: [ 1604, 2624 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4582, 1434, 4873 ], flag: 0, tc: [ 1604, 2214 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4479, 1229, 4259 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4479, 1843, 4259 ], flag: 0, tc: [ -1052, -236 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4274, 1843, 4259 ], flag: 0, tc: [ -644, -236 ], color: [ 0, 0, 127, 255 ] },
]

const sl_seg7_vertex_07007DE8 = [
	{ pos: [ 3967, 1434, 4873 ], flag: 0, tc: [ 1604, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 3967, 1434, 4668 ], flag: 0, tc: [ 1194, 990 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4172, 1434, 4668 ], flag: 0, tc: [ 1194, 1396 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4274, 1229, 4463 ], flag: 0, tc: [ -644, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4479, 1843, 4463 ], flag: 0, tc: [ -1052, -236 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4479, 1229, 4463 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4274, 1843, 4463 ], flag: 0, tc: [ -644, -236 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4479, 1229, 4463 ], flag: 0, tc: [ 786, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4479, 1843, 4259 ], flag: 0, tc: [ 376, -236 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4479, 1229, 4259 ], flag: 0, tc: [ 376, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4479, 1843, 4463 ], flag: 0, tc: [ 786, -236 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4479, 1229, 4259 ], flag: 0, tc: [ -1052, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4274, 1843, 4259 ], flag: 0, tc: [ -644, -236 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4274, 1229, 4259 ], flag: 0, tc: [ -644, 990 ], color: [ 0, 0, 127, 255 ] },
]

const sl_seg7_vertex_07007EC8 = [
	{ pos: [ 4377, 1434, 5078 ], flag: 0, tc: [ -848, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3967, 1229, 5078 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4377, 1229, 5078 ], flag: 0, tc: [ -848, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4274, 1229, 4259 ], flag: 0, tc: [ 376, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4274, 1843, 4463 ], flag: 0, tc: [ 786, -236 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4274, 1229, 4463 ], flag: 0, tc: [ 786, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4274, 1843, 4259 ], flag: 0, tc: [ 376, -236 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4274, 1843, 4463 ], flag: 0, tc: [ 376, 224 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4274, 1843, 4259 ], flag: 0, tc: [ 786, 224 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4172, 1843, 4156 ], flag: 0, tc: [ 990, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4172, 1843, 4668 ], flag: 0, tc: [ 0, 0 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4479, 1843, 4463 ], flag: 0, tc: [ 376, 734 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4582, 1843, 4156 ], flag: 0, tc: [ 990, 990 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4479, 1843, 4259 ], flag: 0, tc: [ 786, 734 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4582, 1843, 4668 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 127, 0, 255 ] },
]

const sl_seg7_vertex_07007FB8 = [
	{ pos: [ 4582, 1229, 5078 ], flag: 0, tc: [ 2012, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4582, 1434, 5078 ], flag: 0, tc: [ 2012, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4582, 1434, 4873 ], flag: 0, tc: [ 1604, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4377, 1434, 5078 ], flag: 0, tc: [ -848, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3967, 1434, 5078 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3967, 1229, 5078 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3967, 1434, 4873 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4377, 1229, 4873 ], flag: 0, tc: [ -848, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 3967, 1229, 4873 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4172, 1434, 4873 ], flag: 0, tc: [ -438, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4786, 1229, 5078 ], flag: 0, tc: [ -1666, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4786, 1434, 5078 ], flag: 0, tc: [ -1666, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4582, 1434, 5078 ], flag: 0, tc: [ -1256, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4582, 1229, 5078 ], flag: 0, tc: [ -1256, 990 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4582, 1229, 4873 ], flag: 0, tc: [ 1604, 990 ], color: [ 129, 0, 0, 255 ] },
]

const sl_seg7_vertex_070080A8 = [
	{ pos: [ 4274, 1434, 4259 ], flag: 0, tc: [ 376, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4274, 1434, 4054 ], flag: 0, tc: [ 0, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4274, 1229, 4054 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4377, 1229, 5078 ], flag: 0, tc: [ 2012, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4377, 1434, 4873 ], flag: 0, tc: [ 1604, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4377, 1434, 5078 ], flag: 0, tc: [ 2012, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4377, 1229, 4873 ], flag: 0, tc: [ 1604, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4582, 1434, 5078 ], flag: 0, tc: [ 2012, 2214 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4377, 1434, 5078 ], flag: 0, tc: [ 2012, 1806 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4582, 1434, 4873 ], flag: 0, tc: [ 1604, 2214 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4377, 1434, 4668 ], flag: 0, tc: [ 1194, 1806 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4786, 1434, 4054 ], flag: 0, tc: [ -1666, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4274, 1229, 4054 ], flag: 0, tc: [ -644, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4274, 1434, 4054 ], flag: 0, tc: [ -644, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4786, 1229, 4054 ], flag: 0, tc: [ -1666, 990 ], color: [ 0, 0, 129, 255 ] },
]

const sl_seg7_vertex_07008198 = [
	{ pos: [ 4274, 1229, 4259 ], flag: 0, tc: [ -644, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4070, 1434, 4259 ], flag: 0, tc: [ -234, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4274, 1434, 4259 ], flag: 0, tc: [ -644, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4274, 1434, 4259 ], flag: 0, tc: [ 376, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4274, 1229, 4054 ], flag: 0, tc: [ 0, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4274, 1229, 4259 ], flag: 0, tc: [ 376, 990 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1229, 4054 ], flag: 0, tc: [ 0, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4070, 1434, 4054 ], flag: 0, tc: [ -234, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4070, 1229, 4054 ], flag: 0, tc: [ -234, 990 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 3967, 1434, 4054 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 0, 129, 255 ] },
	{ pos: [ 4070, 1229, 4259 ], flag: 0, tc: [ 376, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4070, 1434, 4054 ], flag: 0, tc: [ 0, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4070, 1434, 4259 ], flag: 0, tc: [ 376, 582 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4070, 1229, 4054 ], flag: 0, tc: [ 0, 990 ], color: [ 127, 0, 0, 255 ] },
	{ pos: [ 4070, 1229, 4259 ], flag: 0, tc: [ -234, 990 ], color: [ 0, 0, 129, 255 ] },
]

const sl_seg7_vertex_07008288 = [
	{ pos: [ 4786, 1229, 4873 ], flag: 0, tc: [ 1604, 2624 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4786, 1229, 5078 ], flag: 0, tc: [ 2012, 2624 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4582, 1229, 4873 ], flag: 0, tc: [ 1604, 2214 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4274, 1434, 4259 ], flag: 0, tc: [ 376, 1602 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4070, 1434, 4054 ], flag: 0, tc: [ 0, 1192 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4274, 1434, 4054 ], flag: 0, tc: [ 0, 1602 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4070, 1434, 4259 ], flag: 0, tc: [ 376, 1192 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4582, 1229, 4666 ], flag: 0, tc: [ 1190, 2214 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4786, 1229, 4054 ], flag: 0, tc: [ 0, 2624 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4786, 1229, 4668 ], flag: 0, tc: [ 1194, 2624 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4582, 1229, 4054 ], flag: 0, tc: [ 0, 2214 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4582, 1843, 4668 ], flag: 0, tc: [ -1256, -236 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4377, 1638, 4668 ], flag: 0, tc: [ -848, 172 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4582, 1638, 4668 ], flag: 0, tc: [ -1256, 172 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4172, 1843, 4668 ], flag: 0, tc: [ -438, -236 ], color: [ 0, 0, 127, 255 ] },
]

const sl_seg7_vertex_07008378 = [
	{ pos: [ 4582, 1843, 4873 ], flag: 0, tc: [ 1604, 2214 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4172, 1843, 4873 ], flag: 0, tc: [ 1604, 1396 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4172, 1843, 5078 ], flag: 0, tc: [ 2012, 1396 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4786, 1229, 5078 ], flag: 0, tc: [ 2012, 2624 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4582, 1229, 5078 ], flag: 0, tc: [ 2012, 2214 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4582, 1229, 4873 ], flag: 0, tc: [ 1604, 2214 ], color: [ 0, 129, 0, 255 ] },
	{ pos: [ 4786, 1434, 5078 ], flag: 0, tc: [ -1666, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3967, 1638, 5078 ], flag: 0, tc: [ 0, 172 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 3967, 1434, 5078 ], flag: 0, tc: [ 0, 582 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4786, 1638, 5078 ], flag: 0, tc: [ -1666, 172 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4172, 1843, 5078 ], flag: 0, tc: [ -438, -236 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4582, 1843, 5078 ], flag: 0, tc: [ -1256, -236 ], color: [ 0, 0, 127, 255 ] },
	{ pos: [ 4582, 1843, 5078 ], flag: 0, tc: [ 2012, 2214 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4582, 1638, 4873 ], flag: 0, tc: [ 1604, 172 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4582, 1843, 4668 ], flag: 0, tc: [ 1194, -236 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4582, 1638, 4668 ], flag: 0, tc: [ 1194, 172 ], color: [ 129, 0, 0, 255 ] },
]

const sl_seg7_vertex_07008478 = [
	{ pos: [ 4582, 1638, 4873 ], flag: 0, tc: [ 1604, 172 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4582, 1843, 4873 ], flag: 0, tc: [ 1604, -236 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4582, 1843, 4668 ], flag: 0, tc: [ 1194, -236 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 4582, 1638, 4668 ], flag: 0, tc: [ 1194, 2214 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4377, 1638, 4668 ], flag: 0, tc: [ 1194, 1806 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4377, 1638, 4873 ], flag: 0, tc: [ 1604, 1806 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 4582, 1638, 4873 ], flag: 0, tc: [ 1604, 2214 ], color: [ 0, 127, 0, 255 ] },
	{ pos: [ 3967, 1434, 5078 ], flag: 0, tc: [ 2012, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1638, 4054 ], flag: 0, tc: [ 0, 172 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1434, 4054 ], flag: 0, tc: [ 0, 582 ], color: [ 129, 0, 0, 255 ] },
	{ pos: [ 3967, 1638, 5078 ], flag: 0, tc: [ 2012, 172 ], color: [ 129, 0, 0, 255 ] },
]

export const sl_seg7_dl_07008528 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, snow_09000800),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPLight(sl_seg7_lights_07007910.l[0], 1),
	Gbi.gsSPLight(sl_seg7_lights_07007910.a, 2),
	Gbi.gsSPVertex(sl_seg7_vertex_07007928, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(14, 11, 13, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07007A18, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 0, 10,  1, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07007B08, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 13, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07007BF8, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 10, 11,  7, 0x0),
	...Gbi.gsSP2Triangles( 0, 12,  1, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07007CF8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11,  8, 10, 0x0),
	Gbi.gsSP1Triangle(12, 13, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07007DE8, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07007EC8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 10, 11,  7, 0x0),
	...Gbi.gsSP2Triangles( 8, 12,  9, 0x0,  8, 13, 12, 0x0),
	...Gbi.gsSP2Triangles(10, 14, 11, 0x0, 14, 12, 11, 0x0),
	Gbi.gsSP1Triangle(12, 13, 11, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07007FB8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 12, 13, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_070080A8, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 8, 10,  9, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07008198, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0, 14,  1, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07008288, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(12, 11, 14, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07008378, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles( 9, 10,  7, 0x0,  9, 11, 10, 0x0),
	...Gbi.gsSP2Triangles( 0,  2, 12, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(sl_seg7_vertex_07008478, 11, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	Gbi.gsSP1Triangle( 7, 10,  8, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const sl_seg7_dl_070088B0 = [
	Gbi.gsDPSetEnvColor(255, 255, 255, 100),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_MODULATERGBFADE),
	Gbi.gsSPClearGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(sl_seg7_dl_07008528),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_SHADING_SMOOTH),
	Gbi.gsDPSetEnvColor(255, 255, 255, 255),
	Gbi.gsSPEndDisplayList(),
]

