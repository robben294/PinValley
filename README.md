# PinValley

PinValley is a faithful clone of Pinterest that allow users to share images and the corresponding website, create boards, and save other users' pins.

## Features

* User accounts with secure authentication
* User profiles with access to all of their content
* User profiles edit
* Board and Pin create, edit and save
* Home feed with infinite scrolling

![Home Feed](lib/assets/Home Feed.png)

## Infinite Scrolling
 This lowers backend querying. It also reduces the bandwidth speed requirements, when compared to rendering a large number of pins simultaneously. Below is a simplified version of its implementation.
