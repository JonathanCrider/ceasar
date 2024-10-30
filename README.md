# Simple Ceasar Cipher
Small node cli project

Encodes text with a simple ceasar cipher, where you can set the offset value

Currently set up only for the basic alphabet, no special characters

## Usage

Basic syntax is `node [command] [offset] [input]`

### Examples

```bash
node encode 3 'text string'
```

```bash
node decode 3 '17 2 21 17 16 17 15 6 11 4'
```

### Results
Results are printed to the console

```bash
offset: 3 
message: text string
code: 17 2 21 17 16 17 15 6 11 4
```
