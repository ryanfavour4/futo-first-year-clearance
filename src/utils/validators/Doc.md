# V VALIDATOR MINI-LIBRARY DOCS

## V-1.1

## AVAILABLE VALIDATES

1. rules.maxLength ( TYPE: number ) = Specifies the maximum amount of characters an input can take.

2. rules.minLength ( TYPE: number ) = Specifies the least or minimum amount of characters an input can take.

3. rules.toMatch ( TYPE: STRING ) = Specifies what value to compare that value with... Most use-case would be a confirm password input.

4. rules.regex ( TYPE: REGEX PATTERN ) = Allows to pass in a raw regex pattern for a particular field. it sees the regex pattern and reports if it's a valid match.

5. rules.phoneNumber ( TYPE: BOOLEAN ) = Specifies that this is a number-only field.

6. rules.countryCode ( TYPE: BOOLEAN ) = Specifies that the number provided is starting with a country code.

7. rules.email ( TYPE: BOOLEAN ) = Specifies that the input is meant to accept a valid email only

8. rules.toNotMatch ( TYPE: STRING ) = Specifies what value to compare that value with, in a non-matching case... The most used case would be to confirm old password input to new password input.
