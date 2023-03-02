## a single string with words/spaces
## same string with each word reversed
## 'Hi There Jon' --> 'iH ereht noH'

## Split string into individual words based on spaces
## reverse letters in word
## rejoin the arr of reversed words back into a string
## return the string

## string is iterable

def spin_words(sentence):
    words = sentence.split(' ')
    new_word = []
    
    for word in words:
        if len(word) >= 5:
            new_word.append(''.join(reversed(word)))
        else:
            new_word.append(word)

    return ' '.join(new_word)

print(spin_words('Jonathon is here'))
