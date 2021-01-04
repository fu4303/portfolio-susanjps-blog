---
title: Custom bullet styles using Fontawesome
description: Create fun bullet styles using font-awesome's massive free icon library
read_time: "5 min"
img-sm: ""
img-lg: ""
category: 🎨 front-end
tags: 'web development'
layout: post
likes: 0
---

This short tutorial will show you how to create custom bullet points without using the ```list-style-image``` CSS property. <!--break-->

1. set ```list-style-type``` of ul to 'none'
```css
ul {
	list-style-type: none;
}
```
2. Create ::before pseudo-element for li. These properties are compulsory!
```css
li::before {
	content: "\f005";
	font-family: "Font Awesome 5 Free";
}
```
*content* is the Unicode of the icon on fontawesome, and remember to add the backward slash.
*font-family* is also needed - it will show up as an empty square if it's not included. There are only two different font-families in the free plan: "Font Awesome 5 Free" and "Font Awesome 5 Brands" so make sure to change it if you are using brand logos. If you are on the Pro Plan, the [official documentation](https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements) lists the different font-families available.
3. Add these optional properties to make it prettier.
```css
li::before {
	padding-right: 8px;
	color: yellow;
	font-weight: 600;
}
```
*font-weight:* for some of the icons, adding '600' as the font-weight will fill in the icon

If you'd like to learn about this in more detail, have a look at the [official font-awesome documentation page](https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements).

