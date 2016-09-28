module['exports'] = {
  "name": {
    "type": "string",
    "default": "Bob",
    "required": false
  },
  "age": {
    "type": "number",
    "default": 40
  },
  "status": {
    "type": "string",
    "default": "active",
    "enum": ["active", "disabled"]
  },
  "isAlive": {
    "type": "boolean",
    "default": true
  }
};
