# Prayista v0.1.0

Note

- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Cell](#cell)
	- [Cells From Churches Followed](#cells-from-churches-followed)
	- [Create cell](#create-cell)
	- [Delete cell](#delete-cell)
	- [Retrieve cell](#retrieve-cell)
	- [Retrieve cells](#retrieve-cells)
	- [Cells search](#cells-search)
	- [Update cell](#update-cell)
	
- [Churches](#churches)
	- [[1.d] Search approved Churches](#[1.d]-search-approved-churches)
	- [Get Churches Followed by a user](#get-churches-followed-by-a-user)
	- [[1.a] Create(Super Admin &amp; Church)](#[1.a]-create(super-admin-&amp;-church))
	- [[1.e] Delete Church](#[1.e]-delete-church)
	- [Retrieve current user/Church](#retrieve-current-user/church)
	- [Retrieve Church by id](#retrieve-church-by-id)
	- [[1.b] Retrieve (Approved churched, Pending approval and Suspended churches)](#[1.b]-retrieve-(approved-churched,-pending-approval-and-suspended-churches))
	- [[1b] Retrive all churches](#[1b]-retrive-all-churches)
	- [Update password](#update-password)
	- [[1.c] Update Church details](#[1.c]-update-church-details)
	- [[1.f] Approve Church](#[1.f]-approve-church)
	- [[3.c] Follow Church](#[3.c]-follow-church)
	- [Suspend Church](#suspend-church)
	- [Unfollow Church](#unfollow-church)
	
- [Collections](#collections)
	- [Create collections](#create-collections)
	- [Delete collections](#delete-collections)
	- [Retrieve collections](#retrieve-collections)
	- [Update collections](#update-collections)
	
- [Event](#event)
	- [Events From Churches Followed](#events-from-churches-followed)
	- [Create event](#create-event)
	- [Delete event](#delete-event)
	- [Retrieve event](#retrieve-event)
	- [Retrieve events](#retrieve-events)
	- [Event search](#event-search)
	- [Update event](#update-event)
	
- [Items](#items)
	- [Create items](#create-items)
	- [Delete items](#delete-items)
	- [Retrieve items](#retrieve-items)
	- [Update items](#update-items)
	
- [Livestreams](#livestreams)
	- [Create livestreams](#create-livestreams)
	- [Delete livestreams](#delete-livestreams)
	- [Retrieve livestreams](#retrieve-livestreams)
	- [Update livestreams](#update-livestreams)
	
- [Orders](#orders)
	- [Create orders](#create-orders)
	- [Delete orders](#delete-orders)
	- [Retrieve orders](#retrieve-orders)
	- [Update orders](#update-orders)
	
- [PasswordReset](#passwordreset)
	- [Send email](#send-email)
	- [Submit password](#submit-password)
	- [Verify token](#verify-token)
	
- [Playlist](#playlist)
	- [Playlists From Churches Followed](#playlists-from-churches-followed)
	- [Create playlist](#create-playlist)
	- [Delete playlist](#delete-playlist)
	- [Retrieve playlist](#retrieve-playlist)
	- [Retrieve playlists](#retrieve-playlists)
	- [Playlist search](#playlist-search)
	- [Update playlist](#update-playlist)
	
- [Quote](#quote)
	- [Quotes From Churches Followed](#quotes-from-churches-followed)
	- [Create quote](#create-quote)
	- [Delete quote](#delete-quote)
	- [Retrieve quote](#retrieve-quote)
	- [Retrieve quotes](#retrieve-quotes)
	- [Search BY Date](#search-by-date)
	- [Search BY Query](#search-by-query)
	- [Search By Query And Date](#search-by-query-and-date)
	- [Update quote](#update-quote)
	
- [Sermon](#sermon)
	- [Sermons From Churches Followed](#sermons-from-churches-followed)
	- [Create sermon](#create-sermon)
	- [Delete sermon](#delete-sermon)
	- [Retrieve sermon](#retrieve-sermon)
	- [Retrieve sermons](#retrieve-sermons)
	- [Sermons search](#sermons-search)
	- [Update sermon](#update-sermon)
	


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

## Cells From Churches Followed



	GET /followed/:client


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

## Cells search



	GET /cells/search/:q


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

# Churches

## [1.d] Search approved Churches



	GET /users/search/:q


## Get Churches Followed by a user



	GET /users/following/:app_user_id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| app_user_id			| String			|  <p>App user's ID.</p>							|

## [1.a] Create(Super Admin &amp; Church)



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| church			| String			| **optional** <p>Name of Church.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## [1.e] Delete Church



	DELETE /users/:id


## Retrieve current user/Church



	GET /users/me


## Retrieve Church by id



	GET /users/:id


## [1.b] Retrieve (Approved churched, Pending approval and Suspended churches)



	GET /users/by-status/:status


## [1b] Retrive all churches



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

## [1.c] Update Church details



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|

## [1.f] Approve Church



	PUT /users/approve/:id


## [3.c] Follow Church



	PUT /users/follow/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| user			| String			|  <p>App user's ID.</p>							|

## Suspend Church



	PUT /users/suspend/:id


## Unfollow Church



	PUT /users/unfollow/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| app_user_details			| object			|  <p>Details about the app user most importantly app user id as (id) and FCM token as (tolen).</p>							|

# Collections

## Create collections



	POST /collections


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| ac_name			| 			|  <p>Collections's ac_name.</p>							|
| ac_number			| 			|  <p>Collections's ac_number.</p>							|
| bank_name			| 			|  <p>Collections's bank_name.</p>							|

## Delete collections



	DELETE /collections/:id


## Retrieve collections



	GET /collections/:id


## Update collections



	PUT /collections/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| ac_name			| 			|  <p>Collections's ac_name.</p>							|
| ac_number			| 			|  <p>Collections's ac_number.</p>							|
| bank_name			| 			|  <p>Collections's bank_name.</p>							|

# Event

## Events From Churches Followed



	GET /followed/:client


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
| image			| 			|  <p>Event's image.</p>							|
| description			| 			|  <p>Event's description.</p>							|
| user			| 			|  <p>Event's creater (An object containing information about the creater with id as required, this is for search and retrival reasons).</p>							|

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

## Event search



	GET /events/search/:q


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
| image			| 			|  <p>Event's image.</p>							|
| description			| 			|  <p>Event's description.</p>							|
| user			| 			|  <p>Event's user.</p>							|

# Items

## Create items



	POST /items


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Items's name.</p>							|
| discription			| 			|  <p>Items's discription.</p>							|
| unit_price			| 			|  <p>Items's unit_price.</p>							|
| user			| 			|  <p>Items's user.</p>							|

## Delete items



	DELETE /items/:id


## Retrieve items



	GET /items/:id


## Update items



	PUT /items/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Items's name.</p>							|
| discription			| 			|  <p>Items's discription.</p>							|
| unit_price			| 			|  <p>Items's unit_price.</p>							|
| user			| 			|  <p>Items's user.</p>							|

# Livestreams

## Create livestreams



	POST /livestreams


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| url			| 			|  <p>Livestreams's url.</p>							|
| user			| 			|  <p>Livestreams's user.</p>							|

## Delete livestreams



	DELETE /livestreams/:id


## Retrieve livestreams



	GET /livestreams/:id


## Update livestreams



	PUT /livestreams/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| url			| 			|  <p>Livestreams's url.</p>							|
| user			| 			|  <p>Livestreams's user.</p>							|

# Orders

## Create orders



	POST /orders


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| item			| 			|  <p>Orders's item.</p>							|
| quntity			| 			|  <p>Orders's quntity.</p>							|
| customer			| 			|  <p>Orders's customer.</p>							|

## Delete orders



	DELETE /orders/:id


## Retrieve orders



	GET /orders/:id


## Update orders



	PUT /orders/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| item			| 			|  <p>Orders's item.</p>							|
| quntity			| 			|  <p>Orders's quntity.</p>							|
| customer			| 			|  <p>Orders's customer.</p>							|

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

## Playlists From Churches Followed



	GET /followed/:client


## Create playlist



	POST /playlists


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| date			| 			|  <p>Playlist's date.</p>							|
| songs			| 			|  <p>Playlist's songs.</p>							|
| user			| 			|  <p>Playlist's creater (An object containing information about the creater with id as required, this is for search and retrival reasons).</p>							|

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

## Playlist search



	GET /playlist/search/:q/:d


## Update playlist



	PUT /playlists/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| date			| 			|  <p>Playlist's date.</p>							|
| songs			| 			|  <p>Playlist's songs.</p>							|
| user			| 			|  <p>Playlist's user.</p>							|

# Quote

## Quotes From Churches Followed



	GET Quotes/followed/:client


## Create quote



	POST /quotes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| verse			| 			|  <p>Quote's verse.</p>							|
| application			| 			|  <p>Quote's application.</p>							|
| lessons			| 			|  <p>Quote's lessons.</p>							|
| date			| 			|  <p>Quote's date.</p>							|
| user			| 			|  <p>Quote's creater (An object containing information about the creater with id as required, this is for search and retrival reasons).</p>							|

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

## Search BY Date



	GET /quotes/search//:d


## Search BY Query



	GET /quotes/search/:q


## Search By Query And Date



	GET /quotes/search/:q/:d


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

## Sermons From Churches Followed



	GET /sermons/followed/:client


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
| image			| 			|  <p>Sermon's image.</p>							|
| messages			| 			|  <p>Sermon's messages.</p>							|
| user			| 			|  <p>Sermon's creater (An object containing information about the creater with id as required, this is for search and retrival reasons).</p>							|

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

## Sermons search



	GET /sermons/search/:q


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
| image			| 			|  <p>Sermon's image.</p>							|
| messages			| 			|  <p>Sermon's messages.</p>							|
| user			| 			|  <p>Sermon's user.</p>							|


