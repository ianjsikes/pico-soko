;(function() {
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
  }
  function lp_key_event(letter, code, type) {
    var e = new Event(type)
    e.key = letter
    e.keyCode = code
    e.which = e.keyCode
    e.altKey = false
    e.ctrlKey = true
    e.shiftKey = false
    e.metaKey = false
    e.bubbles = true
    return e
  }
  window.pressZ = function() {
    document.dispatchEvent(lp_key_event('Z', 'Z'.charCodeAt(0), 'keydown'))
  }
  window.pressX = function() {
    document.dispatchEvent(lp_key_event('X', 'X'.charCodeAt(0), 'keydown'))
  }
  window.pressLeft = function() {
    document.dispatchEvent(lp_key_event('', 37, 'keydown'))
  }
  window.pressUp = function() {
    document.dispatchEvent(lp_key_event('', 38, 'keydown'))
  }
  window.pressRight = function() {
    document.dispatchEvent(lp_key_event('', 39, 'keydown'))
  }
  window.pressDown = function() {
    document.dispatchEvent(lp_key_event('', 40, 'keydown'))
  }
  window.releaseZ = function() {
    document.dispatchEvent(lp_key_event('Z', 'Z'.charCodeAt(0), 'keyup'))
  }
  window.releaseX = function() {
    document.dispatchEvent(lp_key_event('X', 'X'.charCodeAt(0), 'keyup'))
  }
  window.releaseLeft = function() {
    document.dispatchEvent(lp_key_event('', 37, 'keyup'))
  }
  window.releaseUp = function() {
    document.dispatchEvent(lp_key_event('', 38, 'keyup'))
  }
  window.releaseRight = function() {
    document.dispatchEvent(lp_key_event('', 39, 'keyup'))
  }
  window.releaseDown = function() {
    document.dispatchEvent(lp_key_event('', 40, 'keyup'))
  }
  var el = document.createElement('div')
  el.innerHTML =
    '<div>' +
    '<div style="display:inline-block;">' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '<div style="width:100px; height:100px; background:red;" onMouseDown="window.pressLeft()" onMouseUp="window.releaseLeft()" ontouchstart="window.pressLeft()" ontouchend="window.releaseLeft()"> &nbsp;</div>' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '</div>' +
    '<div style="display:inline-block;">' +
    '<div style="width:100px; height:100px; background:green;" onMouseDown="window.pressUp()" onMouseUp="window.releaseUp()" ontouchstart="window.pressUp()" ontouchend="window.releaseUp()">&nbsp;</div>' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '<div style="width:100px; height:100px; background:blue;" onMouseDown="window.pressDown()" onMouseUp="window.releaseDown()" ontouchstart="window.pressDown()" ontouchend="window.releaseDown()"> &nbsp;</div>' +
    '</div>' +
    '<div style="display:inline-block;">' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '<div style="width:100px; height:100px; background:red;" onMouseDown="window.pressRight()" onMouseUp="window.releaseRight()" ontouchstart="window.pressRight()" ontouchend="window.releaseRight()"> &nbsp;</div>' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '</div>' +
    '<div style="display:inline-block;">' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '</div>' +
    '<div style="display:inline-block;">' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '<div style="width:100px; height:100px; background:red;" onMouseDown="window.pressZ()" onMouseUp="window.releaseZ()" ontouchstart="window.pressZ()" ontouchend="window.releaseZ()">&nbsp;</div>' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '</div>' +
    '<div style="display:inline-block;">' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '<div style="width:100px; height:100px; background:blue;" onMouseDown="window.pressX()" onMouseUp="window.releaseX()" ontouchstart="window.pressX()" ontouchend="window.releaseX()">&nbsp;</div>' +
    '<div style="width:100px; height:100px; ">&nbsp;</div>' +
    '</div>'
  insertAfter(
    document.getElementById('canvas') || document.getElementById('playarea_0'),
    el
  )
})()
