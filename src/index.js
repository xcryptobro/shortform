import p5 from 'p5'

new p5((p) => {
  p.setup = () => {
    p.createCanvas(420, 420)
  }

  p.draw = () => {
    p.background(69)
    p.ellipse(69, 69, 69, 69)
  }
})
