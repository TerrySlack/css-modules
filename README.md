# css 3 example

Using css modules to pass components classNames
Note, they will be scoped when used in the site, but in here, you access the class names you created in home.module.css

In the component: CSSModulesExample, the imported Button component is styled using css modules internally, as well, a className was passed in as a prop
to apply styling to it

Same for the switch component.

CSS Modules work by setting a rule in webpack.
If you talk a look at Config/webpack.dev and webpack.prod, you see how css modules are enabled.
In dev, look for this line include: /\.module\.css$/i,

In prod, the MiniCssExtractPlugin will take all of our css and scope it into an external css file.

# Setup

yarn or npm install

# Build

yarn run start or npm run start
