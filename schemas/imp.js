'strict mode'

import {video} from './video.js';
import {banner} from './banner.js';
import {native} from './native.js';

export const imp = {
	"type": "array",
	"items": {
		"type": "object",
  	"properties": {
			"id": {
			  "type": "string"
			},
			"banner": banner,
			"video": video,
			"native": native,
			"displaymanager": {
			  "type": "string"
			},
			"displaymanagerver": {
			  "type": "string"
			},
			"instl": {
			  "type": "integer"
			},
			"tagid": {
			  "type": "string"
			},
			"bidfloor": {
			  "type": "number"
			},
			"bidfloorcur": {
			  "type": "string"
			},
			"secure": {
			  "type": "integer"
			},
			"iframebuster": {
		      "type": "array",
		      "items": {
		        "type": "string"
		      }
		    },
			"pmp": {
			  "type": "object"
			},
			"ext": {
			  "type": "object"
			}
		},
		"required": ["id"]
	},
};
