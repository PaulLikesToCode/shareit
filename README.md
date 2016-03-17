# shareit
Angular directive that allows the user to share the state of scope in a url.

ShareIt is meant to be used in internal tools. Angular is a common tool to build internal tools with, however it's difficult to share the state of the scope. Perhaps you built an analyst tool, with a list of 3000 transactions, and a bunch of filters. An analyst is digging through the data, applies a bunch of filters, and now wants to share exactly what they are seeing with another analyst. The would probably have to tell the other analyst exactly what filters to set, causing delays and increasing the chances of miscommunication. 

That's where shareIt comes in. ShareIt is a little directive you can add in any view. It will save the state of the scoped variables in a url, so all you have to do is share the link. In the above scenario, shareIt will automatically set the filters to exactly what the first analyst has, making communication that much easier and less error-prone. 

## Usage
The most common way to use the directive will be in a button like this:

``` <input shareit type="button" value="Share it!" ng-click="copy()" shareitignore="all_data"/>```

copy() is the function that shareIt uses to build the url. You get the url in an alert box (this might move to a modal with more options later). shareitignore is an attribute where you can define what not to include in the url. For example, you probably don't want to include the api call that gets all the data in the first place. If passwords or other sensitive material is in the scope, you may not want those included either. 

The final url that gets generated would look something like this:

http://www.example.com?shareit=true&param1=foo&param2=bar
