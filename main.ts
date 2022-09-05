controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim4`,
    600,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jump()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim9`,
    99,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -100
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim5`,
    99,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim7`,
    99,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vx = 0
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim8`,
    99,
    false
    )
})
function Jump () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim2`,
        600,
        false
        )
        mySprite.vy = -200
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 100
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim6`,
    99,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim3`,
    600,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim10`,
    99,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim11`,
    99,
    false
    )
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .......eeeeee.......
    .......eeeeee.......
    .......ddeeee.......
    .......b1ddee.......
    .......ddddde.......
    ........9999........
    ........9669........
    ........9669........
    ........9699........
    ........dddd........
    ........dddd........
    ........dddd........
    ........8888........
    ........8888........
    ........8888........
    ........8888........
    ........88ff........
    ........ffff........
    ........ffff........
    `, SpriteKind.Player)
mySprite.ay = 400
scene.cameraFollowSprite(mySprite)
