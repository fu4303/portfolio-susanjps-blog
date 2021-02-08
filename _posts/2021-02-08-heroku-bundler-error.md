---
title: Heroku/Rails Error Message Could Not Detect Rake Tasks
description: Heroku/Rails error message - could not detect rake tasks
read_time: "2 min"
img-lg: "https://res.cloudinary.com/susanjsp/image/upload/v1611932028/my-blog/reduce-lg_ukn2aw.png"
img-sm: "https://res.cloudinary.com/susanjsp/image/upload/v1611932027/my-blog/reduce-sm_trqfbp.png"
category: "🎢 Rails"
tags: rails, heroku, deployment,
layout: post
likes: 0
---
### Error Message in terminal:
Could not retect rake tasks
ensure you can run `$ bundle exec rake -P` against your app
and using the production group of your Gemfile.

[[Pasted image 20210208214751.png]]

I ran the `bundle exec rake -P` and everything worked fine, so it wasn't to do with that.

I had a look through various stack overflow comments, some blog posts and even turned to twitter to ask for help. Turns out, heroku only has a few versions of bundler that it can support, as detailed [in the Heroku Docs](https://devcenter.heroku.com/articles/bundler-version)

After testing many solutions to no avail, I tweaked a few and put them all together to get this final solution:

I was using bundler v2.2.2, so had to downgrade to version 2.0.2. (To find out your bundler version you can run `bundler -v`)
- ```gem uninstall bundler```
- ```gem install bundler -v 2.0.2```
- do NOT run `bundle update --bundler`, otherwise it will upgrade it to the latest version again
- ```delete Gemfile.lock```
- ```bundle install```
- ``` ga . && gc -m "fix heroku/bundler error"```
- ``` gp origin main```
- ``` gp heroku main```


### Useful Links
This issue is documented in the Heroku docs, and can be read here:  https://devcenter.heroku.com/articles/bundler-version

Useful community answers:
https://github.com/rubygems/rubygems/issues/3356 (comment by Jon Barlo on 24th Aug, 2019)

https://stackoverflow.com/questions/36394297/heroku-push-error-could-not-detect-rake-tasks (Answer by Eli Biz on 17th Dec, 2020)
