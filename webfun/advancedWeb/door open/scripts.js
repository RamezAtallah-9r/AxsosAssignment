window.addEventListener("scroll", () => {
    const scene = document.querySelector(".scene");
    const door = document.querySelector(".door");

    let scrollTop = window.scrollY;
    let maxScroll = 500; // total scroll range
    let progress = Math.min(scrollTop / maxScroll, 1);

    // Phase 1: Rotate door
    if (progress <= 0.5) {
        let angle = progress / 0.5 * -120; // 0 to -120 degrees in first half
        door.style.transform = `perspective(1200px) rotateY(${angle}deg)`;
    }

    // Phase 2: After door fully open, scale scene
    if (progress > 0.5) {
        let scaleProgress = (progress - 0.5) / 0.5; // scale from 0 to 1 in second half
        let scale = 1 + scaleProgress * 1; // scale from 1 to 2
        scene.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
});