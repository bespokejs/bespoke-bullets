[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-bullets.png)](http://travis-ci.org/markdalgleish/bespoke-bullets)

# bespoke-bullets

### Bullet Lists for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

Style and animate bullet lists and their transitions with some simple CSS rules.

## Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/markdalgleish/bespoke.js/master/dist/bespoke-bullets.min.js
[max]: https://raw.github.com/markdalgleish/bespoke.js/master/dist/bespoke-bullets.js

## Usage

First, include both `bespoke.js` and `bespoke-bullets.js` in your page.

Next, add `data-bespoke-bullet` attributes to your bullet elements.

```html
<article>
  <section>
    <ul>
      <li data-bespoke-bullet>Bullet 1</li>
      <li data-bespoke-bullet>Bullet 2</li>
      <li data-bespoke-bullet>Bullet 3</li>
    </ul>
  </section>
</article>
```

Then, simply include the plugin when using the `from(selector[, plugins])` method.

```js
bespoke.horizontal.from('article', {
  bullets: true
});
```

You can now style your bullets and their animations by using the provided classes.

### CSS

The following classes are available on your bullet elements.

<table>
   <tr>
    <td><b>bespoke-bullet</b></td>
    <td>Every bullet element</td>
   </tr>
   <tr>
    <td><b>bespoke-bullet-active</b></td>
    <td>All active bullets</td>
   </tr>
   <tr>
    <td><b>bespoke-bullet-inactive</b></td>
    <td>All inactive bullets</td>
   </tr>
</table>

## Questions?

Contact me on GitHub or Twitter: [@markdalgleish](http://twitter.com/markdalgleish)

## License

Copyright 2013, Mark Dalgleish  
This content is released under the MIT license  
http://markdalgleish.mit-license.org