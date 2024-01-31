# Simple Ceasar Cipher
Small node cli project

Encodes text with a simple ceasar cipher, where you can set the offset value

## Notable Issue
JavaScript lacks a modulus operator.

The % symbol is usually (in my experience) referred to as 'mod'. This does not seem to be an entirely accurate description. It's a remainder. You can learn more about [modulus vs remainder here](https://www.logilax.com/javascript-modulo/).

While this is not often an issue, this poses a problem for a shift cipher, as the resulting shift may go out of bounds of your character limit.

As such, it was necessary to create a mod function to handle this correctly. I think I'm understanding it correctly, but if I've got the math wrong or have an error in the implementation, feel free to raise an issue.

## Usage

### Encoding
```
node encode [offset] [text string]
```

### Decoding
```
node decode [offset] [code]
```

### Results
Results are printed to the console
