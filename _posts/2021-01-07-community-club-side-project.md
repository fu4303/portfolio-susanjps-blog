---
title: Creating a website for our local commumity
description:
read_time: 5 min
img-sm: "https://res.cloudinary.com/susanjsp/image/upload/v1610063629/my-blog/baddy-1-sm_yepgvk.png"
img-lg: "https://res.cloudinary.com/susanjsp/image/upload/v1610063629/my-blog/baddy-1-lg_u8olgk.png"
category: "💼 side projects"
tags: badminton app, rails
layout: post
likes: 0
---

I had a chat with my friend recently about the state of badminton websites in our local area. This project is a result of that conversation. <!--break-->

One of my friends has been playing badminton for a few years now. Whenever he wanted to play, he would have to scour the local facebook pages and websites to find out if there were any sessions available that night. Not only that, there was no information on whether memberships were required, or if there were any services at the location - ie. eftpos only or on-site parking. This is where I got the idea of creating a social badminton website, used to aggregrate information about clubs and sessions currently in Queensland (Brisbane only for now).

Originally, I wanted to wait and learn some javascript frameworks to create this app, but since I was so excited about the idea, I just powered on ahead. To my surprise, there was a lot of basic rails information that I'd already forgotten but with the help of some pre-made templates and the rails docs my project was on it's way!

### What I did today

Today I worked on visualising the relational database by drawing the columns and connections.

- First, I created my rails app with the help of a template which already includes the devise, font-awesome and simple form gems pre-installled
- Created my database tables & schema
- Created a basic seedfile to test the relationships between the objects and ensure the models had the correct validations included

Here is some of the information I came across today:

### Some useful rails commands
I'll be using a house object as an example (where 'user' is the owner)
```
rails generate model House address, age:integer, user:references
```
- With the references data_type, rails will automatically create a column called user_id and generate the foreign keys in the schema
- model name is singular and capitalized
- if not datatype is included, defaults to ':string'

```
rails g migration AddOccupantsToHouse occupants:integer
```
- Adding 'occupants' column to the House model, don't forget to specify data-type

```
rails destroy migration RemoveOccupantsFromHouse
rails destroy model House occupants:integer
```
- Both commands remove the 'occupants' column from the House model

### DateTime data-type
Rails includes a data-type called 'DateTime', which can be used when creating a column in a relational database.

To create seed data for a DateTime data-type, I used the following syntax:
```
Date.new(2020, 1, 7, 17, 30, 00)
Date.strptime(7/1/2020 17:00, %d/%m/%Y HH:MM)
```
- if using 'strptime' method you can rearrange the format and update the date to follow the new format

Read more about DateTime in the official Rails Documentation [here](https://api.rubyonrails.org/classes/DateTime.html)

**For tomorrow:** my task will to be generate the controllers and corresponding views, maybe set up cloudinary and design the show pages for clubs and locations

Signing off for today, thanks for reading!