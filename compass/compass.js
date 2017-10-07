let direction = 0
basic.forever(() => {
    direction = input.compassHeading()
    if (direction <= 338 && direction < 23) {
        basic.showArrow(ArrowNames.North)
    }
    if (direction <= 23 && direction < 68) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (direction <= 68 && direction < 113) {
        basic.showArrow(ArrowNames.East)
    }
    if (direction <= 113 && direction < 158) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (direction <= 158 && direction < 203) {
        basic.showArrow(ArrowNames.South)
    }
    if (direction <= 203 && direction < 248) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (direction <= 248 && direction < 293) {
        basic.showArrow(ArrowNames.West)
    }
    if (direction <= 293 && direction < 338) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
 
