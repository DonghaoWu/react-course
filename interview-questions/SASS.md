1. Create files.

```bash
$ mkdir sass-demo
$ cd sass-demo
$ npm init -y
$ touch .gitignore
$ touch index.html
$ touch main.scss
$ npm i node-sass --save-dev
```

```bash
/node_modules
```

2. Add a new script

```json
"scripts": {
  "compile:sass": "node-sass main.scss styles.css -w"
},
```

3. css normalize.

```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  border: 0;

  box-sizing: border-box;
}
```

4. add html file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles.css" />
    <link />
    <title>Sass Demo</title>
  </head>
  <body>
    <nav>
      <ul class="navigation">
        <li><a href="#">nav-item-1</a></li>
        <li><a href="#">nav-item-2</a></li>
        <li><a href="#">nav-item-3</a></li>
      </ul>
    </nav>

    <div class="normal-nav-class">
      <ul class="normal-ul">
        <li><a href="#">normal-item-1</a></li>
        <li><a href="#">normal-item-2</a></li>
        <li><a href="#">normal-item-3</a></li>
      </ul>
    </div>
  </body>
</html>
```

5. Sass: variable. `$`

```scss
$color-primary: yellow;
$bullet-color: green;
$text-color-primary: red;
$text-color-secondary: blue;
$hover-background-color: grey;

$nav-margin-primary: 30px;
$nav-margin-secondary: 100px;
```

6. nesting & selector. `&`

```scss
nav {
  margin: 30px;
  background-color: $color-primary;

  li {
    color: $bullet-color;

    &:first-child {
      color: $text-color-primary;
    }

    &:last-child {
      color: $text-color-secondary;
    }

    &:hover {
      background-color: $hover-background-color;
    }

    a {
      color: $text-color-primary;
    }
  }
}

.normal-nav-class {
  background-color: darken($color-primary, 20%);
}
```

7. @mixin & @include

```scss
@mixin nav-setup {
  margin: 30px;
  background-color: $color-primary;

  li {
    color: $bullet-color;

    &:first-child {
      color: $text-color-primary;
    }

    &:last-child {
      color: $text-color-secondary;
    }

    &:hover {
      background-color: $hover-background-color;
    }

    a {
      color: $text-color-primary;
    }
  }
}

nav {
  @include nav-setup;
}

.normal-nav-class {
  @include nav-setup;

  background-color: darken($color-primary, 20%);
}
```

8. mixin with parameters.

```scss
@mixin nav-setup($myMargin) {
  margin: $myMargin;
  background-color: $color-primary;

  li {
    color: $bullet-color;

    &:first-child {
      color: $text-color-primary;
    }

    &:last-child {
      color: $text-color-secondary;
    }

    &:hover {
      background-color: $hover-background-color;
    }

    a {
      color: $text-color-primary;
    }
  }
}

nav {
  @include nav-setup($nav-margin-primary);
}

.normal-nav-class {
  @include nav-setup($nav-margin-secondary);

  background-color: darken($color-primary, 20%);
}
```

9. calculation.

```scss
$nav-margin-secondary: ($nav-margin-primary * 5);
```

10. imports.

- create a new file `base/_variables.scss`

```scss
$color-primary: yellow;
$bullet-color: green;
$text-color-primary: red;
$text-color-secondary: blue;
$hover-background-color: grey;

$nav-margin-primary: 30px;
$nav-margin-secondary: 100px;
```

- create a new file `base/_mixins.scss`

```scss
@import 'variables';

@mixin nav-setup($myMargin) {
  margin: $myMargin;
  background-color: $color-primary;

  li {
    color: $bullet-color;

    &:first-child {
      color: $text-color-primary;
    }

    &:last-child {
      color: $text-color-secondary;
    }

    &:hover {
      background-color: $hover-background-color;
    }

    a {
      color: $text-color-primary;
    }
  }
}
```

- main.scss

```scss
@import 'base/variables';
@import 'base/mixins';

*,
*::after,
*::before {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

nav {
  @include nav-setup($nav-margin-primary);
}

.normal-nav-class {
  @include nav-setup($nav-margin-secondary);

  background-color: darken($color-primary, 20%);
}
```
