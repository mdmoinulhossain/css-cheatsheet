# Box-sizing
* content-box; gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.

* border-box; tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width.
--------
HTML:
```
<div class="content-box">Content box</div>
<br />
<div class="border-box">Border box</div>
```
--------
CSS:
```
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* Total width: 160px + (2 * 20px) + (2 * 8px) = 216px
     Total height: 80px + (2 * 20px) + (2 * 8px) = 136px
     Content box width: 160px
     Content box height: 80px */
}

.border-box {
  box-sizing: border-box;
  /* Total width: 160px
     Total height: 80px
     Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px
     Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```
---------------------------------------------------------------------------------------------
# Position
* Static - this is the default value, all elements are in order as they appear in the document.
* Relative - the element is positioned relative to its normal position.
* Absolute - the element is positioned absolutely to its first positioned parent.
* Fixed - the element is positioned related to the browser window.
* Sticky - the element is positioned based on the user’s scroll position.
----------
Absolute:
```
<div id="parent">
    <div id="child"></div>
</div>

#parent {
  position: relative;
  
  width: 500px; 
  height: 400px;
  background-color: #fafafa;
  border: solid 3px #9e70ba;
  font-size: 24px;
  text-align: center;
}

#child {
  position: absolute;
  right: 40px;
  top: 100px;

  width: 200px;
  height: 200px;
  background-color: #fafafa;
  border: solid 3px #78e382;
  font-size: 24px;
  text-align: center;
}
```

----------
Relative:
```
<div id="first_element">First element</div>
<div id="second_element">Second element</div>


#first_element {
    position: relative;
    left: 30px;
    top: 70px;
    width: 500px;
    background-color: #fafafa;
    border: solid 3px #ff7347;
    font-size: 24px;
    text-align: center;
}

#second_element {
    position: relative;
    width: 500px;
    background-color: #fafafa;
    border: solid 3px #ff7347;
    font-size: 24px;
    text-align: center;
}
```