let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec3",
    start: "50% 50%",
    end: "100% 40%",
    markers:true,
    scrub: 2,
    pin: true,
  },
});


tl.to("#top",{
    top:"-50%",
},"rc")

tl.to("#bottom",{
    top:"100%",
},"rc")


