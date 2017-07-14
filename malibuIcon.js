MalibuIcon = function (icon, size, classes) {
  return {
    $cell: true,
    $type: 'svg',
    class: `${classes}`,
    style: `height: ${size}px; width: ${size}px`,
    $components: [{
      $type: 'use',
      href: `#${icon}`
    }]
  }
}