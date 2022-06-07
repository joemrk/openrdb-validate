export const native = {
  "type": "object",
  "properties": {
		"request": {
		  "type": "string"
		},
		"ver": {
		  "type": "string"
		},
		"api": {
	      "type": "array",
	      "items": {
	        "type": "integer"
	      }
	    },
	    "battr": {
	      "type": "array",
	      "items": {
	        "type": "integer"
	      }
	    },
		"ext": {
		  "type": "object"
		}
  	},
  	"required": ["request"]
}

