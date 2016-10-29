# Chuchu++ Grammar
[![Chuchu++ Logo](http://i.imgur.com/pokEntB.png?1)](#)<br><br>
Build Status: [![Build Status](https://travis-ci.com/AdrianBZG/ChuchuPlusPlus.svg?token=Yw4nNUiKBAqLw1UVKgoY&branch=master)](https://travis-ci.com/AdrianBZG/ChuchuPlusPlus)

Chuchu++ is a PL0-based grammar that uses PEGjs for parsing it's code and transform it to an AST, after that you're able to generate javascript code using our own Chuchu++ Code Generator

Please note that development is very early on.

## Allowed programming paradigms
- Imperative paradigm <br>
- Functional programming paradigm <br>
- Object-oriented programming paradigm <br>

## Allowed types
Chuchu++ is a dynamic type language/grammar, because it'll generate JavaScript code so all types are allowed

## Chuchu++ Analyzer Phases
1. Syntactic analysis ([Some features...](https://github.com/AdrianBZG/ChuchuPlusPlus/issues?q=is%3Aissue+label%3Asyntactic))
2. Semantic analysis ([Some features...](https://github.com/AdrianBZG/ChuchuPlusPlus/issues?q=is%3Aissue+label%3Asemantic))
3. Code generation phase ([Info here](https://github.com/AdrianBZG/ChuchuPlusPlus/tree/master/code_generator))

## Front-End Preview

Analyzer Preview (0.2)<br>
<div style="text-align:center">![Analyzer Preview (0.2)](http://i.imgur.com/Z63eLdr.png?1 "Analyzer Preview (0.2)")</div><br>
<br>
Code Generator (0.0.1)<br>
<div style="text-align:center">![Analyzer Preview (0.2)](http://i.imgur.com/Qy0Xrzl.png?1 "Code Generator (0.0.1)")</div><br>

## HEROKU DEPLOYMENT

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/AdrianBZG/ChuchuPlusPlus) <br>
Application (can be outdated): [Click here...](https://chuchuplusplus.herokuapp.com/) <br>
Testing: [Click here...](https://chuchuplusplus.herokuapp.com/tests) <br>


## Dependencies

| Name         | Version                          |
|--------------|----------------------------------|
| PEGjs        | >= 0.9.0                         |
| ECMAScript   | >= 6 |
| NodeJS      |  >= 5.*                                |
| SQLite      |  >= 3.1.*                               |
| Express      |  >= 4.*                               |
| EJS      |  >= 2.4.*                               |
| Gulp      |  >= 3.9.*                               |
| CodeMirror      |  >= 5.*                               |

## Used technologies
- PEGjs <br>
- NodeJS <br>
- SQLite <br>
- Gulp <br>
- CodeMirror <br>
- MathJAX <br>
- jQuery <br>
- AJAX <br>
- SASS <br>
- Underscore <br>
- Testing: Karma + Mocha + Chai + Sinon <br>
- Continuous Integration: Travis <br>
- File Handling <br>
- RegExp (For the PEG grammar) <br>
- Views (ExpressJS) <br>
- ECMA 6 <br>
- Event Handling <br>
- PAAS Deployment (Heroku) <br>
- Version control + Collaboration (Git) <br>
- Java (for the Code Generation Phase) <br>


## Running

Just use the 'gulp' command and the default task will be triggered, then access with your browser to [http://localhost:5000](http://localhost:5000)

## Contributing

1. Find a thing to fix/implement in [Issues](https://github.com/AdrianBZG/ChuchuPlusPlus/issues?direction=desc&sort=created&state=open) or come up with your own idea, [create a discussion issue](https://github.com/AdrianBZG/ChuchuPlusPlus/issues/new) for it and get a feedback.
2. [Fork the repo](https://help.github.com/articles/fork-a-repo)
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. [Create new Pull Request](https://help.github.com/articles/using-pull-requests)

## DEVELOPERS

### Adrián Rodríguez Bazaga
  - Email: arodriba@ull.edu.es
  - [Personal page](http://adrianbzg.github.io)

### Rudolf Cicko
  - Email: alu0100824780@ull.edu.es || rudolfcicko2011@gmail.com
  - [Personal page](http://alu0100824780.github.io)

** Link to the subject "Procesadores de Lenguajes" (Language Processors):**

* [Procesadores de Lenguajes](https://campusvirtual.ull.es/1516/course/view.php?id=178)

** Link to the assignment description:**

* [Assignment description](https://campusvirtual.ull.es/1516/mod/workshop/view.php?id=148789)

## Contact the developers

You can contact the developers by sending an email to [arodriba@ull.edu.es](mailto:arodriba@ull.edu.es) or using [issues](https://github.com/AdrianBZG/ChuchuPlusPlus/issues)

## License

Chuchu++ is a Open Source project licensed under [GNU GPLv3](LICENSE).
