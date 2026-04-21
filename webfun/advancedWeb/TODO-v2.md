# Barn Door Wipe v2: Diagonal Split (/) Transition

## Current Status: v1 implemented (vertical scale), now v2 diagonal

**Information Gathered:**
- JS: Single img per character, classList.add('slice-out-left/right')
- CSS: vertical `clip-path: inset(0 0 0 50%)` scaleX(0)

**v2 Plan - True Diagonal Barn Door:**
1. **JS (`initializeModalGallery`)**: Create **2 divs per image**:
   ```
   .image-wrapper[index]
   ├── .half.left  { clip-path: polygon(0 0, 100% 100%, 0 100%) }
   └── .half.right { clip-path: polygon(0 0, 100% 0, 100% 100%) }
   ```
2. **CSS**: Replace slice-* → `barn-door-*`:
   ```
   @keyframes barnOutLeft { transform: translateX(-100%) rotateZ(-5deg) }
   @keyframes barnOutRight { transform: translateX(100%) rotateZ(5deg) }
   ```
3. **JS (`animateToCharacter`)**: Target `.half.left/right` per index, animate halves apart/in.
4. Test wheel = halves slide diagonally apart from center line `/`

**Steps:**
- [ ] Step 1: Update initializeModalGallery() → half divs
- [ ] Step 2: CSS barn-door animations (diagonal)
- [ ] Step 3: Refactor animateToCharacter() → half targeting
- [ ] Step 4: Test diagonal barn door wipe
- [ ] Step 5: Demo

Ready to implement v2?
