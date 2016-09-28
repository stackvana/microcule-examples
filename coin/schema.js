module['exports'] = {
  "coin": {
    "type": "string",
    "format": "select",
    "default": "btc",
    "enum": ["btc", "ltc", "doge", "ppc"]
  },
  "currency": {
    "type": "string",
    "format": "select",
    "default": "all",
    "enum": ["all", "usd", "eur", "cny", "cad", "rub", "btc"]
  }
};