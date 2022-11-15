# Touchscreen Event in JavaScript

The touchend event occurs when the user removes the finger from an element.

Note: The touchend event will only work on devices with a touch screen.

Tip: Other events related to the touchend event are:

- touchstart - occurs when the user touches an element
- touchmove - occurs when the user moves the finger across the screen
- touchcancel - occurs when the touch is interrupted


## Example
Execute a JavaScript when the user releases the touch (for touch screens only):

```html
<p ontouchend="myFunction(event)">Touch me!</p>
```
```html
DOM touchend Event
Touch this paragraph, then release the touch to trigger a function that will write "Hello World".

Note: This example is for touch devices only.
```
