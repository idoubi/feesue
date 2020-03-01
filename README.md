## Feesue

Generate product feedback page based on Github Issues.

## Demo:

[Feesue's feedback page](http://feesue.idoubi.cc)

## Basic Usage

create a .html file for your product's feedback page. like: `touch feedback.html`

edit `feedback.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Product's feedback page</title>
  </head>

  <body>
    <div id="feesue-container"></div>

    <script src="path-to/dist/feesue.min.js"></script>
    <script>
      var feesue = new Feesue({
        token: "[github personal access token]",
        owner: "[github owner]",
        repo: "[github repository]",
        state: "[state of issues]",
        labels: "[labels of issues]",
        direction: "[sort direction, asc or desc]",
        sort: "[sort field, updated_at/created_at/comments eg.]",
        theme_color: "[theme color like #08a5e0]",
        per_page: 20,
        product: {
          name: "[name of product]",
          intro: "[intro of product]",
          logo: "[logo of product]",
          github_url: "[github url of product]",
          github_title: "[text in github button]",
          home_url: "[home url of product]",
          home_title: "[text in home button]",
          comments_title: "[title of comments area]"
        }
      });

      feesue.render("feesue-container");
    </script>
  </body>
</html>
```
