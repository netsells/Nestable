Nestable
========

## PLEASE NOTE

**https://github.com/dbushell cannot provide any support or guidance beyond this README, but this repo is still under development somehow.**

* * *

### Drag & drop hierarchical list with mouse and touch compatibility (jQuery / Zepto plugin)

[**Try Nestable Demo**](http://dbushell.github.com/Nestable/)

Nestable is an experimental example and not under active development. If it suits your requirements feel free to expand upon it!

## Usage

Write your nested HTML lists like so:
```html
    <div class="dd">
        <ol class="dd-list">
            <li class="dd-item" data-id="1">
                <div class="dd-handle">Item 1</div>
            </li>
            <li class="dd-item" data-id="2">
                <div class="dd-handle">Item 2</div>
            </li>
            <li class="dd-item" data-id="3">
                <div class="dd-handle">Item 3</div>
                <ol class="dd-list">
                    <li class="dd-item" data-id="4">
                        <div class="dd-handle">Item 4</div>
                    </li>
                    <li class="dd-item" data-id="5">
                        <div class="dd-handle">Item 5</div>
                    </li>
                </ol>
            </li>
        </ol>
    </div>
```
Then activate with jQuery like so:

    $('.dd').nestable({ /* config options */ });

### Events

The `callback` provided as an option is fired when elements are reordered or nested.
```js
    $('.dd').nestable({ 
      callback: function(l,e){
            // l is the main container
            // e is the element that was moved
        }
    });
```
### Methods

You can get a serialised object with all `data-*` attributes for each item.
```js
    $('.dd').nestable('serialize');
```
The serialised JSON for the example above would be:
```json
    [{"id":1},{"id":2},{"id":3,"children":[{"id":4},{"id":5}]}]
```
### Configuration

You can change the follow options:

* `maxDepth` number of levels an item can be nested (default `5`)
* `group` group ID to allow dragging between lists (default `0`)
* `callback` callback function when an element has been changed (default `null`)

These advanced config options are also available:

* `listNodeName` The HTML element to create for lists (default `'ol'`)
* `itemNodeName` The HTML element to create for list items (default `'li'`)
* `rootClass` The class of the root element `.nestable()` was used on (default `'dd'`)
* `listClass` The class of all list elements (default `'dd-list'`)
* `itemClass` The class of all list item elements (default `'dd-item'`)
* `dragClass` The class applied to the list element that is being dragged (default `'dd-dragel'`)
* `noDragClass` The class applied to an element to prevent dragging (default `'dd-nodrag'`)
* `handleClass` The class of the content element inside each list item (default `'dd-handle'`)
* `collapsedClass` The class applied to lists that have been collapsed (default `'dd-collapsed'`)
* `noChildrenClass` The class applied to items that cannot have children (default `'dd-nochildren'`)
* `placeClass` The class of the placeholder element (default `'dd-placeholder'`)
* `emptyClass` The class used for empty list placeholder elements (default `'dd-empty'`)
* `expandBtnHTML` The HTML text used to generate a list item expand button (default `'<button data-action="expand">Expand</button>'`)
* `collapseBtnHTML` The HTML text used to generate a list item collapse button (default `'<button data-action="collapse">Collapse</button>'`)

**Inspect the [Nestable Demo](http://dbushell.github.com/Nestable/) for guidance.**

## Change Log

### 8th April 2014

* [tchapi] Add a "start-collapsed" behaviour based on [vincenttheeten](https://github.com/vincenttheeten)'s idea exposed here : [PR](https://github.com/dbushell/Nestable/pull/103)
  * Elements that have the `collapsedClass` on loading will be collapsed automatically

### 15th January 2014

* [tchapi] Merge a lots of branches from the different pull requests that were still waiting in the original repo :
   * fix dd-handle on sub parents _by_ mean-cj [mean-cj](https://github.com/mean-cj/Nestable)
   * new `toArray()` function _by_ [Goktug](https://github.com/Goktug/Nestable)
   * fixed bug for chrome, when there are multiple lists _by_ [andremtoy](https://github.com/andrewmtoy/Nestable.git)
   * Fix for IE7 nd IE 8 _by_ [jasonruech](https://github.com/jasonruesch/Nestable)

### 14th March 2013

* [tchapi] Merge Craig Sansam' branch [https://github.com/craigsansam/Nestable/](https://github.com/craigsansam/Nestable/) - Add the noChildrenClass option

### 13th March 2013

* [tchapi] Replace previous `change` behaviour with a callback

### 12th February 2013

* Merge fix from [jails] : Fix change event triggered twice.

### 3rd December 2012

* [dbushell] add no-drag class for handle contents
* [dbushell] use `el.closest` instead of `el.parents`
* [dbushell] fix scroll offset on document.elementFromPoint()

### 15th October 2012

* Merge for Zepto.js support
* Merge fix for remove/detach items

### 27th June 2012

* Added `maxDepth` option (default to 5)
* Added empty placeholder
* Updated CSS class structure with options for `listClass` and `itemClass`.
* Fixed to allow drag and drop between multiple Nestable instances (off by default).
* Added `group` option to enabled the above.

* * *

Author: David Bushell [http://dbushell.com](http://dbushell.com/) [@dbushell](http://twitter.com/dbushell/)

Contributors : Cyril [http://tchap.me](http://tchap.me), Craig Sansam

Copyright © 2012-2013 David Bushell | BSD & MIT license
