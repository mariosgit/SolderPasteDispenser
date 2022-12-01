# SolderPasteDispenser

Repurposing a 3D Printer to dispense stuff from syringe.

## Status

Ultraexperimental - It loads a Gerber file and ~~dumps all coords~~ renders it. Rudimental Marlin 3Dprinter support.

Try me here https://mariosgit.github.io/SolderPasteDispenser/

## Start it

Clone the repo, then...

```
npm i
npm start
```

starts development server with code watch.

In case of errors, try to rerun ```npm i```.

## Folders

This is a NPM project, runs all the software locally in chrome.

* src - sources for the software.
* emulators - Arduino code, mimics a Marlin device, helps during development.
* hardware - sources for hardware - CAD files.
* docs - Used for github pages.

## Style guide

Indent with 4 spaces

Befor pushing on main branch, build the github.io page with
```
npm run build
```

# Refs

Inspired by ct's https://github.com/MakeMagazinDE/Solder-Paste-Dispenser - uhhaaa Delphy SW :-( Aber warum???

Another handy motor driven dispenser https://github.com/koendv/paste_dispenser

Marlin G-code reference https://marlinfw.org/meta/gcode/

FontAwesome Icons https://fontawesome.com/search?q=syr&o=r&m=free

KdTree from there https://github.com/ubilabs/kd-tree-javascript

Grid and Mouse originated from there https://github.com/CodeDraken/canvas-coords
