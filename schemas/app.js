import {publisher} from './publisher.js';

export const app = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "bundle": {
      "type": "number"
    },
    "domain": {
      "type": "string"
    },
    "storeurl": {
      "type": "string"
    },
    "cat": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "sectioncat": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "pagecat": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "ver": {
      "type": "string"
    },
    "privacypolicy": {
      "type": "integer"
    },
    "paid": {
      "type": "integer"
    },
    "publisher": publisher,
    "content": {
      "type": "object"
    },
    "keywords": {
      "type": "string"
    },
    "ext": {
      "type": "object"
    }
  }
}
