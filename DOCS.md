# prayista v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Cell](#cell)
	- [Create cell](#create-cell)
	- [Delete cell](#delete-cell)
	- [Retrieve cell](#retrieve-cell)
	- [Retrieve cells](#retrieve-cells)
	- [Update cell](#update-cell)
	
- [Event](#event)
	- [Create event](#create-event)
	- [Delete event](#delete-event)
	- [Retrieve event](#retrieve-event)
	- [Retrieve events](#retrieve-events)
	- [Update event](#update-event)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Playlist](#playlist)
	- [Create playlist](#create-playlist)
	- [Delete playlist](#delete-playlist)
	- [Retrieve playlist](#retrieve-playlist)
	- [Retrieve playlists](#retrieve-playlists)
	- [Update playlist](#update-playlist)
	
- [Quote](#quote)
	- [Create quote](#create-quote)
	- [Delete quote](#delete-quote)
	- [Retrieve quote](#retrieve-quote)
	- [Retrieve quotes](#retrieve-quotes)
	- [Update quote](#update-quote)
	
- [Sermon](#sermon)
	- [Create sermon](#create-sermon)
	- [Delete sermon](#delete-sermon)
	- [Retrieve sermon](#retrieve-sermon)
	- [Retrieve sermons](#retrieve-sermons)
	- [Update sermon](#update-sermon)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Cell

## Create cell



	POST /cells


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Cell's name.</p>							|
| leader			| 			|  <p>Cell's leader.</p>							|
| phone			| 			|  <p>Cell's phone.</p>							|
| pacInput			| 			|  <p>Cell's pacInput.</p>							|
| description			| 			|  <p>Cell's description.</p>							|
| user			| 			|  <p>Cell's user.</p>							|

## Delete cell



	DELETE /cells/:id


## Retrieve cell



	GET /cells/:id


## Retrieve cells



	GET /cells


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update cell



	PUT /cells/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Cell's name.</p>							|
| leader			| 			|  <p>Cell's leader.</p>							|
| phone			| 			|  <p>Cell's phone.</p>							|
| pacInput			| 			|  <p>Cell's pacInput.</p>							|
| description			| 			|  <p>Cell's description.</p>							|
| user			| 			|  <p>Cell's user.</p>							|

# Event

## Create event



	POST /events


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Event's name.</p>							|
| location			| 			|  <p>Event's location.</p>							|
| time			| 			|  <p>Event's time.</p>							|
| date			| 			|  <p>Event's date.</p>							|
| hashtags			| 			|  <p>Event's hashtags.</p>							|
| customFile			| 			|  <p>Event's customFile.</p>							|
| description			| 			|  <p>Event's description.</p>							|
| user			| 			|  <p>Event's user.</p>							|

## Delete event



	DELETE /events/:id


## Retrieve event



	GET /events/:id


## Retrieve events



	GET /events


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update event



	PUT /events/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Event's name.</p>							|
| location			| 			|  <p>Event's location.</p>							|
| time			| 			|  <p>Event's time.</p>							|
| date			| 			|  <p>Event's date.</p>							|
| hashtags			| 			|  <p>Event's hashtags.</p>							|
| customFile			| 			|  <p>Event's customFile.</p>							|
| description			| 			|  <p>Event's description.</p>							|
| user			| 			|  <p>Event's user.</p>							|

# PasswordReset

## Send email



	POST /password-resets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| email			| String			|  <p>Email address to receive the password reset token.</p>							|
| link			| String			|  <p>Link to redirect user.</p>							|

## Submit password



	PUT /password-resets/:token


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Verify token



	GET /password-resets/:token


# Playlist

## Create playlist



	POST /playlists


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| date			| 			|  <p>Playlist's date.</p>							|
| songs			| 			|  <p>Playlist's songs.</p>							|
| user			| 			|  <p>Playlist's user.</p>							|

## Delete playlist



	DELETE /playlists/:id


## Retrieve playlist



	GET /playlists/:id


## Retrieve playlists



	GET /playlists


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update playlist



	PUT /playlists/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| date			| 			|  <p>Playlist's date.</p>							|
| songs			| 			|  <p>Playlist's songs.</p>							|
| user			| 			|  <p>Playlist's user.</p>							|

# Quote

## Create quote



	POST /quotes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| verse			| 			|  <p>Quote's verse.</p>							|
| application			| 			|  <p>Quote's application.</p>							|
| lessons			| 			|  <p>Quote's lessons.</p>							|
| date			| 			|  <p>Quote's date.</p>							|
| user			| 			|  <p>Quote's user.</p>							|

## Delete quote



	DELETE /quotes/:id


## Retrieve quote



	GET /quotes/:id


## Retrieve quotes



	GET /quotes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update quote



	PUT /quotes/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| verse			| 			|  <p>Quote's verse.</p>							|
| application			| 			|  <p>Quote's application.</p>							|
| lessons			| 			|  <p>Quote's lessons.</p>							|
| date			| 			|  <p>Quote's date.</p>							|
| user			| 			|  <p>Quote's user.</p>							|

# Sermon

## Create sermon



	POST /sermons


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| 			|  <p>Sermon's title.</p>							|
| location			| 			|  <p>Sermon's location.</p>							|
| time			| 			|  <p>Sermon's time.</p>							|
| date			| 			|  <p>Sermon's date.</p>							|
| hashtags			| 			|  <p>Sermon's hashtags.</p>							|
| customFile			| 			|  <p>Sermon's customFile.</p>							|
| messages			| 			|  <p>Sermon's messages.</p>							|
| user			| 			|  <p>Sermon's user.</p>							|

## Delete sermon



	DELETE /sermons/:id


## Retrieve sermon



	GET /sermons/:id


## Retrieve sermons



	GET /sermons


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update sermon



	PUT /sermons/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| 			|  <p>Sermon's title.</p>							|
| location			| 			|  <p>Sermon's location.</p>							|
| time			| 			|  <p>Sermon's time.</p>							|
| date			| 			|  <p>Sermon's date.</p>							|
| hashtags			| 			|  <p>Sermon's hashtags.</p>							|
| customFile			| 			|  <p>Sermon's customFile.</p>							|
| messages			| 			|  <p>Sermon's messages.</p>							|
| user			| 			|  <p>Sermon's user.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


