export class Validator {
  obj = null;
  #errors = [];
  #rules = {};
  countryCodePattern = /^\+\d{1,3}\s?\d{1,14}$/;
  emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  constructor(vname) {
    this.vname = vname;
  }
  get rules() {
    return this.#rules;
  }
  set rules(value) {
    if (value instanceof Object) {
      if (Object.keys(value).length !== 0) {
        this.#rules = value;
      }
    } else {
      console.error("Invalid argument. Expected an object.");
      throw new Error("Invalid argument. Expected an object.");
    }
  }
  get errors() {
    return this.#errors;
  }
}

//? PROTOTYPE FUNCTIONS DECLARED BELOW

Validator.prototype.validate = function (obj) {
  this.obj = obj;
  //? EMPTY ARRAY FOR FRESH VALIDATION CHECK
  this.errors.splice(0);
  //? CHECKS IF THE VALUE TO VALIDATE IS A STRING OR AN OBJECT
  if (isNaN(obj.length) === false) {
    this.validateString(obj);
    return;
  }
  //? SORT THROUGH OBJECTS AND GRAB THE OBJECT TO VALIDATE FROM THEIR KEYS AND VALUE PAIRS
  const entries = Object.entries(this.obj);
  //? LOOP THOUGH ENTRIES OBJECT
  entries.forEach((objArr) => {
    //? CHECK IF EMPTY SO IT BREAKS OUT INSTANTLY
    if (objArr[1].trim() === "") {
      this.errors.push(`${objArr[0]} IS COMPLETELY EMPTY`);
      return;
    }
    //? VALIDATE BASED ON THE USERS RULES
    //? FIRSTLY CHECKS IF THAT OBJECT WAS ASKED TO BE VALIDATED
    if (this.rules[objArr[0]] !== undefined) {
      const rules = this.rules[objArr[0]];
      if (rules.maxLength)
        this.validateValueMaxLength(objArr[1], objArr[0], rules.maxLength);
      if (rules.minLength)
        this.validateValueMinLength(objArr[1], objArr[0], rules.minLength);
      if (rules.toMatch !== undefined)
        this.validateValueToMatch(objArr[1], objArr[0], rules.toMatch);
      if (rules.toNotMatch !== undefined)
        this.validateValueToNotMatch(objArr[1], objArr[0], rules.toNotMatch);
      if (rules.regex)
        this.validateRegexValue(objArr[1], objArr[0], rules.regex);
      //? ====== BOOLEAN VALIDATORS ====?//
      if (rules.phoneNumber) this.validateValueIsNumber(objArr[1], objArr[0]);
      if (rules.countryCode) this.validateCountryCode(objArr[1], objArr[0]);
      if (rules.email) this.validateEmail(objArr[1], objArr[0]);
    }
  });
};

//? STRING ONLY VALUES BASED ON THE VALIDATE METHOD CALLED
Validator.prototype.validateString = function (string) {
  const rules = this.rules;
  if (string.trim() === "") {
    this.errors.push(`YOUR TEXT ${string} IS NOT VALID`);
    return;
  }
  if (rules.maxLength)
    this.validateValueMaxLength(string, null, rules.maxLength);
  if (rules.minLength)
    this.validateValueMinLength(string, null, rules.minLength);
  if (rules.toMatch !== undefined)
    this.validateValueToMatch(string, null, rules.toMatch);
  //? ====== BOOLEAN VALIDATORS ====?//
  if (rules.phoneNumber) this.validateValueIsNumber(string, null);
  if (rules.countryCode) this.validateCountryCode(string, null);
  if (rules.email) this.validateEmail(string, null);
};

//? ========= MAIN VALIDATOR FUNCTIONS ======== ?//

Validator.prototype.validateValueMaxLength = function (value, name, rule) {
  let validatorname = name || value;
  if (value.trim().length > rule) {
    this.errors.push(`${validatorname} must be less than ${rule} characters`);
    return;
  }
};

Validator.prototype.validateValueMinLength = function (value, name, rule) {
  let validatorname = name || value;
  if (value.trim().length < rule) {
    this.errors.push(`${validatorname} must be at least ${rule} characters`);
    return;
  }
};

Validator.prototype.validateValueToMatch = function (value, name, rule) {
  let validatorname = name || value;
  if (JSON.stringify(value.trim()) !== JSON.stringify(rule.trim())) {
    this.errors.push(
      `${validatorname} value does not match it's corresponding. Expected ${rule}`
    );
    return;
  }
};

Validator.prototype.validateValueToNotMatch = function (value, name, rule) {
  let validatorname = name || value;
  if (JSON.stringify(value.trim()) === JSON.stringify(rule.trim())) {
    this.errors.push(`THE VALUE IN ${validatorname} SHOULD NOT BE ${rule}`);
    return;
  }
};

Validator.prototype.validateRegexValue = function (value, name, rule) {
  let validatorname = name || value;
  if (!rule.test(value.trim())) {
    this.errors.push(`${validatorname} DID NOT MEET THE REQUIRED FORMAT`);
    return;
  }
};

Validator.prototype.validateValueIsNumber = function (value, name) {
  let validatorname = name || value;
  if (isNaN(value)) {
    this.errors.push(`${validatorname} IS NOT A NUMBER. CHANGE IT`);
    return;
  }
};

Validator.prototype.validateCountryCode = function (value, name) {
  let validatorname = name || value;
  if (!this.countryCodePattern.test(value)) {
    this.errors.push(`${validatorname} SHOULD BE A COUNTRY CODE FORMAT`);
    return;
  }
};

Validator.prototype.validateEmail = function (value, name) {
  let validatorname = name || value;
  if (!this.emailPattern.test(value)) {
    this.errors.push(`${validatorname} IS NOT A VALID EMAIL FORMAT`);
    return;
  }
};
