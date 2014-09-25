## This is a work in progress


### Esperanki
Prepares [ANKI](http://ankisrs.net/) deck cards for studying based on a foreign-language text.

Provided the foreign language text, Esperanki will choose the N longest words and create an ANKI deck file with the respective translations, so the flash cards with the word meanings can be studied before reading the text.

### Usage

#### Dependencies
You'll need NODE.js. If you don't have it, follow the [NODE.js Installation Instructions](http://nodejs.org/download/)
After installed, clone this repo. On the cloned directory use:
```
$ npm install
```

#### Creating your Deck
```
$ node esperanki.js <input-file> <output-file> <n-words> <source-language> <target-language>
```

#### Example
```
$ node esperanki.js example-text.txt deck.txt 20 de en
```

After the deck is created, use ANKI's [import function](http://ankisrs.net/docs/manual.html#importing) to create your deck

### Credits
 - [ANKI](http://ankisrs.net/) The best open-source Spaced Repetition System.
 - [MyMemory](http://mymemory.translated.net/) Provides the free translation API used here

### TODO
 - Sanitize ARGV
 - Improve word detection
 - Validate translation
 - Download texts automatically from newspapers

