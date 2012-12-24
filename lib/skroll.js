~function (global) {

/**
 * Skroll constructor
 */

var _this

function Skroll() {
  _this = this
  _this.sections = document.querySelectorAll('section[id]')
  _update()
}

/**
 * Default function to trigger when section his "skrolled"
 */

Skroll.prototype.step = function (name) {
  this.className = 'skrolled'
}

/**
 * The function to execute when the page is scrolled
 */

function _update() {
  for (var i = 0, section ; section = _this.sections[i] ; i++) {
    if (section.className.indexOf('skrolled') !== -1)
      continue
    if (section.offsetTop > window.pageYOffset &&
        section.offsetTop < window.innerHeight + window.pageYOffset) {
      _this.step && _this.step.call(section, section.id)
      return
    }
  }
}

/**
 * Start listening events
 */

Skroll.prototype.start = function () {
  window.onscroll = _update
}


/**
 * Expose library.
 */

global.Skroll = Skroll

}(typeof window !== 'undefined' ? window : global)