import {app} from './app.js';
import {imp} from './imp.js';
import {device} from './device.js';
import {user} from './user.js';
import {regs} from './regs.js';
import {site} from './site.js';

export const request = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "at": {
      "type": "number"
    },
    "imp": imp,
    "device": device,
    "user": user,
    "bcat": {
      "type": "array",
      "items": {
          "type": "string"
      }
    },
    "badv": {
      "type": "array",
      "items": {
          "type": "string"
      }
    },
    "test": {
      "type": "number"
    },
    "tmax": {
      "type": "number"
    },
    "site": site,
    "regs": regs,
    "ext": {
      "type": "object"
    }
  },
  "required": ["id", "imp"]
};