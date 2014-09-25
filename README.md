## This is a work in progress


### Esperanki
Prepares ANKI deck cards for studying based on a foreign-language text.

Provided the foreign language text, Esperanki will choose the N longest words and create an ANKI deck file, so the flash cards can be studied before reading the text.

### Usage
```
$ node esperanki.js <input-file> <output-file> <n-words> <source-language> <target-language>
```

### Example
```
$ node esperanki.js example-text.txt deck.txt 20 de en
```

### TODO
 - Sanitize ARGV
 - Improve word detection
 - Validate translation
 - Download texts automatically from newspapers

