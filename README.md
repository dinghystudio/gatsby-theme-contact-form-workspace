# Gatsby Theme Contact Form

## Theme Usage

As long as this package is private, you need to add the _@dinghystudio_ registry in a `.npmrc` file:


```
registry=https://registry.yarnpkg.com/

@dinghystudio:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
always-auth=true
```

Then `NPM_TOKEN` needs to be exposed as an environment variable (generate that access token via GitHub, see below):

```bash
# export GitHub access token as NPM_TOKEN
export NPM_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Then install this theme in a gatsby page setup:

```shell
mkdir my-site
cd my-site
npm init
# install gatsby-theme-contact-form and it's dependencies
npm install gatsby react react-dom @dinghystudio/gatsby-theme-contact-form
touch gatsby-config.js
```

Then add the theme to your `gatsby-config.js`. We'll use the long form
here for education purposes.

```javascript
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [`@dinghystudio/gatsby-theme-contact-form`],
}
```

Add `"develop": "gatsby develop"` to `package.json`’s scripts section.
That's it, you can now run your gatsby site using

```shell
npm run develop
```

Set an environment variable to the contact form endpoint, e.g. `GATSBY_CONTACT_FORM_URL="https://usebasin.com/f/xyz"`

## Developement

Use _yarn_ to make use of workspaces:

```shell
#!/bin/bash
yarn workspace gatsby-theme-contact-form
yarn workspace site
```

Running the example setup in `/site` by using yarn workspaces:

```shell
#!/bin/bash
yarn workspace site develop
```


## Publish

For full descriptions, see [GitHub help](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages).

```shell
#!/bin/bash

# Change into package directory:
cd gatsby-theme-contact-form/

# And publish via:
NPM_TOKEN="[TOKEN]" NPM_OWNER="[OWNER]" npm publish
```

Where `TOKEN` can be generated in your [personal profile settings](https://github.com/settings/tokens) and `OWNER` is the organization name **without** the leading _@_ sign.
