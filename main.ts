basic.forever(function () {
    music.setTempo(60)
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 5; index++) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    }
    for (let index = 0; index < 3; index++) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
    }
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
