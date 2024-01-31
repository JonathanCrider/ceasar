#Simple Ceasar Cipher
Small node cli project

Encodes text with a simple ceasar cipher, where you can set the offset value

##Notable Issue
JavaScript lacks a modulus operator.

When I was first learning JS, the % symbol was referred to as 'mod'. If you are in the same boat, this is incorrect. It's a remainder. You can learn more about [modulus vs remainder here](https://dev.to/hamiecod/remainder-vs-modulus-3mc8).

While this is not often an issue, this poses a problem for a shift cipher, as the resulting shift may go out of bounds of your character limit.

As such, it was necessary to create a mod function to handle this correctly. I know it could probably use some more finesse. It's also possible there is an implementation issue, so let me know if I got it wrong.

##Usage

###Encoding
```
node encode [offset] [text string]
```

###Decoding
```
node decode [offset] [code]
```

###Results
Results are printed to the console
